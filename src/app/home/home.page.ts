import { CreateModalComponent } from './../create-modal/create-modal.component';
import { Component, OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { differenceInDays, isSameDay, compareAsc, addDays, setHours, setMinutes, setSeconds, getYear, getTime } from 'date-fns';
import { Plugins, LocalNotificationEnabledResult, LocalNotificationActionPerformed, LocalNotification, Device} from '@capacitor/core';
import * as firebase from 'firebase';
const {LocalNotifications} = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  items = [];
  successDays = [];
  uid = {};
  loading = true;
  started = false;
  noItems = false;
  randomColor;
  habit: any = {};
  itemsEnding = [];


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
          if(this.items.length == 0){this.noItems = true;}
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

    async ngOnInit(){
      await LocalNotifications.requestPermission();
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
          this.noItems = false;
          let now = new Date();
          this.randomColor = this.randomNumber();
  
          this.db.collection(`users/${this.uid}/ongoingHabits`).add({
            name: this.habit.name, 
            description: this.habit.description,
            created: now.toISOString(),
            color: this.randomColor,
            date: this.habit.date,
            duration: Number(this.habit.duration),
            reminder: this.habit.reminder,
            goal: Number(this.habit.goal),
            successDays: 0 
          }).then(async docRef => {
            let habitDate = new Date(this.habit.date);
            let daysNumber = Number(this.habit.duration)+1;
            for(let i = 1; i < daysNumber; i++){
              let dateDay = new Date(habitDate.getFullYear(),habitDate.getMonth(),habitDate.getDate()+i);
              let date =  dateDay.toISOString();
              this.db.collection(`users/${this.uid}/ongoingHabits/${docRef.id}/days`).add({
                date: date,
                ifDone: false
              });
              if(this.habit.reminder){
                let reminder = new Date(this.habit.reminder);
                let reminderDate = new Date(getYear(dateDay),dateDay.getMonth(),dateDay.getDate()-1,reminder.getHours(),reminder.getMinutes());
                let id = getTime(now);
                id = id + i;
                await LocalNotifications.schedule({
                  notifications: [
                    {
                      title: "przypomnienie",
                      body: `monitoruj nawyk: ${this.habit.name}`,
                      id: id,
                      schedule: { 
                        at: reminderDate
                      },
                      attachments: null,
                      actionTypeId: "",
                      extra: null,
                      smallIcon: "res://icon"
                    }
                  ]
                });
              }
            }
          });
          
          if (this.items.length >= 20){
            this.alertCtrl.create({
              header: 'to zbyt dużo nawyków na raz!',
              message: 'wyświetlane jest do 20 elementów',
              buttons: ['ok'],
            }).then(warning => {
              warning.present();
            });
          }

            if(this.items.length < 20){
              await alert.present(); 
            }
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
      today = new Date(getYear(today),today.getMonth(),today.getDate());
      date = new Date(date);
      let startDate = new Date(getYear(date),date.getMonth(),date.getDate());
      let endDate = addDays(startDate, (days-1));
      if(isSameDay(startDate, today)){
        this.started = true;
        return (days-1);
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
      if(duration==7){
        const r = daysLeft%7; 
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
      if(duration==21){
        if(daysLeft == 20 || daysLeft == 19 || daysLeft == 18){return "/assets/custom-ion-icons/progress6.svg";}
        if(daysLeft == 17 || daysLeft == 16 || daysLeft == 15){return "/assets/custom-ion-icons/progress5.svg";}
        if(daysLeft == 14 || daysLeft == 13 || daysLeft == 12){return "/assets/custom-ion-icons/progress4.svg";}
        if(daysLeft == 11 || daysLeft == 10 || daysLeft == 9){return "/assets/custom-ion-icons/progress3.svg";}
        if(daysLeft == 8 || daysLeft == 7 || daysLeft == 6){return "/assets/custom-ion-icons/progress2.svg";}
        if(daysLeft == 5 || daysLeft == 4 || daysLeft == 3){return "/assets/custom-ion-icons/progress1.svg";}
        if(daysLeft == 2 || daysLeft == 1 || daysLeft == 0){return "/assets/custom-ion-icons/progress0.svg";}
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
      this.db.doc(`users/${this.uid}/finishedHabits/${id}`).set(item);
      delete item.id;
    } 
 
    onSelect(id, item) {
      this.dataService.setData(id, item);
      this.router.navigateByUrl(`/detail/${id}`);  
    }

  }
