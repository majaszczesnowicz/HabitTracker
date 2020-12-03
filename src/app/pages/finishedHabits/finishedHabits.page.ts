import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { addDays, format } from 'date-fns';

@Component({
  selector: 'app-finishedHabits',
  templateUrl: './finishedHabits.page.html',
  styleUrls: ['./finishedHabits.page.scss'],
})
export class FinishedHabitsPage implements OnInit {
  items = [];
  uid = {};
  loading = true;
  iconSrc = "/assets/custom-ion-icons/progress0.svg";

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, public navCtrl: NavController, private router: Router,
    private alertCtrl: AlertController, private dataService: DataService) {
      this.afAuth.authState.subscribe(user => {
        if (user)
          this.uid = user.uid;
      });
      this.afAuth.authState.subscribe(user => {
        if (!user)
          return;
        this.db.collection(`users/${this.uid}/finishedHabits`, ref => {
          let query = ref.orderBy('created');
          return query;
        }).snapshotChanges().subscribe(colSnap => {
          this.items = [];
          colSnap.forEach(a => {
            let item = a.payload.doc.data();
            item['id'] = a.payload.doc.id;
            this.items.push(item);
          });
          this.loading = false;
          for(let item of this.items){
            item.endDate = this.countEndDate(item.date, item.duration);
            item.message = `nawyk zakończył się ${item.endDate}`;
          }
        });
      });
    }

  ngOnInit() {

  }

  countEndDate(date, days){
    let startDate = new Date(date);
    let endDate = addDays(startDate, (days-1));
    return format(endDate, 'dd/MM/yyyy');
  }

  onSelect(id, item) {
    this.dataService.setData(id, item);
    this.router.navigateByUrl(`/detail/${id}`);
  }

}

