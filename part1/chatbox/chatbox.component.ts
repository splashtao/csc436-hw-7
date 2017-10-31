import { Component, OnInit } from '@angular/core';
import { Chat } from '../chat.model';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {

  chat: Chat[];
  isVisible: boolean = true;

  constructor() {
    this.chat = [
      new Chat('Trevor', '3:20 PM', 'Sup!'),
      new Chat('Rose', '3:21 PM', 'Great!.'),
      new Chat('T-Mac', '3:22 PM', 'Just Chilling at home.'),
      new Chat('Klay', '3:23 PM', 'Watching NBA.'),
      new Chat('SplashTao', '3:24 PM', 'About to workout.')
    ];
  }

  chatIsVisible(): boolean {
    return this.isVisible;
  }



  closeChat() {
    this.isVisible = false;
  }

}
