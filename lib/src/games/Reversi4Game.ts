import { Rectangular8Tile, RectangularGrid, Shape } from 'gridy';
import { IGame } from '../IGame';
import { Move } from '../Move';
import { ReversiGameBase } from './base/ReversiGameBase';

export class Reversi4Game extends ReversiGameBase {
  public static title = 'Reversi 4x4';
  public static group = 'Reversi';
  public static original = 'ReversiGame';
  public static sample = 'c2, c3, b2, b3, b4, a1, d2, d4, a2, a3, a4, c4, pass, c1, b1, pass, d3, d1';

  constructor() {
    super(<any>new RectangularGrid(1, undefined, Shape.Even, 4, 4, Rectangular8Tile));
  }
}
