import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap
} from 'gridy';

import {CatchTheHareGameBase} from './base/CatchTheHareGameBase';

export class CatchTheHareGame extends CatchTheHareGameBase {
  public static title = 'Catch the Hare';
  public static group = 'Qirkat';
  public static wiki = 'https://en.wikipedia.org/wiki/Catch_the_Hare';
  public static location = 'Europe';
  public static created = 1283;
  public static rules = ['Black hunters block hare move', 'White hare captures hunters'];

  constructor() {
    super(<any>new RectangularGrid(1, false, Shape.Even, 5, 5, Rectangular8Tile));

    for (let i = 0; i < 10; i++) {
      (<any>this.grid.tiles[i]).data = 1;
    }

    (<any>this.grid.tiles[10]).data = 1;
    (<any>this.grid.tiles[14]).data = 1;
    (<any>this.grid.tiles[12]).data = 2;
  }
}
