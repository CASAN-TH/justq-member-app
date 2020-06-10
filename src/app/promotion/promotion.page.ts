import { Component, OnInit } from '@angular/core';
import { PromotionModalComponent } from './promotion-modal/promotion-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.page.html',
  styleUrls: ['./promotion.page.scss'],
})
export class PromotionPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async PromotionModal() {
    const modal = await this.modalController.create({
      component: PromotionModalComponent,
    });
    modal.onDidDismiss().then((result) => {
     
    });
    await modal.present();
  }

}
