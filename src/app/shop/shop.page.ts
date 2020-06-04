import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ShopService } from '../services/shop.service';
import { ActivatedRoute, Router } from '@angular/router';
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
    private Shopservice: ShopService,
    private route: ActivatedRoute,
    public modalController: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    let shopType = this.route.snapshot.params.id;

    this.Shopservice.getShopByType(shopType).then((res: any) => {
      // console.log(res);
      this.shopData = res.data;
      console.log(this.shopData);
    })

  }

  goBackClick() {
    this._location.back();
  }

  // async QueueDetailModal(id) {
  //   const res = await this.Shopservice.getShopById(id);
  //   // console.log(res);
  //   this.selectedShop = res;
  //   const modal = await this.modalController.create({
  //     component: QueueDetailComponent,
  //     componentProps: {
  //       queueDetail: res
  //     }
  //   });
  //   modal.onDidDismiss().then((result) => {
  //     if (result.data) {
  //       this.tel = result.data;
  //       this.QueueDateModal();
  //     }
  //   });
  //   await modal.present();
  // }

  // async QueueDateModal() {
  //   const modal = await this.modalController.create({
  //     component: QueueDateComponent,
  //   });
  //   modal.onDidDismiss().then((result) => {
  //     if (result.data) {
  //       this.queDate = result.data;
  //       this.QueueTimeModal();
  //     }
  //   });
  //   await modal.present();
  // }

  // async QueueTimeModal() {
  //   const modal = await this.modalController.create({
  //     component: QueueTimeComponent,
  //     componentProps: {
  //       quetime: this.selectedShop,
  //       dayNumber: this.queDate
  //     }
  //   });
  //   modal.onDidDismiss().then((result) => {
  //     // console.log(result.data);
  //     if (result.data) {
  //       this.queTime = result.data;
  //       this.saveQueue();
  //     }

  //   });
  //   await modal.present();
  // }

  // saveQueue() {
  //   const body = {
  //     "shop": {
  //       "shopId": this.selectedShop._id
  //     },
  //     "queStatus": "available",
  //     "customerId": "",
  //     "customerName": "",
  //     "customerQty": 1,
  //     "customerTel": this.tel,
  //     "queType": "",
  //     "queDate": this.queDate.queDate,
  //     "queTime": this.queTime.queTime.time
  //   };
  //   this.Shopservice.saveQueue(body);
  //   console.log(body);
  // }


  async  toServiceTypePage(id) {
    const res = await this.Shopservice.getShopById(id);
    // console.log(res);
    this.selectedShop = res;
    // this.router.navigateByUrl("/service-type");
    this.router.navigate(['/service-type'], {queryParams: {ShopId: id}});
  }


}
