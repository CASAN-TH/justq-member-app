import { Component, OnInit, Input } from '@angular/core';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-promotion-modal',
  templateUrl: './promotion-modal.component.html',
  styleUrls: ['./promotion-modal.component.scss'],
})
export class PromotionModalComponent implements OnInit {

  @Input() promotionDataModal: any;
  contactLink: any;

  constructor(
    private _location: Location,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this.clickLinkUrl();
  }

  clickLinkUrl() {
    this.promotionDataModal.links.forEach(link => {
      return this.contactLink = link.linkUrl;
    });
  }

  onClose() {
    this.modalController.dismiss();
  }

}
