import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListyPageRoutingModule } from './listy-routing.module';

import { ListyPage } from './listy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListyPageRoutingModule
  ],
  declarations: [ListyPage]
})
export class ListyPageModule {}
