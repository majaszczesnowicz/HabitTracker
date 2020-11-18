import { ModalController } from '@ionic/angular';
import { Component, OnInit} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

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

  constructor(private modalCtrl: ModalController) { }

  habit: any = {};
  description: string;
  maxDate;
  minDate;

  ngOnInit(){
    this.habitTime = null;
    this.description = '';
    const today = new Date();
    this.minDate = new Date(today).toISOString();
    this.maxDate = new Date(today.getFullYear() + 2, today.getMonth(), today.getDate());
    this.maxDate = new Date(this.maxDate).toISOString();
  }

  clear(){
    this.habitTime = null;
  }

  dismissModal(){
    this.modalCtrl.dismiss(null, 'cancel');
  }

  saveHabit(){
    this.habit.name = this.nameInput.value;
    this.habit.description = this.description;
    this.habit.date = this.habitDate;
    this.habit.duration = this.durationInput.value;
    this.habit.reminder = this.habitTime;
    this.modalCtrl.dismiss(this.habit);
  }
}
