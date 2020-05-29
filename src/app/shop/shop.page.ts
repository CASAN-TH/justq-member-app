import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ShopService } from '../services/shop.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { QueueDetailComponent } from './queue-detail/queue-detail.component';
import { QueueDateComponent } from './queue-date/queue-date.component';
import { QueueTimeComponent } from './queue-time/queue-time.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  shopData: any;
  tel: any;
  queDate: any;
  queTime: any;
  selectedShop: any;

  constructor(
    private _location: Location,
    private shopService: ShopService,
    private route: ActivatedRoute,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    let shopType = this.route.snapshot.params.id;

    this.shopService.getShopByType(shopType).then((res: any) => {
      // console.log(res);
      this.shopData = res.data;
    })

  }

  goBackClick() {
    this._location.back();
  }

  async QueueDetailModal(id) {
    const res = await this.shopService.getShopById(id);
    // console.log(res);
    this.selectedShop = res;
    const modal = await this.modalController.create({
      component: QueueDetailComponent,
      componentProps: {
        queueDetail: res
      }
    });
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.tel = result.data;
        this.QueueDateModal();
      }
    });
    await modal.present();
  }

  async QueueDateModal() {
    const modal = await this.modalController.create({
      component: QueueDateComponent,
    });
    modal.onDidDismiss().then((result) => {
      if (result.data) {
        this.queDate = result.data;
        this.QueueTimeModal();
      }
    });
    await modal.present();
  }

  async QueueTimeModal() {
    const modal = await this.modalController.create({
      component: QueueTimeComponent,
      componentProps: {
        quetime: this.selectedShop,
        dayNumber: this.queDate.dayNumber
      }
    });
    modal.onDidDismiss().then((result) => {
      // console.log(result.data);
      if (result.data) {
        this.queTime = result.data;
        this.saveQueue();
      }

    });
    await modal.present();
  }

  saveQueue() {
    console.log(this.tel);
    console.log(this.queDate);
    console.log(this.queTime);
    const body = {
      "shop": {
        "shopId": "5ec40efebff4f7000fd30413"
      },
      "queStatus": "available",
      "customerId": "cus-001",
      "customerName": "นายกอ",
      "customerQty": 1,
      "customerTel": this.tel,
      "queType": "ช่างนัท",
      "queDate": "2020-05-19T16:53:18.246Z",
      "queTime": "13:00"
    };
    this.shopService.saveQueue(body);
    console.log(body);
  }


}
