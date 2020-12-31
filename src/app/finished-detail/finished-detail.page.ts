import { Component, ElementRef, OnInit } from '@angular/core';
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
  @ViewChild("barCanvas") barCanvas: ElementRef;
  @ViewChild("doughnutCanvas") doughnutCanvas: ElementRef;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;

  private barChart: Chart;
  private doughnutChart: Chart;
  private lineChart: Chart;

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
    if (this.route.snapshot.data['habitData']){
      this.habit = this.route.snapshot.data['habitData'];
    }
    if(this.habit.goal != 0 && this.habit.goal <= this.habit.duration){this.ifGoal = true;}
    if(!this.habit.description){this.ifDesc = false;}
    
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["duration", "successDays"],
        datasets: [
          {
            label: "# of Votes",
            data: [this.habit.duration, this.habit.successDays],
            backgroundColor: [
              "rgba(238, 238, 238, 0.2)",
              this.habit.color
            ],
            hoverBackgroundColor: ["#FF6384", "#36A2EB"]
          }
        ]
      }
    });

  }
}



 