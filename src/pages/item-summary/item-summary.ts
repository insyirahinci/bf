import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ItemSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-summary',
  templateUrl: 'item-summary.html',
})
export class ItemSummaryPage {
  items: { name: string; name1: string; price: string; }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = [
      {
        name: 'Twisties Carbonara',
        name1:'200 point',
        price: "Rm2",
       
      }, {
        name: 'Roti Gardenia',
        name1:'500 point',
        price: "Rm2",
       
      }, {
        name: 'Biskkut Oreo',
        name1:'400 point',
        price: "Rm2",
       
      }, {
        name: 'CEmpedak Goreng Asli',
        name1:'300 point',
        price: "Rm2",
        
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemSummaryPage');
  }

}
