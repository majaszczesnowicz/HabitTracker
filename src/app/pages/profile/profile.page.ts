import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user = {};
  uid = {};
  items = [];

  
  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore) { 
    this.afAuth.authState.subscribe(user => {
      if (user)
        this.user = user;
        this.uid = user.uid;
    });
 
  }

  ngOnInit() {
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
    }
 

  signOut(){
    this.afAuth.signOut().then(() => {
      location.reload();
    });
  }

}
