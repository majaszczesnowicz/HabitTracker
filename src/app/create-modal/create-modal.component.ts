import { ModalController } from '@ionic/angular';
import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { setHours, setMinutes, setSeconds } from 'date-fns';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.scss'],
})
export class CreateModalComponent implements OnInit{
  nameInput = new FormControl('', Validators.required);
  dateInput = new FormControl('', Validators.required);
  durationInput = new FormControl('', Validators.required);
  habitDate = new Date().toISOString();
  habitTime = new Date().toISOString();

  constructor(private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  habit: any = {};
  description: string;
  maxDate;
  minDate;

  ngOnInit(){
    this.habitTime = null;
    this.description = '';
    let today = new Date();
    this.minDate = this.setHour(today);
    this.maxDate = new Date(today.getFullYear() + 2, today.getMonth(), today.getDate());
    this.maxDate = new Date(this.maxDate).toISOString();
  }

  clear(){
    this.habitTime = null;
  }

  dismissModal(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  async save(){
      const alert = await this.alertCtrl.create({
        header: 'czy chcesz wyznaczyć sobie cel do osiągnięcia?',
        message: `wybierz liczbę dni z ${this.durationInput.value}, w których będziesz trzymać się swojego postanowienia`,
        buttons: [
        {
          text: 'nie wyznaczam celu',
          role: 'cancel',
          handler: () => {
            this.habit.name = this.nameInput.value;
            this.habit.description = this.description;
            this.habit.date = this.habitDate;
            this.habit.duration = this.durationInput.value;
            this.habit.reminder = this.habitTime;
            this.habit.goal = 0;
            this.modalCtrl.dismiss(this.habit);
          }
        },
        {
          text: 'zapisz cel',
          handler: (val) => {
            this.habit.name = this.nameInput.value;
            this.habit.description = this.description;
            this.habit.date = this.habitDate;
            this.habit.duration = this.durationInput.value;
            this.habit.reminder = this.habitTime;
            this.habit.goal = val.goal;
            this.modalCtrl.dismiss(this.habit);
          }
        }
        ],
        inputs: [
          {
            name: 'goal',
            type: 'number',
            placeholder: 'liczba dni'
          }
        ]
      });
      return await alert.present();
    }

    setHour(date){
      let toDate = new Date(date);
      let newDate = setHours(toDate, 0);
      newDate = setMinutes(newDate, 0);
      newDate = setSeconds(newDate, 0);
      return newDate.toISOString();
    }

}
