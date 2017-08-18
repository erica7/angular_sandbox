import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from './../quote';

@Component({
  selector: 'app-quotes-new',
  templateUrl: './quotes-new.component.html',
  styleUrls: ['./quotes-new.component.css']
})
export class QuotesNewComponent implements OnInit {

  @Input() theQuotes: Quote[];

  @Output() newQuoteEmitter = new EventEmitter();

  newQuote = new Quote();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    event.preventDefault();
    // console.log("onSubmit() invoked in quotes-new Component");
    // console.log(this.newQuote);
    this.newQuote.votes = 0;
    this.newQuoteEmitter.emit(this.newQuote);
    this.newQuote = new Quote();
  }
}
