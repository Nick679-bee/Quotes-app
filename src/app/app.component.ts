import { Component } from '@angular/core';
import { Quotes, } from './quotes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Quotes';

  quotes = [
    new Quotes(1, 'I am thankful for all of those who said NO to me. It`s because of them i`m doing it myself.', `Albert Einstein`, 0,0, `wanje`, new Date(2019, 3, 14)),
  ]

}
