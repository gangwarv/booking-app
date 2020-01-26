import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-seat-picker",
  templateUrl: "./seat-picker.component.html",
  styleUrls: ["./seat-picker.component.scss"]
})
export class SeatPickerComponent implements OnInit {
  S = "https://img.icons8.com/android/24/000000/steering-wheel.png";
  A = "https://img.icons8.com/material-outlined/24/000000/bus-seat-top-view.png";
  B = "https://img.icons8.com/material-rounded/24/000000/bus-seat-top-view.png";
  // A = Avaliable
  // B = Booked
  // L = Locked
  layout = [
    ["", "", "", "", "", "S"],
    ["A", "A", "", "A", "A", "A"],
    ["A", "B", "", "B", "B", "B"],
    ["A", "A", "", "A", "A", "A"],
    ["B", "A", "", "A", "A", "A"],
    ["B", "B", "", "A", "A", "A"],
    ["A", "A", "", "A", "A", "A"],
    ["A", "A", "", "A", "A", "B"],
    ["A", "A", "A", "A", "A", "A"]
  ];

  constructor() {}

  ngOnInit() {}
}
