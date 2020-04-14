import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICard } from '../card/card';
import { IPlayerDeck } from './player-deck';

@Component({
  selector: 'app-player-deck',
  templateUrl: './player-deck.component.html',
  styleUrls: ['./player-deck.component.scss']
})
export class PlayerDeckComponent implements OnInit {
  @Input() player: IPlayerDeck;
  @Output() cardPlayed = new EventEmitter<ICard>();

  constructor() { }

  ngOnInit() {
  }

  cardClicked(card: ICard) {
    if (this.player && this.player.turn) {
      this.cardPlayed.emit(card);
    }
  }
}
