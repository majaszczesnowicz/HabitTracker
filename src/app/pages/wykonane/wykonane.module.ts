import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WykonanePageRoutingModule } from './wykonane-routing.module';

import { WykonanePage } from './wykonane.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WykonanePageRoutingModule
  ],
  declarations: [WykonanePage]
})
export class WykonanePageModule {}
