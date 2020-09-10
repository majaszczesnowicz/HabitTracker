import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NapozniejPage } from './napozniej.page';

const routes: Routes = [
  {
    path: '',
    component: NapozniejPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NapozniejPageRoutingModule {}
