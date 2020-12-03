import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoneToDosPageRoutingModule } from './doneToDos-routing.module';

import { DoneToDosPage } from './doneToDos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoneToDosPageRoutingModule
  ],
  declarations: [DoneToDosPage]
})
export class DoneToDosPageModule {}
