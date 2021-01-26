import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FinishedDetailPageRoutingModule } from './finished-detail-routing.module';
import { FinishedDetailPage } from './finished-detail.page';
import { NgCalendarModule } from 'ionic2-calendar';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
registerLocaleData(localePl);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    FinishedDetailPageRoutingModule
  ],
  declarations: [FinishedDetailPage],
  providers: [
    { provide: LOCALE_ID, useValue: 'pl-PL'}
  ]
})
export class FinishedDetailPageModule {}
