
export const DECK_API = 'https://deckofcardsapi.com/api/deck';
export interface IDeckResponse {
    success: boolean;
    deck_id: string;
    shuffled: boolean;
    remaining: number;
}

export class DeckApi {
  private url = DECK_API;
  private shuffle = '/new/shuffle';
  private deck: IDeckResponse;

  constructor(deck_count: number, cards: string []) {
    this.deck = 
  }
}