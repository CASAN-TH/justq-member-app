import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mockdata : any;

  constructor() { }

  ngOnInit() {
    this.mockdata = [
      {
        typeimg: "https://i.pinimg.com/564x/93/ae/d9/93aed90cbda074340aa497a188390511.jpg",
        shoptype: "ร้านเสริมสวย"
      },
      {
        typeimg: "https://image.shutterstock.com/image-vector/cafe-logo-coffe-vector-illustration-260nw-1021951228.jpg",
        shoptype: "ร้านกาแฟ"
      },    {
        typeimg: "https://image.freepik.com/free-vector/flat-design-fitness-logo-template_23-2148230417.jpg",
        shoptype: "ฟิตเนส"
      },    {
        typeimg: "https://en.pimg.jp/039/090/406/1/39090406.jpg",
        shoptype: "สนามกอล์ฟ"
      },    {
        typeimg: "https://i.pinimg.com/originals/a6/10/23/a61023ac074c4f267b943d7c53e0ca1a.jpg",
        shoptype: "ร้านสัตว์เลี้ยง"
      }
  ]
  }

}
