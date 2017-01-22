import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {Index, ModalContentLogin} from '../pages/Index/index';
import {Temperature} from '../pages/Temperatures/temperatures';
import {TemperaturesJson} from "../pages/providers/temperatures-json";
import {User} from "../pages/providers/user";
@NgModule({
  declarations: [
    MyApp,
    Index,
    Temperature,
    ModalContentLogin,
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Index,
    Temperature,
    ModalContentLogin,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TemperaturesJson, User]
})
export class AppModule {
}
