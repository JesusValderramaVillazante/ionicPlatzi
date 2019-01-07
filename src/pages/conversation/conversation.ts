import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from "../../interfaces/user";
import {HomePage} from "../home/home";

@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {
  user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = this.navParams.get('data');
  }

  public ionViewDidLoad(): void {
    console.log('ionViewDidLoad ConversationPage');
  }

  goToHome() {
    this.navCtrl.push(HomePage);
  }

  backToHome() {
    this.navCtrl.pop();
  }
}
