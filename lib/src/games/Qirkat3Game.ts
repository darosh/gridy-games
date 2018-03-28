import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap
} from 'gridy';

import { QirkatGameBase } from './base/QirkatGameBase';

const SIZE = 3;

export class Qirkat3Game extends QirkatGameBase {
  public static title = 'Qirkat 3x3';
  public static type = 'Qirkat';
  public static original = 'QirkatGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'b1-b2, b3-b2-b1, a2-b2, b1-b2-b3, a3-a2, c1-b2, a2-a3, b2-b1, a1-b1-c1, b3-b2, c1-b1, b2-c1, b1-a1, c1-b1, a1-b1-c1, c2-b2, c1-b1, b2-a2, a3-a2-a1, c3-b3, b1-c1, b3-c3, a1-a2, c3-b3, a2-b2, b3-b2-b1, c1-b1-a1';

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, SIZE, SIZE, Rectangular8Tile) as any);
  }
}
