import { ShopService } from './../../services/shop.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-queue-time',
  templateUrl: './queue-time.component.html',
  styleUrls: ['./queue-time.component.scss'],
})
export class QueueTimeComponent implements OnInit {

  @Input() quetime: any;
  @Input() dayNumber: any;

  openTimeData: any;

  constructor(
    private Shopservice: ShopService
  ) { }

  ngOnInit() {
    this.Shopservice.getOpenTime().then((res) =>{
      // console.log(res);
      this.openTimeData = res.data;
      console.log(this.openTimeData);
    })
    console.log(this.quetime);
    console.log(this.dayNumber);
  }

  clickTime(){
    console.log("click time");
  }

}
