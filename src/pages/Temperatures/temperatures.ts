import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {TemperaturesJson} from "../providers/temperatures-json";
import {TemperatureRecord} from "../../models/temperature";
import {Storage} from "@ionic/storage";


@Component({
  selector: 'temperature',
  templateUrl: 'temperatures.html'
})
export class Temperature {
  temperatures: TemperatureRecord[];
  current: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private temperatureApi: TemperaturesJson, private storage: Storage) {
    temperatureApi.load().subscribe(temperatures => {
      this.temperatures = temperatures;
    });
    this.update();
  }

  update() {
    this.temperatureApi.getCurrentTemp().subscribe(temperature => {
      this.current = temperature['_body'];
    });
  }

  itemTapped(event, item) {
    this.update();
  }
}
