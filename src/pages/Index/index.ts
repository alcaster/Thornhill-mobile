import {Component} from '@angular/core';

import {NavController, ModalController, ViewController, NavParams, Platform} from 'ionic-angular';
import {Http, Headers} from "@angular/http";

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
          <ion-textarea name="login" [(ngModel)]="account.login"></ion-textarea>
        </ion-item>
         <ion-item>
          <ion-label color="primary" floating>Password</ion-label>
          <ion-textarea name="password" [(ngModel)]="account.password"></ion-textarea>
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

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, public http: Http) {

  }

  account = {};

  logForm() {
    let loginUrl='http://127.0.0.1:8000/api/api-token-auth/';
    let body = 'username='+this.account['login']+'&password='+this.account['password'];
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http
      .post(loginUrl,
        body, {
          headers: headers
        })
      .subscribe(data => {
        console.log(data)
      }, error => {
        console.log(JSON.stringify(error.json()));
      });
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
