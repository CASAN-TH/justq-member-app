import { ShopService } from './../services/shop.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Location } from "@angular/common";
import { Router, ActivatedRoute } from '@angular/router';

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
  cusname = "";
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

  selectedShop: any;
  paramsId: any;

  constructor(
    private Shopservice: ShopService,
    private _location: Location,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      // console.log(params['idUser']);
      this.paramsId = params['ShopId']
      console.log(this.paramsId);
    });
    const res = await this.Shopservice.getShopById(this.paramsId);
    // console.log(this.paramsId);
    this.selectedShop = res;
    this.shopServiceTypeData = this.selectedShop.servicetype;


    // const res = await this.Shopservice.getShopById("5ed8c5c46015e72734dcdecf");
    // this.selectedShop = res;
    // console.log(this.selectedShop);

    // this.Shopservice.getShopDetail().then((res) => {
    //   this.shopServiceTypeData = this.selectedShop.servicetype;
    //   // this.shopServiceTypeData = res.data[0].servicetype;
    //   // this.shopServiceDateData = res.data[0].servicedate;
    //   // console.log(this.shopServiceDateData);
    // })
  }

  nextSlide() {
    this.clickServiceType(this.selectedServiceType);
    this.clickServiceDate(this.selectedServiceDate)
    this.clickServiceTime(this.selectedServiceTime)
    this.phoneNumber;
    this.cusname;
    this.slides.slideNext();
    // console.log(this.selectedServiceType);
    // console.log(this.selectedServiceDate);
    // console.log(this.selectedServiceTime);
    // console.log(this.phoneNumber);
    // console.log(this.cusname);
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
      "cusName": this.cusname
    };
    this.Shopservice.saveQueue(body);
    // console.log(body);
    this.router.navigateByUrl("/home");
  }

  goBackClick() {
    this._location.back();
  }
}
