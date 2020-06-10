import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-promotion-modal',
  templateUrl: './promotion-modal.component.html',
  styleUrls: ['./promotion-modal.component.scss'],
})
export class PromotionModalComponent implements OnInit {

  constructor(
    private _location: Location,
    public modalController: ModalController
    ) { }

  ngOnInit() { }

  onClose() {
    this.modalController.dismiss();
  }

}
