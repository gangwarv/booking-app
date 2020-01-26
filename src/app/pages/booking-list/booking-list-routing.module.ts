import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingListPage } from './booking-list.page';

const routes: Routes = [
  {
    path: '',
    component: BookingListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingListPageRoutingModule {}
