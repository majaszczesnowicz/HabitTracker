import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Plugins, LocalNotificationEnabledResult, LocalNotificationActionPerformed, LocalNotification, Device} from '@capacitor/core';
import { NavController, AlertController, Platform } from '@ionic/angular';
const {LocalNotifications} = Plugins;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = {};
  uid = {};
  items = [];
  
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
      this.db.collection(`users/${this.uid}/counters`).snapshotChanges().subscribe(colSnap => {
        this.items = [];
        colSnap.forEach(a => {
          let item = a.payload.doc.data();
          this.items.push(item);
        });
      });
    });
    await LocalNotifications.requestPermission();
  } 

  async scheduleBasic(){
    await LocalNotifications.schedule({
      notifications: [
        {
          title: "Title",
          body: "Body",
          id: 1,
          schedule: { 
            //at: new Date(Date.now() + 1000 * 5) ,
            on: {hour: 22, minute: 0}
          },
          sound: null,
          attachments: null,
          actionTypeId: "",
          extra: null,
          smallIcon: "res://ic_notif_icon"
        }
      ]
    });
  }

  signOut() {
    this.afAuth.signOut().then(() => {
      location.reload();
    });
  }
}
