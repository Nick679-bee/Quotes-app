import { Component, OnInit } from '@angular/core';
import { Quotes }from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './/quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuoteComponent implements OnInit {
  quotes = [

    new Quotes(1, 'That which does not kill us makes us stronger', `Nick Mwaura`,0, 0,`N.i.c.k.o`, new Date(2021, 8, 24)),

  ];
  deleteQuote(isComplete: any, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }
  addNewQuote(quote: Quotes) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.date = new Date(quote.date)
    this.quotes.push(quote)

  }


  

  constructor() {}

  ngOnInit() {
  }

}
