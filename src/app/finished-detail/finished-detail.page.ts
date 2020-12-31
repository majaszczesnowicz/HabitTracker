import { Component, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-finished-detail',
  templateUrl: './finished-detail.page.html',
  styleUrls: ['./finished-detail.page.scss'],
})
export class FinishedDetailPage implements OnInit {
  habit: any;
  date;
  uid = {}; 
  ifDesc = true;
  ifGoal = false;
  iconColor = "medium";
  goal = "";
  message1 = "";
  message2 = "";

  @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;

  doughnutChart: Chart;

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

  ngAfterViewInit() {
    this.doughnutChartMethod();
  }

  doughnutChartMethod(){
    let color;
    color = this.chooseColor(this.habit.color);
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      options: {
        legend: {
          display: false
        }
      },
      data: {
        labels: ["nie udało się trzymać nawyku", "udało się trzymać nawyku"],
        datasets: [
          {
            data: [(this.habit.duration-this.habit.successDays), this.habit.successDays],
            backgroundColor: [
              "#eeeeee",
              color
            ],
            hoverBackgroundColor: ["#eeeeee", color]
          }
        ]
      }
    });
  }

  chooseColor(hColor){
    switch (hColor) {
      case "primary":
        return "#CFA4BF";
      case "secondary":
        return "#ECB2C0";
      case "tertiary":
        return "#FBD9B6";
      case "success":
        return "#BFE1EA";
      case "warning":
        return "#FCF1B9";
    }
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

  async restore() {
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
          let now = new Date();
          let nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), 
          now.getUTCMinutes(), now.getUTCSeconds()));
          this.db.collection(`users/${this.uid}/ongoingHabits`).add({
            name: this.habit.name, 
            description: this.habit.description,
            created: nowUtc,
            color: this.habit.color,
            date: now.toISOString(),
            duration: this.habit.duration,
            reminder: this.habit.reminder,
            goal: this.habit.goal,
            successDays: 0 
          }).then(docRef => {
            let habitDate = new Date();
            let daysNumber = Number(this.habit.duration)+1;
            for(let i = 1; i < daysNumber; i++){
              let date =  new Date(habitDate.getFullYear(),habitDate.getMonth(),habitDate.getDate()+i).toISOString();
              this.db.collection(`users/${this.uid}/ongoingHabits/${docRef.id}/days`).add({
                date: date,
                ifDone: false
              })
            }
          });
          this.router.navigateByUrl(`/`);
        }
      }
      ],
    });
    return await alert.present();
  }

  ngOnInit() {
    if(this.route.snapshot.data['habitData']){
      this.habit = this.route.snapshot.data['habitData'];
    }
    if(this.habit.goal != 0 && this.habit.goal <= this.habit.duration){
      this.ifGoal = true;
      this.message2 = this.getMessage2();
      this.goal = this.goalMessage();
      if(this.habit.successDays >= this.habit.goal){
        this.iconColor = this.habit.color;
      }
    }
    if(!this.habit.description){this.ifDesc = false;}
    this.message1 = this.getMessage();
  }

  getMessage(){
    return `udało ci się trzymać nawyku przez ${this.habit.successDays} z ${this.habit.duration} dni`;
  }

  getMessage2(){
    if(this.habit.successDays >= this.habit.goal){
      return `udało ci się osiągnąć wyznaczony cel, gratulacje!`;
    }
    else{
      return `nie udało ci się osiągnąć wyznaczonego celu ale nie poddawaj się!`;
    }
  }

  goalMessage(){
    if(this.habit.goal ==1){return "1 dzień";}
      else{return `${this.habit.goal} dni`;}
  }
}



 