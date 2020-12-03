import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishedHabitsPage } from './finishedHabits.page';

const routes: Routes = [
  {
    path: '',
    component: FinishedHabitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinishedHabitsPageRoutingModule {}
