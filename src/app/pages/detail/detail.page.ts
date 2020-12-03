import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  habit: any;
  date;
  uid = {};
  eventSource = [];
  viewTitle: string;

  calendar = {
        mode: 'month',
        currentDate: new Date(),
        locale: 'pl-PL'
      };
  
  event = {
    title: '',
    desc: '',
    startTime: null,
    endTime: '',
    allDay: true
  };
    
  @ViewChild(CalendarComponent) myCal: CalendarComponent;
  modalCtrl: any;

  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              private db: AngularFirestore,
              private router: Router,
              private route: ActivatedRoute,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
      }
    });
  }

  async del(habitId) {
    const alert = await this.alertCtrl.create({
      header: 'czy na pewno chcesz usunąć ten nawyk?',
      buttons: [
      {
        text: 'anuluj',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'usuń',
        handler: () => {
          this.db.doc(`users/${this.uid}/ongoingHabits/${habitId}`).delete();
          this.router.navigateByUrl(`/`);
        }
      }
      ],
    });
    return await alert.present();
  }

  ngOnInit() {
    if (this.route.snapshot.data['habitData']){
      this.habit = this.route.snapshot.data['habitData'];
    }
  }

  next(){
    this.myCal.slideNext();
  }

  back(){
    this.myCal.slidePrev();
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

}
