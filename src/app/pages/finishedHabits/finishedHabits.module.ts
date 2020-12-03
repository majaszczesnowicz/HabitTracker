import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FinishedHabitsPageRoutingModule } from './finishedHabits-routing.module';

import { FinishedHabitsPage } from './finishedHabits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FinishedHabitsPageRoutingModule
  ],
  declarations: [FinishedHabitsPage]
})
export class FinishedHabitsPageModule {}
