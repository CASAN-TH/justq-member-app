import { ShopService } from './../services/shop.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Location } from "@angular/common";

@Component({
  selector: 'app-service-type',
  templateUrl: './service-type.page.html',
  styleUrls: ['./service-type.page.scss'],
})
export class ServiceTypePage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  shopServiceTypeData: any;
  shopServiceDateData: any;

  phoneNumber = "";
  selectedServiceType = {
    code: ""
  };
  selectedServiceDate = {
    date: ""
  };
  selectedServiceTime = {
    queue: ""
  };

  constructor(
    private Shopservice: ShopService,
    private _location: Location
  ) { }

  ngOnInit() {
    this.Shopservice.getShopDetail().then((res) => {
      // console.log(res);
      this.shopServiceTypeData = res.data.servicetype;
      this.shopServiceDateData = res.data.servicedate;
    })
  }
  nextSlide() {
    this.clickServiceType(this.selectedServiceType);
    this.clickServiceDate(this.selectedServiceDate)
    this.clickServiceTime(this.selectedServiceTime)
    this.slides.slideNext();
    console.log(this.selectedServiceType);
    console.log(this.selectedServiceDate);
    console.log(this.selectedServiceTime);
  }



  clickServiceType(item) {
    this.selectedServiceType = item;
    // console.log(this.selectedServiceType);
  }
  clickServiceDate(item) {
    this.selectedServiceDate = item;
    // console.log(this.selectedServiceDate);
  }
  clickServiceTime(item) {
    this.selectedServiceTime = item;
    // console.log(this.selectedServiceTime);
  }

  goBackClick() {
    this._location.back();
  }
}
