export const CARD_COLOURS: string[] = [ 'red', 'yellow', 'green', 'blue' ];
export const CARD_VALUES: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 20, 20];
export const CARD_ACTIONS = {
  SKIP: 'skip',
  REVERSE: 'reverse',
  DRAWTWO: 'drawtwo',
  WILD: 'wild',
  DRAWFOUR: 'drawfour'
};

export enum COLOURS {
  RED,
  YELLOW,
  GREEN,
  BLUE
}

export enum VALUES {
  ZERO,
  ONE,
  TWO,
  THREE,
  FOUR,
  FIVE,
  SIX,
  SEVEN,
  EIGHT,
  NINE
}

export enum ACTIONS {
  SKIP,
  REVERSE,
  DRAWTWO,
  WILD,
  DRAWFOUR
}
