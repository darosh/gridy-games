import { Rectangular8Tile, RectangularGrid, Shape } from 'gridy';
import { IGame } from '../IGame';
import { Move } from '../Move';
import { ReversiGameBase } from './base/ReversiGameBase';

export class AntiReversiGame extends ReversiGameBase {
  public static title = 'Anti-Reversi';
  public static group = 'Reversi';
  public static created = 1883;
  public static authors = ['Lewis Waterman', 'John W. Mollett'];
  public static wiki = 'https://en.wikipedia.org/wiki/Reversi';
  public static rules: string[] = ['Capture less pieces'];
  public static location = 'England';
  // tslint:disable-next-line:max-line-length
  public static sample = 'd5, e4, e5, d4, e3, d6, c4, f4, d7, c5, e6, b4, d3, f2, f5, c3, e2, c7, b6, e1, d8, g5, b2, b8, a3, a1, c6, c8, g4, a5, h6, e7, b5, h4, c2, b7, f7, g7, e8, f8, a7, a8, a4, f6, g8, b3, h7, h8, c1, g6, d2, f3, f1, b1, g1, h5, h3, g3, d1, a2, h2, h1, g2, a6';

  constructor() {
    super(<any>new RectangularGrid(1, undefined, Shape.Even, 8, 8, Rectangular8Tile), false, true);
  }
}
