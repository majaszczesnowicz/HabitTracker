import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-wykonane',
  templateUrl: './wykonane.page.html',
  styleUrls: ['./wykonane.page.scss'],
})
export class WykonanePage implements OnInit {
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
      this.db.collection(`users/${this.uid}/wykonane`, ref => {
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

  deleteTask(item){
    this.db.doc(`users/${this.uid}/wykonane/${item.id}`).delete();
  }

}
