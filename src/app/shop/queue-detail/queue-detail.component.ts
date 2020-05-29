import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-queue-detail',
  templateUrl: './queue-detail.component.html',
  styleUrls: ['./queue-detail.component.scss'],
})
export class QueueDetailComponent implements OnInit {

  @Input() queueDetail: any;

  phoneNumber = "";

  constructor(
    public modalController: ModalController
  ) { }

  ngOnInit() {
    // console.log(this.queueDetail);
  }

  onClose() {
    this.modalController.dismiss();
  }
  
  dismiss() {
    this.modalController.dismiss(this.phoneNumber);
    // console.log(this.phoneNumber);
  }

}
