import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListyPage } from './listy.page';

const routes: Routes = [
  {
    path: '',
    component: ListyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListyPageRoutingModule {}
