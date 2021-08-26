import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.scss']
})
export class QuoteDetailsComponent implements OnInit {

  @Input()
  quote!: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  delete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  upvote(){

    this.quote.upvote = this.quote.upvote +1;
  }
  downvote(){

    this.quote.downvote = this.quote.downvote + 1;
  }

  constructor() { }

  ngOnInit() {
  }

}