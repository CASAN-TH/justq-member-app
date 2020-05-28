import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  shopData: any;

  constructor(private _location: Location) { }

  ngOnInit() {
    // console.log(this.shopData);

    this.shopData = [
      {
        "_id": "5ecf026625d76c000f1c0068",
        "name": "ร้านดี",
        "shoptype": "2",
        "openhours": [
          {
            "opentime": [
              {
                "_id": "5ecf192aae8a92000f81973a",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf192aae8a92000f819739",
            "seq": 1,
            "dayofweek": "จันทร์"
          },
          {
            "opentime": [
              {
                "_id": "5ecf192aae8a92000f81973c",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf192aae8a92000f81973b",
            "seq": 2,
            "dayofweek": "อังคาร"
          },
          {
            "opentime": [
              {
                "_id": "5ecf192aae8a92000f81973e",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf192aae8a92000f81973d",
            "seq": 3,
            "dayofweek": "พุธ"
          },
          {
            "opentime": [
              {
                "_id": "5ecf192aae8a92000f819740",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf192aae8a92000f81973f",
            "seq": 4,
            "dayofweek": "พฤหัสบดี"
          },
          {
            "opentime": [
              {
                "_id": "5ecf192aae8a92000f819742",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf192aae8a92000f819741",
            "seq": 5,
            "dayofweek": "ศุกร์"
          },
          {
            "opentime": [
              {
                "_id": "5ecf192aae8a92000f819744",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf192aae8a92000f819743",
            "seq": 6,
            "dayofweek": "เสาร์"
          },
          {
            "opentime": [
              {
                "_id": "5ecf192aae8a92000f819746",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf192aae8a92000f819745",
            "seq": 7,
            "dayofweek": "อาทิตย์"
          }
        ],
        "created": "2020-05-28T00:14:30.426Z",
        "__v": 3,
        "updated": "2020-05-28T01:52:57.514Z",
        "location": {
          "lat": 13.940773,
          "lng": 100.71563809999999
        }
      },
      {
        "_id": "5ecf1da3ae8a92000f819763",
        "name": "ร้านสวย",
        "shoptype": "2",
        "openhours": [],
        "created": "2020-05-28T02:10:43.734Z",
        "__v": 0
      },
      {
        "_id": "5ecf1fb4ae8a92000f819764",
        "name": "ร้านลุงโจ",
        "shoptype": "5",
        "openhours": [
          {
            "opentime": [
              {
                "_id": "5ecf2127ae8a92000f819766",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf2127ae8a92000f819765",
            "seq": 1,
            "dayofweek": "จันทร์",
            "isopen": true
          },
          {
            "opentime": [
              {
                "_id": "5ecf2127ae8a92000f819768",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf2127ae8a92000f819767",
            "seq": 2,
            "dayofweek": "อังคาร",
            "isopen": true
          },
          {
            "opentime": [
              {
                "_id": "5ecf2127ae8a92000f81976a",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf2127ae8a92000f819769",
            "seq": 3,
            "dayofweek": "พุธ",
            "isopen": true
          },
          {
            "opentime": [
              {
                "_id": "5ecf2127ae8a92000f81976c",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf2127ae8a92000f81976b",
            "seq": 4,
            "dayofweek": "พฤหัสบดี",
            "isopen": true
          },
          {
            "opentime": [
              {
                "_id": "5ecf2127ae8a92000f81976e",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf2127ae8a92000f81976d",
            "seq": 5,
            "dayofweek": "ศุกร์",
            "isopen": true
          },
          {
            "opentime": [
              {
                "_id": "5ecf2127ae8a92000f819770",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf2127ae8a92000f81976f",
            "seq": 6,
            "dayofweek": "เสาร์",
            "isopen": false
          },
          {
            "opentime": [
              {
                "_id": "5ecf2127ae8a92000f819772",
                "start": "08:30",
                "end": "18:00"
              }
            ],
            "_id": "5ecf2127ae8a92000f819771",
            "seq": 7,
            "dayofweek": "อาทิตย์"
          }
        ],
        "created": "2020-05-28T02:19:32.042Z",
        "__v": 4,
        "updated": "2020-05-28T02:33:38.305Z",
        "location": {
          "lat": 13.940699599999999,
          "lng": 100.7156523
        }
      },
      {
        "_id": "5ecf3652aeeab4000ffdfffd",
        "name": "ร้านป๋านัท",
        "shoptype": "1",
        "openhours": [],
        "created": "2020-05-28T03:56:02.319Z",
        "__v": 0,
        "updated": "2020-05-28T03:56:05.955Z"
      }
    ]

    console.log(this.shopData);

  }

  goBackClick() {
    this._location.back();
  }

}
