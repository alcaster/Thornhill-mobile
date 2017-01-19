import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {TemperatureRecord} from "../../models/temperature";

@Injectable()
export class TemperaturesJson {
  thornhillApiUrl = 'http://127.0.0.1:8000/api';
  jsonSufix='/?format=json';
  constructor(public http: Http) { }
  load(): Observable<TemperatureRecord[]> {
    return this.http.get(this.thornhillApiUrl+'/temperature'+this.jsonSufix)
      .map(res => <TemperatureRecord[]>res.json());
  }
}
