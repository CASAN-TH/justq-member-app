import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  getShopType(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/json/shoptype.json').subscribe((res) => {
        resolve(res);
      }, reject);
    });
  }
}
