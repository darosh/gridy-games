import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap
} from 'gridy';

import {CatchTheHareGameBase} from './base/CatchTheHareGameBase';

export class CatchTheHare10Game extends CatchTheHareGameBase {
  public static title = 'Catch the Hare 10';
  public static group = 'Qirkat';
  public static original = 'CatchTheHareGame';

  constructor() {
    super(<any>new RectangularGrid(1, false, Shape.Even, 5, 5, Rectangular8Tile));

    for (let i = 0; i < 10; i++) {
      (<any>this.grid.tiles[i]).data = 1;
    }

    (<any>this.grid.tiles[12]).data = 2;
  }
}
