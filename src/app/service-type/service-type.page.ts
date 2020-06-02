import { ShopService } from './../services/shop.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.page.html',
  styleUrls: ['./service-type.page.scss'],
})
export class ServiceTypePage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  ShopDetailData: any;

  constructor(
    private Shopservice: ShopService
  ) { }

  ngOnInit() {
    this.Shopservice.getShopDetail().then((res) =>{
      console.log(res);
      this.ShopDetailData = res.data;
    })
  }
  nextSlide() {
    this.slides.slideNext();
  }

  prevSlide() {
    this.slides.slidePrev();
  }

}
