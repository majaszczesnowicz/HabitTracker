import { CreateModalComponent } from './../create-modal/create-modal.component';
import { Component, OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { differenceInDays, isSameDay, compareAsc, addDays} from 'date-fns';
import * as firebase from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items = [];
  uid = {};
  loading = true;
  started = false;
  randomColor;
  habit: any = {};


  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, public navCtrl: NavController, private router: Router,
    private alertCtrl: AlertController, private dataService: DataService, private modalCtrl: ModalController) { 
      this.afAuth.authState.subscribe(user => {
        if (user)
          this.uid = user.uid;
      });
      this.afAuth.authState.subscribe(user => {
        if (!user)
          return;
        this.db.collection(`users/${this.uid}/ongoingHabits`, ref => {
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
          for(let item of this.items){
            this.started = false;
            item.message = "";
            item.icon = "/assets/custom-ion-icons/progress7.svg";
            item.daysLeft = this.countDays(item.date, item.duration, item);
            if(this.started){
              if(item.daysLeft == 0){
                item.message = "nawyk kończy się dziś!";
              }
              if(item.daysLeft == 1){
                item.message = `${item.daysLeft} dzień do końca`;
              }
              if(item.daysLeft > 1){
                item.message = `${item.daysLeft} dni do końca`;
              }
              item.icon = this.chooseIcon(item.daysLeft, item.duration);
              console.log(item.icon);
            }
            else{
              if(item.daysLeft == 1){
                item.message = `${item.daysLeft} dzień do rozpoczęcia`;
              }
              else{
                item.message = `${item.daysLeft} dni do rozpoczęcia`;
              }
            }
          }
        });
      });
    }

    ngOnInit(){
     
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
  
          this.db.collection(`users/${this.uid}/ongoingHabits`).add({
            name: this.habit.name, 
            description: this.habit.description,
            created: nowUtc,
            color: this.randomColor,
            date: this.habit.date,
            duration: Number(this.habit.duration),
            reminder: this.habit.reminder
          }).then(docRef => {
            let habitDate = new Date(this.habit.date);
            let daysNumber = Number(this.habit.duration)+1;
            for(let i = 1; i < daysNumber; i++){
              let date =  new Date(habitDate.getFullYear(),habitDate.getMonth(),habitDate.getDate()+i).toISOString();
              this.db.collection(`users/${this.uid}/ongoingHabits/${docRef.id}/days`).add({
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

    countDays(date, days, item){
      let today = new Date();
      let startDate = new Date(date);
      let endDate = addDays(startDate, (days-1));
      if(isSameDay(startDate, today)){
        this.started = true;
        return days;
      }
      if((compareAsc(today, startDate) == 1 && (compareAsc(today, endDate) !== 1))|| (isSameDay(endDate, today))){
        this.started = true;
        return differenceInDays(endDate, today);
      }
      if(compareAsc(startDate, today) == 1){
        return differenceInDays(startDate, today);
      }
      if(compareAsc(today, endDate) == 1){
        this.completeHabit(item);
      }
    }

    chooseIcon(daysLeft, duration){
      if(daysLeft == duration){
        return "/assets/custom-ion-icons/progress7.svg";
      }
      if(duration==7){
        const r = daysLeft%7; 
        console.log(r);
        return `/assets/custom-ion-icons/progress${r}.svg`;
      }
      if(duration==14){
        if(daysLeft == 13 || daysLeft == 12){return "/assets/custom-ion-icons/progress6.svg";}
        if(daysLeft == 11 || daysLeft == 10){return "/assets/custom-ion-icons/progress5.svg";}
        if(daysLeft == 9 || daysLeft == 8){return "/assets/custom-ion-icons/progress4.svg";}
        if(daysLeft == 7 || daysLeft == 6){return "/assets/custom-ion-icons/progress3.svg";}
        if(daysLeft == 5 || daysLeft == 4){return "/assets/custom-ion-icons/progress2.svg";}
        if(daysLeft == 3 || daysLeft == 2){return "/assets/custom-ion-icons/progress1.svg";}
        if(daysLeft == 1 || daysLeft == 0){return "/assets/custom-ion-icons/progress0.svg";}
      }
      if(duration==28){
        if(daysLeft == 27 || daysLeft == 26 || daysLeft == 25 || daysLeft == 24){return "/assets/custom-ion-icons/progress6.svg";}
        if(daysLeft == 23 || daysLeft == 22 || daysLeft == 21 || daysLeft == 20){return "/assets/custom-ion-icons/progress5.svg";}
        if(daysLeft == 19 || daysLeft == 18 || daysLeft == 17 || daysLeft == 16){return "/assets/custom-ion-icons/progress4.svg";}
        if(daysLeft == 15 || daysLeft == 14 || daysLeft == 13 || daysLeft == 12){return "/assets/custom-ion-icons/progress3.svg";}
        if(daysLeft == 11 || daysLeft == 10 || daysLeft == 9 || daysLeft == 8){return "/assets/custom-ion-icons/progress2.svg";}
        if(daysLeft == 7 || daysLeft == 6 || daysLeft == 5 || daysLeft == 4){return "/assets/custom-ion-icons/progress1.svg";}
        if(daysLeft == 3 || daysLeft == 2 || daysLeft == 1 || daysLeft == 0){return "/assets/custom-ion-icons/progress0.svg";}
      }
    }

    completeHabit(item){
      this.db.doc(`users/${this.uid}/ongoingHabits/${item.id}`).delete();
      let id = item.id;
      delete item.id;
      this.db.doc(`users/${this.uid}/finishedHabits/${id}`).set(item);

      const increment = firebase.firestore.FieldValue.increment(1);
      const counterRef = this.db.collection('users').doc(`${this.uid}`).collection('counters').doc('counter'); 
      this.db.collection('users').doc(`${this.uid}`).collection('counters').doc('counter').ref.get().then((documentSnapshot) => {
        if(!documentSnapshot.exists){
          counterRef.set(
          { taskCounter: 0,
            habitCounter: 1
          });
        }
        else{
          counterRef.update({ habitCounter: increment });
        }
      });
    }

    onSelect(id, item) {
      this.dataService.setData(id, item);
      this.router.navigateByUrl(`/detail/${id}`);
    }
  }
