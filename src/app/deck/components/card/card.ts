import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

export interface ICard {
  value?: number;
  colour?: string;
  imageUrl: string;
  action?: string;
}

export class Card implements ICard {
  value: number;
  colour: string;
  imageUrl: string;
  action?: string;
  constructor(value: number, colour: string, imageUrl: string, action?: string) {
    this.value = value;
    this.colour = colour;
    this.imageUrl = imageUrl;
    this.action = action;
  }
}
