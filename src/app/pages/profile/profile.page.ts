import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController, AlertController, Platform } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = {};
  uid = {};
  habitCounter = 0;
  goalCounter = 0;
  taskCounter = 0;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, public navCtrl: NavController, 
    private plt: Platform, alertCtrl: AlertController) {
    this.afAuth.authState.subscribe(user => {
      if (user)
        this.user = user;
        this.uid = user.uid;
    });
  }

  async ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (!user)
        return;
      this.db.collection('users').doc(`${this.uid}`).collection('doneToDos').snapshotChanges().subscribe(colSnap => {
        this.taskCounter = 0;
        colSnap.forEach(() => {
          this.taskCounter += 1;
        });
      });
      this.db.collection('users').doc(`${this.uid}`).collection('finishedHabits').snapshotChanges().subscribe(colSnap => {
        this.habitCounter = 0;
        this.goalCounter = 0;
        colSnap.forEach(a => {
          this.habitCounter += 1;
          if(a.payload.doc.get('goal') != 0 && a.payload.doc.get('successDays') >= a.payload.doc.get('goal')){
            this.goalCounter += 1;
          };
        });
      });
    });
  } 

  signOut() {
    this.afAuth.signOut().then(() => {
      location.reload();
    });
  }
}
