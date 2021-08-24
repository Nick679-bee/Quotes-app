import { Component, OnInit } from '@angular/core';
import { Quote }from '../quotes'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {
  quotesArray:Quote[] = [
    new Quote(1,'One day nitamake it','James Bond'),
    new Quote(2,'One day nitamake it','Mutua'),
    new Quote(3,'One day nitamake it','James Bond')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
