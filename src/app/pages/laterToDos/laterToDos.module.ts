import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaterToDosPageRoutingModule } from './laterToDos-routing.module';

import { LaterToDosPage } from './laterToDos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaterToDosPageRoutingModule
  ],
  declarations: [LaterToDosPage]
})
export class LaterToDosPageModule {}
