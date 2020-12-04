import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishedDetailPage } from './finished-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FinishedDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishedDetailPageRoutingModule {}
