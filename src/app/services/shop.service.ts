import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.apiUrl + '/api/shopsbytype';
const URL2 = environment.apiUrl + '/api/shops/';
const URL3 = environment.apiUrl + '/api/reservations';
const URL4 = environment.apiUrl + '/api/checkreservations';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor(
    private http: HttpClient
  ) { }

  private authorizationHeader() {
    // const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWM0MGVmZWJmZjRmNzAwMGZkMzA0MTMiLCJmaXJzdG5hbWUiOiIxIiwibGFzdG5hbWUiOiIxIiwiZGlzcGxheW5hbWUiOiIxIDEiLCJlbWFpbCI6IjEuMUDguIjguLHguJTguITguLTguKcuY29tIiwicHJvZmlsZUltYWdlVVJMIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9oZmx2bGF2MDQvaW1hZ2UvdXBsb2FkL3YxNDg3ODM0MTg3L2czaHd5aWViN2RsN3VnZGdqM3RiLnBuZyIsInJvbGVzIjpbInVzZXIiXSwidXNlcm5hbWUiOiIxIiwicHJvdmlkZXIiOiJsb2NhbCIsImlhdCI6MTU5MDU0NjY2NiwiZXhwIjoxNTk3NzQ2NjY2fQ.ttZDlMnfVJXa7wzIMuVfWGS-1VKJbeVS1CcH9wiWrn4');
    return headers;
  }

  getShopById(id): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(URL2 + id, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        resolve(res.data);
      }, reject);
    });
  }

  saveQueue(body): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(URL3, body, { headers: this.authorizationHeader() }).subscribe((res: any) => {
        resolve(res.data);
      }, reject);
    });
  }

  getShopByType(shopType): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(URL, { shoptype: shopType }, { headers: this.authorizationHeader() }).subscribe((res) => {
        resolve(res);
      }, reject);
    });
  }

  getReservetionShopId(shopId, reserveType, reserveDate): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(URL4, { shopId: shopId, reserveType: reserveType, reserveDate: reserveDate }, { headers: this.authorizationHeader() }).subscribe((res) => {
        resolve(res);
      }, reject);
    });
  }

  getOpenTime(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('../../assets/json/opendaily.json').subscribe((res) => {
        resolve(res);
      }, reject);
    });
  }

  getShopDetail(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(URL2, { headers: this.authorizationHeader() }).subscribe((res) => {
        resolve(res);
      }, reject);
    });
  }
}
