import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.apiUrl + '/api/shoptypes';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }

  private authorizationHeader() {
    // const token = window.localStorage.getItem(`token@${environment.appName}`);
    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWM0MGVmZWJmZjRmNzAwMGZkMzA0MTMiLCJmaXJzdG5hbWUiOiIxIiwibGFzdG5hbWUiOiIxIiwiZGlzcGxheW5hbWUiOiIxIDEiLCJlbWFpbCI6IjEuMUDguIjguLHguJTguITguLTguKcuY29tIiwicHJvZmlsZUltYWdlVVJMIjoiaHR0cDovL3Jlcy5jbG91ZGluYXJ5LmNvbS9oZmx2bGF2MDQvaW1hZ2UvdXBsb2FkL3YxNDg3ODM0MTg3L2czaHd5aWViN2RsN3VnZGdqM3RiLnBuZyIsInJvbGVzIjpbInVzZXIiXSwidXNlcm5hbWUiOiIxIiwicHJvdmlkZXIiOiJsb2NhbCIsImlhdCI6MTU5MDU0NjY2NiwiZXhwIjoxNTk3NzQ2NjY2fQ.ttZDlMnfVJXa7wzIMuVfWGS-1VKJbeVS1CcH9wiWrn4' );
    return headers;
  }

  getShopType(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(URL,{ headers: this.authorizationHeader() }).subscribe((res) => {
        resolve(res);
      }, reject);
    });
  }
}
