import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, map } from "rxjs/operators";
import { cities } from "./city";
import { IonicSelectableComponent } from "ionic-selectable";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  swapIcon = "swap";
  date: string;
  minDate: string;
  maxDate: string;

  from = {
    id: "94",
    name: "Bokaro Steel City",
    state: "Jharkhand"
  };
  to = {
    id: "64",
    name: "Noida",
    state: "Uttar Pradesh"
  };
  stations = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    let d = new Date().toISOString().substr(0, 10);;
    this.date = d;
    this.minDate = d;
    this.maxDate = this.setDate(60);
  }
  onSearch(event: { component: IonicSelectableComponent; text: string }) {
    let text = event.text.trim().toLowerCase();
    event.component.startSearch();

    if (text) {
      event.component.items = cities
        .filter(x => x.name.toLowerCase().startsWith(text))
        .slice(0, 5);
    } else {
      event.component.items = cities.slice(90, 93);
    }

    event.component.endSearch();
  }

  onChange(e: any) {
    console.log("s", e);
  }
  onSwap() {
    console.log("swap");
    let t = this.from;
    this.from = this.to;
    this.to = t;

    // this.swapIcon = "arrow-up";
    // setTimeout(() => {
    //   this.swapIcon = "arrow-down";
    // }, 500);
  }

  setDate(incByDay = 0): string {
    let datetime = new Date().getTime() + incByDay * 86400000;
    let date = new Date(datetime).toISOString().substr(0, 10);
    return date;
  }

  onSetDate(incByDay = 0): void {
    this.date = this.setDate(incByDay);
  }
}
