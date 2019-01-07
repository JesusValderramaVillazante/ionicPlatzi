import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConversationPage } from '../conversation/conversation';
import { LoginPage } from '../login/login';
import {Status, User} from "../../interfaces/user";
import { UserService } from "../../services/user";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: User[];
  query: string;
  yuliana: User = {
    name: 'Yuliana',
    age: 26,
    active: false,
    status: Status.Online
  }
  constructor(public navCtrl: NavController, public userService: UserService) {
    this.users = this.userService.get();
    this.userService.add(this.yuliana);
  }
  
  public goToConversation(user): void{
    this.navCtrl.push(ConversationPage, {data: user});
  }

  public goToLogin(): void{
    this.navCtrl.push(LoginPage);
  }
}
