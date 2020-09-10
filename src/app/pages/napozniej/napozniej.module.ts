import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NapozniejPageRoutingModule } from './napozniej-routing.module';

import { NapozniejPage } from './napozniej.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NapozniejPageRoutingModule
  ],
  declarations: [NapozniejPage]
})
export class NapozniejPageModule {}
