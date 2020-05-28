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


  async openModal(id) {
    const res = await this.shopService.getShopById(id);
    // console.log(res);
    const modal = await this.modalController.create({
      component: QueueDetailComponent,
      componentProps: {
        queueDetail: res
      }
    });
    return await modal.present();

    // // const modal = await this.modalController.create({
    // //   component: QueueDateComponent,
    // // });
    // // return await modal.present();

    // const modal = await this.modalController.create({
    //   component: QueueTimeComponent,
    // });
    // return await modal.present();
  }


}
