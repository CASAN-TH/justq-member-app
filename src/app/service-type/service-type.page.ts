import { ShopService } from './../services/shop.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

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
  name = "";
  selectedServiceType = {
    code: "",
    name: ""
  };
  selectedServiceDate = {
    date: ""
  };
  selectedServiceTime = {
    queue: "",
    start: "",
    end: ""
  };

  constructor(
    private Shopservice: ShopService,
    private _location: Location,
    private router: Router
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
    this.phoneNumber;
    this.name;
    this.slides.slideNext();
    console.log(this.selectedServiceType);
    console.log(this.selectedServiceDate);
    console.log(this.selectedServiceTime);
    console.log(this.phoneNumber);
    console.log(this.name);
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

  close() {
    this.router.navigateByUrl("/home");
  }



  saveQueue() {
    // console.log(this.selectedServiceType);
    // console.log(this.selectedServiceDate);
    // console.log(this.selectedServiceTime);
    // console.log(this.phoneNumber);
    // console.log(this.name);
    const body = {
      "cusId": "",
      "shopId": "",
      "reserveType": {
        "code": this.selectedServiceType.code,
        "name": this.selectedServiceType.name
      },
      "reserveDate": this.selectedServiceDate,
      "reserveTime": this.selectedServiceTime,
      "cusPhone": this.phoneNumber,
      "cusName": this.name
    };
    // this.shopService.saveQueue(body);
    console.log(body);
    this.router.navigateByUrl("/home");
  }

  goBackClick() {
    this._location.back();
  }
}
