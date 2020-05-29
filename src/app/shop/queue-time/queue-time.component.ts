import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queue-time',
  templateUrl: './queue-time.component.html',
  styleUrls: ['./queue-time.component.scss'],
})
export class QueueTimeComponent implements OnInit {

  @Input() quetime: any;

  constructor() { }

  ngOnInit() {
    console.log(this.quetime);
  }

  clickTime(){
    console.log("click time");
  }

}
