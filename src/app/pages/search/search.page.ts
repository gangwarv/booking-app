import { Component, OnInit } from "@angular/core";
import { PopoverController } from "@ionic/angular";

@Component({
  selector: "app-search",
  templateUrl: "./search.page.html",
  styleUrls: ["./search.page.scss"]
})
export class SearchPage implements OnInit {
  buses = [
    {
      id: 1,
      departureTime: "06:15",
      arrivalTime: "11:15",
      operatorName: "UPSRTC",
      busType: "AC 2+2"
    },
    {
      id: 2,
      departureTime: "07:10",
      arrivalTime: "12:10",
      operatorName: "UPSRTC",
      busType: "Shatabdi AC 2+2"
    },
    {
      id: 3,
      departureTime: "10:30",
      arrivalTime: "15:00",
      operatorName: "UPSRTC",
      busType: "Shatabdi AC 2+2"
    },
    {
      id: 4,
      departureTime: "13:00",
      arrivalTime: "17:05",
      operatorName: "RJRTC",
      busType: "AC 2+2"
    },
    {
      id: 5,
      departureTime: "14:00",
      arrivalTime: "19:00",
      operatorName: "UPSRTC",
      busType: "AC 2+2"
    },
    {
      id: 6,
      departureTime: "15:10",
      arrivalTime: "21:10",
      operatorName: "UPSRTC",
      busType: "AC 2+2"
    },
    {
      id: 7,
      departureTime: "16:40",
      arrivalTime: "22:30",
      operatorName: "RJRTC",
      busType: "AC 2+3"
    }
  ];

  constructor(public popoverController: PopoverController) {}

  ngOnInit() {}

  //popover filter
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopMenu,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}

// other comp

@Component({
  template: `
    <ion-list>
      <ion-list-header>
        <ion-label>Choose </ion-label>
      </ion-list-header>
      <ion-item (click)="DismissClick()">
        <ion-icon slot="start" color="medium" name="globe"></ion-icon>
        <ion-label>First</ion-label>
      </ion-item>
      <ion-item (click)="DismissClick()">
        <ion-icon slot="start" color="medium" name="car"></ion-icon>
        <ion-label>Second</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopMenu {
  constructor(private popoverController: PopoverController) {}
  async DismissClick() {
    await this.popoverController.dismiss();
  }
}
