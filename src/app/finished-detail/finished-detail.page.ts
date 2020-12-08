import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-finished-detail',
  templateUrl: './finished-detail.page.html',
  styleUrls: ['./finished-detail.page.scss'],
})
export class FinishedDetailPage implements OnInit {
  habit: any;
  date;
  uid = {}; 
  eventSource = [];
  viewTitle: string;
  ifDesc = true;
  ifGoal = false;

  calendar = {
        mode: 'month',
        formatDayHeader: 'EEE',
        formatMonthTitle: 'MMM yyyy',
        startingDayMonth: '1',
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
          this.db.doc(`users/${this.uid}/finishedHabits/${habitId}`).delete();
          this.router.navigateByUrl(`/finishedHabits`);
        }
      }
      ],
    });
    return await alert.present();
  }

  async restore(habit) {
    const alert = await this.alertCtrl.create({
      header: 'czy chcesz przywrócić nawyk?',
      message: 'jeśli chcesz jeszcze popracować nad tym nawykiem możesz przenieść go do trwających i zacząć od nowa',
      buttons: [
      {
        text: 'anuluj',
        role: 'cancel',
        handler: () => {
        }
      },
      {
        text: 'przywróć',
        handler: () => {
          let today = new Date().toISOString();
          this.db.doc(`users/${this.uid}/finishedHabits/${habit.id}`).delete();
          let id = habit.id;
          delete habit.id;
          this.db.doc(`users/${this.uid}/ongoingHabits/${id}`).set(habit);
          this.db.doc(`users/${this.uid}/ongoingHabits/${id}`).update({date: today});
          this.router.navigateByUrl(`/finishedHabits`);
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
 