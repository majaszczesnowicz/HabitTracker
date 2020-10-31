import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  items = [];
  uid = {};
  loading = true;
  randomColor;

  user = {
    name: 'Noname'
  };

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, public navCtrl: NavController, private router: Router,
    private alertCtrl: AlertController, private dataService: DataService) { 
      this.afAuth.authState.subscribe(user => {
        if (user)
          this.uid = user.uid;
      });
      this.afAuth.authState.subscribe(user => {
        if (!user)
          return;
        this.db.collection(`users/${this.uid}/trwajace`, ref => {
          return ref.orderBy('created');
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
  
    async add(){
      const alert = await this.alertCtrl.create({
        header: 'nowy nawyk',
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
            this.randomColor = this.randomNumber();
  
            this.db.collection(`users/${this.uid}/trwajace`).add({
              text: val.nawyk, 
              created: nowUtc,
              color: this.randomColor
            });
  
            if (this.items.length >= 100)
              this.alertCtrl.create({
                header: 'to zbyt dużo nawyków na raz!',
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
            name: 'nawyk',
            type: 'text',
            placeholder: 'nazwa'
          }
        ]
      });
      return await alert.present();
    }

    randomNumber(){
      const min = Math.ceil(1);
      const max = Math.floor(5);
      let number =  Math.floor(Math.random() * (max - min + 1)) + min;
      switch (number) {
        case 1:
          return "primary";
        case 2:
          return "secondary";
        case 3:
          return "tertiary";
        case 4:
          return "success";
        case 5:
          return "warning";
      } 
    }

    onSelect(id, item) {
      this.dataService.setData(id, item);
      this.router.navigateByUrl(`/detail/${id}`);
    }
  }
