import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-conversation',
  templateUrl: 'conversation.html',
})
export class ConversationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public ionViewDidLoad(): void {
    console.log('ionViewDidLoad ConversationPage');
  }

  public goBack(): void{
    this.navCtrl.pop();
  }
}
