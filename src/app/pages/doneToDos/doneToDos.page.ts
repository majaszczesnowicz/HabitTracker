import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-doneToDos',
  templateUrl: './doneToDos.page.html',
  styleUrls: ['./doneToDos.page.scss'],
})
export class DoneToDosPage implements OnInit {
  items = [];
  uid = {};
  loading = true;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore,
              private alertCtrl: AlertController) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.uid = user.uid;
      }
    });
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {
      if (!user) { return; }

      this.db.collection(`users/${this.uid}/doneToDos`, ref => {
        let query = ref.orderBy('pos','desc');
        query = query.limit(200);
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

  deleteTask(item) {
    this.db.doc(`users/${this.uid}/doneToDos/${item.id}`).delete();
  }
}
