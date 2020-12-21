import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-laterToDos',
  templateUrl: './laterToDos.page.html',
  styleUrls: ['./laterToDos.page.scss'],
})
export class LaterToDosPage implements OnInit {
  items = [];
  uid = {};
  loading = true;

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
      this.db.collection(`users/${this.uid}/laterToDos`, ref => {
        let query = ref.orderBy('pos','desc');
        query = query.limit(2);
        return query;
      }).snapshotChanges().subscribe(colSnap => {
        this.items = [];
        colSnap.forEach(a => {
          let item = a.payload.doc.data();
          item['id'] = a.payload.doc.id;
          this.items.push(item);
        });
        this.loading = false;
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

          this.db.collection(`users/${this.uid}/laterToDos`).add({
            text: val.zadanie,
            pos: this.getPosition(),
            created: nowUtc
          });
          if (this.items.length >= 100)
            this.alertCtrl.create({
              header: 'zbyt dużo elementów na liście',
              message: 'wyświetlane jest do 100 elementów',
              buttons: ['ok'],
            }).then(warning => {
              warning.present();
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
    this.db.doc(`users/${this.uid}/laterToDos/${item.id}`).delete();
  }

  completeTask(item){
    this.moveTask(item, 'doneToDos');
    const increment = firebase.firestore.FieldValue.increment(1);
    const counterRef = this.db.collection('users').doc(`${this.uid}`).collection('counters').doc('counter'); 
    this.db.collection('users').doc(`${this.uid}`).collection('counters').doc('counter').ref.get().then((documentSnapshot) => {
      if(!documentSnapshot.exists){
        counterRef.set(
          { taskCounter: 1,
            habitCounter: 0
          });
      }
      else{
        counterRef.update({ taskCounter: increment });
      }
    });
  }
  moveUrgent(item){
    this.moveTask(item, 'urgentToDos')
  }

  moveTask(item, list: string){
    this.db.doc(`users/${this.uid}/laterToDos/${item.id}`).delete();
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

  changePos(index, offset) {
    this.db.doc(`users/${this.uid}/laterToDos/${this.items[index].id}`).set(
      { pos: this.items[index+offset].pos },
      { merge: true }
    );

    this.db.doc(`users/${this.uid}/laterToDos/${this.items[index + offset].id}`).set(
      { pos: this.items[index].pos },
      { merge: true }
    );
  }
}

