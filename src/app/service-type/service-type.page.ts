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
  shopName: any;
  logoimgShop: any;
  selectedShop: any;
  paramsId: any;
  shopIdData: any;

  phoneNumber = "";
  cusname = "";

  selectedServiceType = {
    code: "",
    name: "",
    servicetime: []
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
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.paramsId = params['ShopId']
      // console.log(this.paramsId);
    });
    const res = await this.Shopservice.getShopById(this.paramsId);
    this.selectedShop = res;
    // console.log(this.selectedShop);
    this.logoimgShop = this.selectedShop.logoimgurl;
    // console.log(this.logoimgShop);
    this.shopName = this.selectedShop.name;
    this.shopServiceTypeData = this.selectedShop.servicetype;
    this.shopServiceDateData = this.selectedShop.servicedate;

    this.loadReservetion()
  }

  loadReservetion() {
    this.Shopservice.getReservetionShopId(this.paramsId, this.selectedServiceType.code, this.selectedServiceDate.date).then((res: any) => {
      this.shopIdData = res.data;
    })
  }

  checkTimeQueue(queue) {
    // this.shopIdData.forEach((data) => {
    //   if (queue === data.reserveTime.queue) {
    //     console.log(queue);
    //     console.log(data.reserveTime.queue);
    //     return true;
    //   }
    // })

    for (let i = 0; i < this.shopIdData.length; i++) {
      if (queue === this.shopIdData[i].reserveTime.queue) {
        return true;
      }
    }


  }


  nextSlide() {
    this.clickServiceType(this.selectedServiceType);
    this.clickServiceDate(this.selectedServiceDate)
    this.loadReservetion()
    this.clickServiceTime(this.selectedServiceTime)
    this.phoneNumber;
    this.cusname;
    this.slides.slideNext();
  }


  clickServiceType(item) {
    this.selectedServiceType = item;
    // console.log(this.selectedServiceType.servicetime);
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
    const body = {
      "cusId": "",
      "shopId": this.paramsId,
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
