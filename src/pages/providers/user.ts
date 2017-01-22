import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class User {
  thornhillApiUrl = 'http://127.0.0.1:8000/api';
  apiLoginSufix = '/api-token-auth/';

  constructor(public http: Http) {
  }

  login(data): Observable<Object> {
    let body = 'username=' + data['login'] + '&password=' + data['password'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http
      .post(this.thornhillApiUrl + this.apiLoginSufix,
        body, {
          headers: headers
        })
  }
}
