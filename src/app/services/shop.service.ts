import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.apiUrl + '/api/shopsbytype';
const URL2 = environment.apiUrl + '/api/shops/';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    private http: HttpClient
  ) { }

  getShopById(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(URL2 + id).subscribe((res: any) => {
        resolve(res.data);
      }, reject);
    });
  }

  getShopByType(shopType): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(URL, { shoptype: shopType }).subscribe((res) => {
        resolve(res);
      }, reject);
    });
  }
}
