import {Component} from '@angular/core';

import {NavController, ModalController, ViewController, NavParams, Platform} from 'ionic-angular';
import {User} from "../providers/user";

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
        <h2 style="text-align:center">Please enter login and password</h2>
      </ion-item>
      <form (ngSubmit)="logForm()">
        <ion-item>
          <ion-label color="primary" floating>Login</ion-label>
          <ion-input name="login" [(ngModel)]="account.login"></ion-input>
        </ion-item>
         <ion-item>
          <ion-label color="primary" floating>Password</ion-label>
          <ion-input name="password" type="password" [(ngModel)]="account.password"></ion-input>
        </ion-item>
        <ion-item>
          <button class="center" ion-button type="submit" block (click)="dismiss()">
            Save and login
            </button>
        </ion-item>
      </form>
  </ion-list>
</ion-content>
`
})

export class ModalContentLogin {

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, private user: User) {

  }

  account = {};

  logForm() {

    this.user.login(this.account).subscribe(data => {
      console.log(data);
    }, error => {
      console.log(JSON.stringify(error.json()));
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
