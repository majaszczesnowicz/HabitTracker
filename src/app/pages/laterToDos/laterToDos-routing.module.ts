import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaterToDosPage } from './laterToDos.page';

const routes: Routes = [
  {
    path: '',
    component: LaterToDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaterToDosPageRoutingModule {}
