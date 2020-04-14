import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DeckComponent } from './components/deck/deck.component';
import { DeckService } from './deck.service';
import { PlayerDeckComponent } from './components/player-deck/player-deck.component';



@NgModule({
  declarations: [CardComponent, DeckComponent, PlayerDeckComponent],
  imports: [
    CommonModule
  ],
  providers: [DeckService]
})
export class DeckModule { }
