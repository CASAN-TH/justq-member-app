import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.apiUrl + '/api/shopsbytype';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    private http: HttpClient
  ) { }

  getShopByType(shopType): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(URL, { shoptype: shopType }).subscribe((res) => {
        resolve(res);
      }, reject);
    });
  }
}
