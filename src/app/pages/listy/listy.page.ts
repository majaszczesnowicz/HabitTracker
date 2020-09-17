import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
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
      this.db.collection(`users/${this.uid}/pilne`, ref => {
        return ref.orderBy('pos','desc');
      }).snapshotChanges().subscribe(colSnap => {
        this.items = [];
        colSnap.forEach(a => {
          let item = a.payload.doc.data();
          item['id'] = a.payload.doc.id;
          this.items.push(item);
        });
      });
    });
  }

  getPosition(){
    if (this.items.length == 0){
      return 1;
    }
    else{
      return this.items[0].pos + 1;
    }
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
            pos: this.getPosition(), 
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

  deleteTask(item){
    this.db.doc(`users/${this.uid}/pilne/${item.id}`).delete();
  }

  completeTask(item){
    this.moveTask(item, 'wykonane')
  }

  moveLater(item){
    this.moveTask(item, 'napozniej')
  }

  moveTask(item, list: string){
    this.db.doc(`users/${this.uid}/pilne/${item.id}`).delete();
    let id = item.id;
    delete item.id;
    this.db.collection(`users/${this.uid}/${list}`, ref => {
      return ref.orderBy('pos','desc').limit(1);
    }).get().toPromise().then(qSnap => {
      item.pos = 1;
      qSnap.forEach(a => {
        item.pos = a.data().pos + 1;
      });
      this.db.doc(`users/${this.uid}/${list}/${id}`).set(item);
    });
  }

}
