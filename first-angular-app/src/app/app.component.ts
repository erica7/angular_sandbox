import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  emails: object[] = [
    {
      email: 'a@a.a',
      importance: true,
      subject: 'hello',
      content: 'yoooooooo'
    },
    {
      email: 'bbb@a.a',
      importance: false,
      subject: '22222',
      content: 'ayyyyyyyeeeeee'
    },
    {
      email: 'abba@abba.a',
      importance: false,
      subject: 'nyc',
      content: 'nynynynynynynyn'
    },
    {
      email: 'sdfsdfa@a.a',
      importance: true,
      subject: 'panda',
      content: 'pandapandapanda'
    },
  ];

  randomColors: string[] = ['aqua','crimson','cornflowerblue','coral','aquamarine','navy'];
  // randomColors = [];
  // for (let i = 0; i < colors.length; i++) {
  //   randomColors.push(Math.floor(Math.random()*colors.length))
  // }

}
