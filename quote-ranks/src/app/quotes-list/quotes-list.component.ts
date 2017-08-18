import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {

  @Input() theQuotes;

  @Output() upVoteEmitter = new EventEmitter();
  @Output() downVoteEmitter = new EventEmitter();
  @Output() deleteEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  upVote(ind) {
    // console.log("upVote() invoked in quotes-new Component");
    // console.log(ind);
    this.upVoteEmitter.emit(ind);
  }

  downVote(ind) {
    // console.log("downVote() invoked in quotes-new Component");
    // console.log(ind);
    this.downVoteEmitter.emit(ind);
  }

  delete(ind) {
    // console.log("downVote() invoked in quotes-new Component");
    // console.log(ind);
    this.deleteEmitter.emit(ind);
  }
}
