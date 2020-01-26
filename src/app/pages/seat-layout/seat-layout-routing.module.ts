import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeatLayoutPage } from './seat-layout.page';

const routes: Routes = [
  {
    path: '',
    component: SeatLayoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeatLayoutPageRoutingModule {}
