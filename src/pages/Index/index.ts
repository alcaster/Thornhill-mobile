import {Component} from '@angular/core';

import {NavController, ModalController, ViewController, NavParams, Platform} from 'ionic-angular';

@Component({
  selector: 'page-page1',
  templateUrl: 'index.html'
})
export class Index {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalContentLogin);
    modal.present();
  }
}
@Component({
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      Description
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
    <ion-list>
      <ion-item>
      <!--here will be forms-->
        <h1>Please enter login and password</h1>
      </ion-item>
  </ion-list>
</ion-content>
`
})

export class ModalContentLogin {
  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
