import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ByPointPage } from './by-point';
import { QRScanner } from '@ionic-native/qr-scanner';

@NgModule({
  declarations: [
    ByPointPage,
  ],
  imports: [
    IonicPageModule.forChild(ByPointPage),
  ],
  providers: [
  QRScanner
  ]
})
export class ByPointPageModule {}
