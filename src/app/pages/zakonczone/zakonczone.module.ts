import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZakonczonePageRoutingModule } from './zakonczone-routing.module';

import { ZakonczonePage } from './zakonczone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZakonczonePageRoutingModule
  ],
  declarations: [ZakonczonePage]
})
export class ZakonczonePageModule {}
