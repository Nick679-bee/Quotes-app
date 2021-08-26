import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.scss']
})
export class QuotesFormComponent implements OnInit {

  newQuotes = new Quotes(0, '', '', 0, 0,``, new Date());
  @Output() addQuote = new EventEmitter<Quotes>();

    submitQuote() {
    this.addQuote.emit(this.newQuotes);
    this.newQuotes = new Quotes(0, '', '', 0,0, ``, new Date());

    }

  constructor() { }

  ngOnInit(): void {
  }

}
