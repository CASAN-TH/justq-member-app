import { HomeService } from './../services/home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  shopTypeData : any;

  constructor(
    private HomeService: HomeService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.HomeService.getShopType().then((res) =>{
      console.log(res);
      this.shopTypeData = res.data;
    })
  
  }

  goToShopByType(shoptype){
    console.log("shop by type");
    this.router.navigateByUrl("/home/shop/" + shoptype);
  }

}
