import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Index } from '../pages/Index/index';
import { Temperature } from '../pages/Temperatures/temperatures';
import {TemperaturesJson} from "../pages/providers/temperatures-json";
@NgModule({
  declarations: [
    MyApp,
    Index,
    Temperature
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Index,
    Temperature
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},TemperaturesJson]
})
export class AppModule {}
