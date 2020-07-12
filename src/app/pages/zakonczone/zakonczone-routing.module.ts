import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZakonczonePage } from './zakonczone.page';

const routes: Routes = [
  {
    path: '',
    component: ZakonczonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZakonczonePageRoutingModule {}
