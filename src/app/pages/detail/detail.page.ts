import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  habit: any;
  uid = {};

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private db: AngularFirestore, 
    private router: Router, private route: ActivatedRoute, public navParams: NavParams) { 
      this.afAuth.authState.subscribe(user => {
        if (user)
          this.uid = user.uid;
      });
      
  }

  ngOnInit() {
    if (this.route.snapshot.data['habitData']){
      this.habit = this.route.snapshot.data['habitData'];
    }
  }

}
