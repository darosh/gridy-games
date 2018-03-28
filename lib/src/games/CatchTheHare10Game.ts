import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap
} from 'gridy';

import {CatchTheHareGameBase} from './base/CatchTheHareGameBase';

export class CatchTheHare10Game extends CatchTheHareGameBase {
  public static title = 'Catch the Hare 10';
  public static group = 'Qirkat';
  public static original = 'CatchTheHareGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'b4-c4, c3-c4-c5, a5-b4, c5-b5-a5-b4-c3, a3-b4, c3-b3-a3-a4-a5, b2-c2, a5-b4-c3-c2-c1, a1-b2, c1-b1-a1-a2-a3, b2-b3, a3-b3-c3';

  constructor() {
    super(<any>new RectangularGrid(1, false, Shape.Even, 5, 5, Rectangular8Tile), 50);

    for (let i = 0; i < 10; i++) {
      (<any>this.grid.tiles[i]).data = 1;
    }

    (<any>this.grid.tiles[12]).data = 2;
  }
}
