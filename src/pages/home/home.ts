import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListScannedItemsPage } from '../list-scanned-items/list-scanned-items';
import { ByPointPage } from '../by-point/by-point';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goScanItem(){
    this.navCtrl.push(ListScannedItemsPage)
  }

  goScanPoint(){
    this.navCtrl.push(ByPointPage)
  }
}
