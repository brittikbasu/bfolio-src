import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Polizeigewalt page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-polizeigewalt',
  templateUrl: 'polizeigewalt.html'
})
export class PolizeigewaltPage {
win: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PolizeigewaltPage');
  }

  newTab(url) {
  this.win = window.open(url, '_blank');
  this.win.focus();
}

}
