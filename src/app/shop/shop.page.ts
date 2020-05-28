import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { ShopService } from '../services/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  shopData: any;

  constructor(
    private _location: Location,
    private shopService: ShopService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    let shopType = this.route.snapshot.params.id;

    this.shopService.getShopByType(shopType).then((res: any) => {
      console.log(res);
      this.shopData = res.data;
    })

  }

  goBackClick() {
    this._location.back();
  }

  shopQue() {
    console.log("shopQue");
  }

}
