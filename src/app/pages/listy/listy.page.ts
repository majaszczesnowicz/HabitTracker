import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listy',
  templateUrl: './listy.page.html',
  styleUrls: ['./listy.page.scss'],
})
export class ListyPage implements OnInit {
  items = [];
  uid = {};

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore,
    private alertCtrl: AlertController ) { 
      this.afAuth.authState.subscribe(user => {
        if (user)
          this.uid = user.uid;
      });
    }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (!user)
        return;
      this.db.collection(`users/${this.uid}/pilne`).snapshotChanges().subscribe(colSnap => {
        this.items = [];
        colSnap.forEach(a => {
          this.items.push(a.payload.doc.data());
        });
      });
    });
  }

  async add(){
    const alert = await this.alertCtrl.create({
      header: 'nowe zadanie',
      buttons: [
      {
        text: 'anuluj',
        role: 'cancel',
        handler: () => {
          console.log('anuluj');
        }
      },
      {
        text: 'dodaj',
        handler: (val) => {
          console.log('dodaj');
          let now = new Date();
          let nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), 
          now.getUTCMinutes(), now.getUTCSeconds()));

          this.db.collection(`users/${this.uid}/pilne`).add({
            text: val.zadanie,
            position: 0,
            // position: this.items ? this.items[0].position + 1 : 0, 
            created: nowUtc
          });
        }
      }
      ],
      inputs: [
        {
          name: 'zadanie',
          type: 'text',
          placeholder: 'nazwa'
        }
      ]
    });
    return await alert.present();
  }
}
