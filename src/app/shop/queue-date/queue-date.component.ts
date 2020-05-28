import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue-date',
  templateUrl: './queue-date.component.html',
  styleUrls: ['./queue-date.component.scss'],
})
export class QueueDateComponent implements OnInit {

  arr = [];
  date: any;

  selected: any;

  constructor() { }

  ngOnInit() {
    this.arr.length = 30;

    this.date = new Date();
  }

  selectDate(i) {
    this.selected = i;
  }

}
