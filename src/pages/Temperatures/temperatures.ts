import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {TemperaturesJson} from "../providers/temperatures-json";
import {TemperatureRecord} from "../../models/temperature";
import {Storage} from "@ionic/storage";


@Component({
  selector: 'page-page2',
  templateUrl: 'temperatures.html'
})
export class Temperature {
  temperatures: TemperatureRecord[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private temperatureApi: TemperaturesJson, private storage: Storage) {
    temperatureApi.load().subscribe(temperatures => {
      this.temperatures = temperatures;
    });
  }

  itemTapped(event, item) {

  }
}
