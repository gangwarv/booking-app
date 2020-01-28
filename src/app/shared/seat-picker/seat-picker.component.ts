import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-seat-picker",
  templateUrl: "./seat-picker.component.html",
  styleUrls: ["./seat-picker.component.scss"]
})
export class SeatPickerComponent implements OnInit {
  // S = "https://img.icons8.com/android/36/000000/steering-wheel.png";
  // A = "https://img.icons8.com/material-outlined/36/000000/bus-seat-top-view.png";
  // B = "https://img.icons8.com/material-rounded/36/000000/bus-seat-top-view.png";
  S = "/assets/layout/steering-wheel.png";
  A = "/assets/layout/seat_booked.png";
  B = "/assets/layout/sleeper_booked.png";
  // A = Avaliable
  // B = Booked
  // L = Locked
  // layout = [
  //   ["", "", "", "", "", "S"],
  //   ["A", "A", "", "A", "A", "A"],
  //   ["A", "B", "", "B", "B", "B"],
  //   ["A", "A", "", "A", "A", "A"],
  //   ["B", "A", "", "A", "A", "A"],
  //   ["B", "B", "", "A", "A", "A"],
  //   ["A", "A", "", "A", "A", "A"],
  //   ["A", "A", "", "A", "A", "B"],
  //   ["A", "A", "A", "A", "A", "A"]
  // ];
  layout = [
    ["", "", "", "", "S"],
    ["A", "A", "", "U", "U"],
    ["A", "B", "", "B", "B"],
    ["A", "A", "", "U", "U"],
    ["B", "A", "", "A", "A"],
    ["B", "B", "", "A", "A"],
    ["A", "A", "", "A", "A"],
    ["A", "A", "", "A", "B"],
    ["A", "A", "A", "A", "A"]
  ];

  constructor() {}

  ngOnInit() {}

  segmentChanged(event) {}

  isSeat(i: number, j: number): boolean {
    if (i > 0) {
      return this.layout[i - 1][j] !== "U";
    }
    return true;
  }
}
