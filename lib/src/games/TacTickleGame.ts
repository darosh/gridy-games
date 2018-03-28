import { Rectangular8Tile, RectangularGrid, RectangularTile, Shape } from 'gridy';
import { TacTickleGameBase } from './base/TacTickleGameBase';

export class TacTickleGame extends TacTickleGameBase {
  public static title = 'Tac-tickle';
  public static group = 'Move to Connect';
  public static authors = ['NRICH'];
  public static source = 'https://nrich.maths.org/1240';
  public static created = '2000';
  public static rules: string[] = ['Move to connect 3'];
  public static sample = 'c5-c4, b5-b4, d1-d2, a1-a2, a5-b5, b4-a4, d2-d3';

  constructor() {
    super(<any>new RectangularGrid(1, undefined, Shape.Even, 4, 5, Rectangular8Tile), 3, RectangularTile.directions);
  }
}
