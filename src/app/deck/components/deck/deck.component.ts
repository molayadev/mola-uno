import { Component, OnInit, Input } from '@angular/core';
import { ICard } from '../card/card';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {
  @Input() cards: ICard[];
  constructor() { }

  ngOnInit() {
  }

}
