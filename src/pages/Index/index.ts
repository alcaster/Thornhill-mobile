import {Component} from "@angular/core";
import {NavController, ModalController, ViewController, NavParams, Platform} from "ionic-angular";
import {User} from "../providers/user";
import {Storage} from "@ionic/storage";


@Component({
  selector: 'index',
  templateUrl: 'index.html'
})
export class Index {
  logged;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage) {
    storage.get('login-data').then((val) => {
      console.log('Login data', val);
      this.logged = val != null;
    })
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalContentLogin);
    modal.present();
  }

  logout() {
    this.storage.set('login-data', null);
    window.location.reload();
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

  constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController, private user: User, private storage: Storage) {

  }

  account = {};

  logForm() {

    this.user.login(this.account).subscribe(data => {
      console.log(data);
      this.storage.set('login-data', data);
    }, error => {
      //Clear local storage
      this.storage.set('login-data', null);
      console.log(JSON.stringify(error.json()));
    });
  }

  dismiss() {
    this.viewCtrl.dismiss();
    window.location.reload();
  }
}
