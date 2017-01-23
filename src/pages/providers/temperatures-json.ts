import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import {TemperatureRecord} from "../../models/temperature";

@Injectable()
export class TemperaturesJson {
  baseUrl = 'http://127.0.0.1:8000';
  jsonSufix = '/?format=json';

  constructor(public http: Http) {
  }

  load(): Observable<TemperatureRecord[]> {
    return this.http.get(this.baseUrl + '/api/temperature' + this.jsonSufix)
      .map(res => <TemperatureRecord[]>res.json()['results']);
  }

  getCurrentTemp() {
    let curTempUrl = this.baseUrl + '/temp_refresh/';
    return this.http.get(curTempUrl);
  }
}
