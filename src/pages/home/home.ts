import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  
  public gotToConversation(): void{
    this.navCtrl.push(ConversationPage);
  }

  public gotToLogin(): void{
    this.navCtrl.push(LoginPage);
  }
}
