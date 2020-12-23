import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { ViewChild } from '@angular/core';
import { setHours, setMinutes, setSeconds, addDays, compareAsc, getYear, format } from 'date-fns';
import * as firebase from 'firebase';
 
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  habit: any;
  dates = [];
  uid = {}; 
  eventSource = [];
  viewTitle: string;
  ifGoal = false;
  ifDesc = true;

  calendar = {
        mode: 'month',
        formatDayHeader: 'EEE',
        formatMonthTitle: 'MMM yyyy',
        startingDayMonth: '1',
        currentDate: new Date(),
        locale: 'pl-PL',
        autoSelect: false,
        showEventDetail: false
      };
  
      event = {
        id: '',
        title: '',
        startTime: '',
        endTime: '',
        allDay: true,
        ifDone: false
      };
    
  @ViewChild(CalendarComponent) myCal: CalendarComponent;

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
    this.afAuth.authState.subscribe(user => {
      if (!user)
        return;
      this.db.collection(`users/${this.uid}/ongoingHabits/${this.habit.id}/days`, ref => {
        let query = ref.orderBy('date');
        return query;
      }).snapshotChanges().subscribe(colSnap => {
        colSnap.forEach(a => {
          let item = a.payload.doc.data();
          item['id'] = a.payload.doc.id;
          this.dates.push(item);
        });
        for(let date of this.dates){
        this.addEvent(date.id, date.date, date.ifDone);
        }
      });
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
    if(this.habit.goal != 0 && this.habit.goal <= this.habit.duration){this.ifGoal = true;}
    if(!this.habit.description){this.ifDesc = false;}
  }

  addEvent(id, date, ifDone){
    let start = new Date(date);
    start = setHours(start,0);
    start = setMinutes(start,0);
    start = setSeconds(start,0);
    let eventCopy = {
      id: id,
      title: '',
      startTime: new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate())),
      endTime: new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate() + 1)),
      allDay: true,
      ifDone: ifDone
    }
    this.eventSource.push(eventCopy);
    this.myCal.loadEvents();
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

  onTimeSelected = (ev: { selectedTime: Date, events: any[] }) => {
    let id = ev.events[0].id;
    let today = new Date();
    today = new Date(getYear(today),today.getMonth(),today.getDate());
    let date = new Date(getYear(ev.selectedTime),ev.selectedTime.getMonth(),ev.selectedTime.getDate());
    if(compareAsc(today, date)==0 || compareAsc(today, date)==1){
      this.alertCtrl.create({
        header: format(ev.selectedTime, 'dd/MM/yyyy'),
        message: 'czy tego dnia udało ci się trzymać nawyku?',
        buttons: [
          {
            text: 'tak',
            handler: () => {
              const increment = firebase.firestore.FieldValue.increment(1);
              this.db.doc(`users/${this.uid}/ongoingHabits/${this.habit.id}/days/${id}`).update(
                {
                  ifDone: true
                });
              if(ev.events[0].ifDone == false){
                this.db.doc(`users/${this.uid}/ongoingHabits/${this.habit.id}`).update(
                  {
                    successDays: increment
                  });
              }
              ev.events[0].ifDone = true;
              this.myCal.loadEvents();
            }
          },
          {
            text: 'nie',
            role: 'cancel',
            handler: () => {
              const increment = firebase.firestore.FieldValue.increment(-1);
              this.db.doc(`users/${this.uid}/ongoingHabits/${this.habit.id}/days/${id}`).update(
                {
                  ifDone: false
                });
              if(ev.events[0].ifDone == true){
                this.db.doc(`users/${this.uid}/ongoingHabits/${this.habit.id}`).update(
                  {
                    successDays: increment
                  });
              }
              ev.events[0].ifDone = false;
              this.myCal.loadEvents();
          }
        }], 
      }).then(alert => {
        alert.present();
      });      
    }
  }

  markDisabled = (date: Date) => {
    let startDate = new Date(this.habit.date);
    startDate = setHours(startDate,0);
    startDate = setMinutes(startDate,0);
    startDate = setSeconds(startDate,0);
    let endDate = addDays(startDate, (this.habit.duration));
    if((compareAsc(date, endDate) == 1) || (compareAsc(startDate, date) == 1)){
      return true;
    }
  }

  getEventClass(events){
    for (let i = 0; i < events.length; i++){
      const event = events[i];
      if (event.ifDone){
        switch (this.habit.color) {
          case "primary":
            return "ifDone-truep";
          case "secondary":
            return "ifDone-trues";
          case "tertiary":
            return "ifDone-truet";
          case "success":
            return "ifDone-truess";
          case "warning":
            return "ifDone-truew";
        } 
        return "ifDone-truew";
      }
      else{
        return "ifDone-false";
      }
    }
  }
}
