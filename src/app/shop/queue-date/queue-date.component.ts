import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-queue-date',
  templateUrl: './queue-date.component.html',
  styleUrls: ['./queue-date.component.scss'],
})
export class QueueDateComponent implements OnInit {

  allDate = [];

  selected: any;

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    const arr = [];
    arr.length = 30;
    for (const [i, item] of arr.entries()) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      this.allDate.push(date);
    }
    console.log(this.allDate);
  }

  selectDate(i) {
    this.selected = i;
    console.log(this.allDate[this.selected]);
  }

  onClose() {
    this.modalController.dismiss();
  }

  dismiss() {
    const date = new Date(this.allDate[this.selected]);
    const day = date.getDay();

    const body = {
      queDate: this.allDate[this.selected],
      dayNumber: day
    };
    console.log(body);
    this.modalController.dismiss(body);
  }

}
