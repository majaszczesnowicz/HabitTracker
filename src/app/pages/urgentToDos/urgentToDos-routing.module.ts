import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrgentToDosPage } from './urgentToDos.page';

const routes: Routes = [
  {
    path: '',
    component: UrgentToDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrgentToDosPageRoutingModule {}
