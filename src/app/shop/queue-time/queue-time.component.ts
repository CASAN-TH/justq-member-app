import { ShopService } from './../../services/shop.service';
import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-queue-time',
  templateUrl: './queue-time.component.html',
  styleUrls: ['./queue-time.component.scss'],
})
export class QueueTimeComponent implements OnInit {

  @Input() quetime: any;
  @Input() dayNumber: any;

  openTimeData: any;
  selected = {
    que: ""
  };

  constructor(
    private Shopservice: ShopService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.Shopservice.getOpenTime().then((res) => {
      // console.log(res);
      this.openTimeData = res.data;
      console.log(this.openTimeData);
    })
    console.log(this.quetime);
    console.log(this.dayNumber);
  }

  clickTime(item) {
    this.selected = item;
    console.log(item);
  }

  saveTime(){
    const body = {
      queTime: this.selected
    };
    console.log(body);
    this.modalController.dismiss(body);

  }

}
