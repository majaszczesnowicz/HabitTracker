import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrgentToDosPageRoutingModule } from './urgentToDos-routing.module';

import { UrgentToDosPage } from './urgentToDos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrgentToDosPageRoutingModule
  ],
  declarations: [UrgentToDosPage]
})
export class UrgentToDosPageModule {}
