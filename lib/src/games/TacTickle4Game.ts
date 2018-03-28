import { Rectangular8Tile, RectangularGrid, RectangularTile, Shape } from 'gridy';
import { TacTickleGameBase } from './base/TacTickleGameBase';

export class TacTickle4Game extends TacTickleGameBase {
  public static title = 'Tac-tickle 4x4';
  public static group = 'Move to Connect';
  public static aliases = 'Tic-tackle';
  public static original = 'TacTickleGame';
  public static sample = 'c4-c3, a1-a2, d1-d2, d4-c4, c3-b3, c1-c2, d2-d1, c4-c3, b3-a3, c2-d2';

  constructor() {
    super(<any>new RectangularGrid(1, undefined, Shape.Even, 4, 4, Rectangular8Tile), 3, RectangularTile.directions);
  }
}
