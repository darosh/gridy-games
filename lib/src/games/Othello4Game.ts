import { Rectangular8Tile, RectangularGrid, Shape } from 'gridy';
import { ReversiGameBase } from './base/ReversiGameBase';

export class Othello4Game extends ReversiGameBase {
  public static title = 'Othello 4x4';
  public static type = 'Reversi';
  public static original = 'OthelloGame';
  public static sample = 'd2, d3, d4, b1, a4, b4, c4, d1, a3, pass, a2';

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 4, 4, Rectangular8Tile) as any, true);
  }
}
