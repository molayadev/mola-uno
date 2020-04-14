import { ICard } from '../card/card';

export interface IPlayerDeck {
  turn: boolean;
  name: string;
  cards: ICard[];
}
