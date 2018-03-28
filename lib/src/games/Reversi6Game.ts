import { Rectangular8Tile, RectangularGrid, Shape } from 'gridy';
import { IGame } from '../IGame';
import { Move } from '../Move';
import { ReversiGameBase } from './base/ReversiGameBase';

export class Reversi6Game extends ReversiGameBase {
  public static title = 'Reversi 6x6';
  public static type = 'Reversi';
  public static original = 'ReversiGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'd4, d3, c4, c3, d2, c5, b5, e3, d5, c1, d1, e1, b2, b4, b3, d6, f3, a4, e5, a6, a5, c2, a2, f6, e4, e2, b6, c6, f5, a3, f1, f4, f2, e6, a1, b1';

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 6, 6, Rectangular8Tile) as any);
  }
}
