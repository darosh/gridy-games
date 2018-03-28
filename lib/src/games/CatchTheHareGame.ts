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
  // tslint:disable-next-line:max-line-length
  public static sample = 'c5-c4, c3-d2, c4-c3, d2-e1, c3-d3, e1-d1, b2-c2, d1-e1, b3-c3, e1-d1, d3-d2, d1-e1, c3-d3, e1-d1, d3-e3, d1-e1, b4-c3, e1-d1, c3-d3, d1-e1, e3-e2, e1-d1, c2-c3, d1-e1, d3-e3, e1-d1, e2-e1, d1-d2-d3, c1-d2, d3-d4, c3-c4, d4-e5, e3-e4, e5-d4, c4-c5, d4-e5, c5-d5, e5-d4, b5-c5, d4-e5, d2-d3, e5-d4, d3-c3, d4-e5, e1-e2, e5-d4, e2-e3, d4-e5, c5-b5, e5-d4, b5-c5, d4-e5, a4-b4, e5-d4, b4-c4, d4-e5, c4-d4';

  constructor() {
    super(<any>new RectangularGrid(1, false, Shape.Even, 5, 5, Rectangular8Tile), 50);

    for (let i = 0; i < 10; i++) {
      (<any>this.grid.tiles[i]).data = 1;
    }

    (<any>this.grid.tiles[10]).data = 1;
    (<any>this.grid.tiles[14]).data = 1;
    (<any>this.grid.tiles[12]).data = 2;
  }
}
