import { Component, OnInit } from '@angular/core';
import { PromotionModalComponent } from './promotion-modal/promotion-modal.component';
import { ModalController } from '@ionic/angular';
import { ShopService } from '../services/shop.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.page.html',
  styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {

  promotionData: any;
  promotionDataById: any;

  constructor(
    public modalController: ModalController,
    private Shopservice: ShopService,
  ) { }

  ngOnInit() {
    this.Shopservice.getPromotion().then((res: any) => {
      // console.log(res.data);
      this.promotionData = res.data;
    })
  }

  async PromotionModal(id) {
    const res = await this.Shopservice.getPromotionById(id);
    // console.log(res);
    this.promotionDataById = res.data;
    const modal = await this.modalController.create({
      component: PromotionModalComponent,
      componentProps: {
        promotionDataModal: this.promotionDataById
      }
    });
    modal.onDidDismiss().then((result) => {

    });
    await modal.present();
  }

}
