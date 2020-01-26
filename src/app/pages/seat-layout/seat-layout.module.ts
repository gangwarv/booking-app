import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SeatLayoutPageRoutingModule } from "./seat-layout-routing.module";

import { SeatLayoutPage } from "./seat-layout.page";
import { SeatPickerComponent } from "../../shared/seat-picker/seat-picker.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatLayoutPageRoutingModule
  ],
  declarations: [SeatLayoutPage, SeatPickerComponent],
  exports: [SeatLayoutPage]
})
export class SeatLayoutPageModule {}
