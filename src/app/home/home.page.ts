import { CreateModalComponent } from './../create-modal/create-modal.component';
import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController, ModalController } from '@ionic/angular';
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
  habit: any = {};

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, public navCtrl: NavController, private router: Router,
    private alertCtrl: AlertController, private dataService: DataService, private modalCtrl: ModalController) { 
      this.afAuth.authState.subscribe(user => {
        if (user)
          this.uid = user.uid;
      });
      this.afAuth.authState.subscribe(user => {
        if (!user)
          return;
        this.db.collection(`users/${this.uid}/trwajace`, ref => {
          let query = ref.orderBy('created');
          query = query.limit(20);
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
  
    async openModal(){
      const modal = await this.modalCtrl.create({
        component: CreateModalComponent
      });

      const alert = await this.alertCtrl.create({
        header: 'super!',
        message: 'nowy nawyk został utworzony',
        buttons: ['zamknij']
      });

      await modal.present();

      await modal.onWillDismiss().then(async res => {
        if(res.data != null){
          this.habit = res.data;

          let now = new Date();
          let nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), 
          now.getUTCMinutes(), now.getUTCSeconds()));
          this.randomColor = this.randomNumber();
  
          this.db.collection(`users/${this.uid}/trwajace`).add({
            name: this.habit.name, 
            description: this.habit.description,
            created: nowUtc,
            color: this.randomColor,
            date: this.habit.date,
            duration: this.habit.duration,
            reminder: this.habit.reminder
          });
  
          if (this.items.length >= 20)
            this.alertCtrl.create({
              header: 'to zbyt dużo nawyków na raz!',
              message: 'wyświetlane jest do 20 elementów',
              buttons: ['ok'],
            }).then(warning => {
              warning.present();
            });

          await alert.present(); 
        }
          
      });
 
    }

    // async add(){
    //   const alert = await this.alertCtrl.create({
    //     header: 'nowy nawyk',
    //     buttons: [
    //     {
    //       text: 'anuluj',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('anuluj');
    //       }
    //     },
    //     {
    //       text: 'dodaj',
    //       handler: (val) => {
    //         console.log('dodaj');
    //         let now = new Date();
    //         let nowUtc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), 
    //         now.getUTCMinutes(), now.getUTCSeconds()));
    //         this.randomColor = this.randomNumber();
  
    //         this.db.collection(`users/${this.uid}/trwajace`).add({
    //           name: val.nawyk, 
    //           created: nowUtc,
    //           color: this.randomColor,
    //           date: val.startDate,
    //           duration: ...
    //         });
  
    //         if (this.items.length >= 100)
    //           this.alertCtrl.create({
    //             header: 'to zbyt dużo nawyków na raz!',
    //             message: 'wyświetlane jest do 100 elementów',
    //             buttons: ['ok'],
    //           }).then(warning => {
    //             warning.present();
    //           });
    //       }
    //     }
    //     ],
    //     inputs: [
    //       {
    //         name: 'nawyk',
    //         type: 'text',
    //         placeholder: 'nazwa'
    //       },
    //       {
    //         name: 'startDate',
    //         type: 'date',
    //         placeholder: 'data rozpoczęcia'
    //       },
    //       {
    //         name: 'endDate',
    //         type: 'date',
    //         placeholder: 'data zakończenia',
    //         label: 'data zakończenia'
    //       }
    //     ],
    //   });
    //   return await alert.present();
    // }

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
