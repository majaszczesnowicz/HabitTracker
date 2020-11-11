import { CreateModalComponent } from './../create-modal/create-modal.component';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [];
  uid = {};
  loading = true;
  randomColor;
  habit: any = {};
  iconSrc = "/assets/custom-ion-icons/progress0.svg";


  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, public navCtrl: NavController, private router: Router,
    private alertCtrl: AlertController, private dataService: DataService, private modalCtrl: ModalController) { 
      this.afAuth.authState.subscribe(user => {
        if (user)
          this.uid = user.uid;
      });
      this.afAuth.authState.subscribe(user => {
        if (!user)
          return;
        this.db.collection(`users/${this.uid}/trwajace`, ref => {
          let query = ref.orderBy('created');
          query = query.limit(20);
          return query;
        }).snapshotChanges().subscribe(colSnap => {
          this.items = [];
          colSnap.forEach(a => {
            let item = a.payload.doc.data();
            item['id'] = a.payload.doc.id;
            this.items.push(item);
          });
          this.loading = false;
        });
        this.countDays();
      });
    }

  
    async openModal(){
      const modal = await this.modalCtrl.create({
        component: CreateModalComponent
      });

      const alert = await this.alertCtrl.create({
        header: 'super!',
        message: 'nowy nawyk został utworzony',
        buttons: ['zamknij']
      });

      await modal.present();

      await modal.onWillDismiss().then(async res => {
        if(res.data != null){
          this.habit = res.data;

          let now = new Date();
          let nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), 
          now.getUTCMinutes(), now.getUTCSeconds()));
          this.randomColor = this.randomNumber();
  
          this.db.collection(`users/${this.uid}/trwajace`).add({
            name: this.habit.name, 
            description: this.habit.description,
            created: nowUtc,
            color: this.randomColor,
            date: this.habit.date,
            duration: this.habit.duration,
            reminder: this.habit.reminder
          }).then(docRef => {
            let habitDate = new Date(this.habit.date);
            let daysNumber = Number(this.habit.duration)+1;
            for(let i = 1; i < daysNumber; i++){
              let date =  new Date(habitDate.getFullYear(),habitDate.getMonth(),habitDate.getDate()+i).toISOString();
              this.db.collection(`users/${this.uid}/trwajace/${docRef.id}/days`).add({
                date: date,
                ifDone: false
              })
            }
          });
          
          if (this.items.length >= 20)
            this.alertCtrl.create({
              header: 'to zbyt dużo nawyków na raz!',
              message: 'wyświetlane jest do 20 elementów',
              buttons: ['ok'],
            }).then(warning => {
              warning.present();
            });

          await alert.present(); 
        }
          
      });
 
    }


    randomNumber(){
      const min = Math.ceil(1);
      const max = Math.floor(5);
      let number =  Math.floor(Math.random() * (max - min + 1)) + min;
      switch (number) {
        case 1:
          return "primary";
        case 2:
          return "secondary";
        case 3:
          return "tertiary";
        case 4:
          return "success";
        case 5:
          return "warning";
      } 
    }

    countDays(){
      let today = new Date();
      for(let item of this.items){
        let endDate = new Date(item.date);
        const daysLeft = endDate.valueOf() - today.valueOf();
        item.daysLeft = daysLeft;
      }
    }

    onSelect(id, item) {
      this.dataService.setData(id, item);
      this.router.navigateByUrl(`/detail/${id}`);
    }
  }
