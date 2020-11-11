import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  habit: any;
  date;
  uid = {};

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private db: AngularFirestore, 
    private router: Router, private route: ActivatedRoute, public navParams: NavParams, private alertCtrl: AlertController) { 
      this.afAuth.authState.subscribe(user => {
        if (user)
          this.uid = user.uid;
      });
      
  }

  async del(habitId){
    const alert = await this.alertCtrl.create({
      header: 'czy na pewno chcesz usunąć ten nawyk?',
      buttons: [
      {
        text: 'anuluj',
        role: 'cancel',
        handler: () => {
          console.log('anuluj');
        }
      },
      {
        text: 'usuń',
        handler: () => {
          console.log('usuń');
          this.db.doc(`users/${this.uid}/trwajace/${habitId}`).delete();
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
    let today = new Date();
    this.date =  new Date(today.getFullYear(),today.getMonth(),today.getDate()+10).toISOString();
  }

}
