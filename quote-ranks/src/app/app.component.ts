import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [];

  addQuote(eventData) {
    // console.log('addQuote() invoked in app Component');
    // console.log(eventData);
    this.quotes.push(eventData);
  }

  upVote(eventData) {
    // console.log('upVote() invoked in app Component');
    this.quotes[eventData].votes++;
  }

  downVote(eventData) {
    // console.log('downVote() invoked in app Component');
    this.quotes[eventData].votes--;
  }

  delete(eventData) {
    // console.log('delete() invoked in app Component');
    this.quotes.splice(eventData,1);
  }
}
