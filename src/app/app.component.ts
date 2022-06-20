import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'cube' },
    { title: 'Action Sheet', url: 'actionsheet', icon: 'cube' },
    { title: 'Accordion', url: 'accordion', icon: 'cube' },
    { title: 'Alert', url: 'alert', icon: 'cube' },
    { title: 'badge', url: 'badge', icon: 'cube' },
  ];
  
  constructor() {}
}
