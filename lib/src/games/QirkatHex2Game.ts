import { HexagonalGrid, HexagonalTile, normalize, Shape } from 'gridy';
import { QirkatGameBase } from './base/QirkatGameBase';

const SIZE = 5;

export class QirkatHex2Game extends QirkatGameBase {
  public static title = 'Qirkat Hex2';
  public static group = 'Qirkat';
  public static original = 'QirkatGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'e6-e5, e4-e5-e6, e7-e6-e5, f6-e7, e8-e7-e6, f7-e7, d8-e7-f6, g5-f6-e7, e6-e7-e8, f5-f6, e8-f7, g7-f7-e7, d7-e7-f7-f6-f5, g4-f5-e6-e5-e4, e9-f8-g7-g6-g5, h5-g5-f5, d5-e5, f5-e5-d5-d6-d7, c7-d7-e7, f4-f5, e7-e6, f5-e6-d7, c8-d7-e6, h6-h5, d4-d5, g3-g4, d9-d8, e3-d4, c5-d4-e3-f3-g3-g4-g5, h5-g5-f5-e6-d7-d8-d9, c9-d9-e9, e4-e3, d3-e3-f3, f2-f3-f4, c4-d3, e2-d3-c4, c3-c4-c5, e1-d2-c3, b4-c3-d2, i4-h5, a5-b4, h3-g4, d2-e1, g4-h3, d5-d6, f4-f5, b9-c9, h4-g5, c6-d5, f5-e5, d6-e5-f4, g2-f3, f4-f3-f2, f1-f2-f3, d5-d4, h3-g3, e1-e2, h5-g6, d4-d5, i3-h4, e9-e8, g6-f7, e8-f7-g6-g5-g4-g3-g2-f3-e4, h2-g3, d5-c6, g1-g2, e4-d5, g3-f3, b4-a5, f3-e3, e2-e3-e4, i2-h3, b5-b4, h3-i2, c5-b5, i1-h2, e4-f3, g2-f3-e4, d5-e4-f3, h4-i3, b4-c3, i2-h3, b5-c5, h1-g1, c6-d5, i5-h6, f3-e3, h2-i1, c9-d9, i1-h1, d5-d6, i3-h4, e3-f3, h6-i5, b8-c7, h4-h5, c7-c6, h1-i1, c5-b5, h5-h4, a9-b9, h3-i2, f3-g2, g1-g2-g3, a8-a9, i2-i3, c3-b4, g3-g2, c6-c5, i5-i4, b5-c4, g2-g3, d6-d5, i3-h3, c4-d3, i1-i2, c5-b5, h4-g5, d3-d4, g5-g6, b9-b8, h3-i3, d5-e4, g3-f3, e4-f3-g2, g6-h5, d9-d8, h5-g5, d4-e3, i3-h4, a7-a8, i2-i1, b7-c6, h4-h5, b8-c7, g5-g6, c7-b7, g6-g7, d8-e7, h5-g6, a9-b8, g7-f7, e7-f7-g7-g6-g5, i1-h1, g5-f5, h1-g2-f3-e3-d3, b7-a7, d3-e3, b8-b9, i4-i3, b9-b8, i3-i2, a8-b7, e3-f3, b6-c5, f3-e4, f5-f4, e4-e5, f4-e5-d6, i2-i1, b7-c7, i1-h2, b8-a9, h2-h1, a7-a8, h1-g1, d6-e5, g1-f2, c7-d6, f2-f1, d6-d7, f1-e1, d7-e6, e1-e2, a8-a7, e2-f1, c5-d4, f1-e1, c6-d5, e1-d2, b4-c3, d2-c3-b4-b5-b6, a7-b6-c5';

  public hull: boolean;

  constructor() {
    const grid = new HexagonalGrid(1, true, Shape.Hexagonal, SIZE, SIZE);
    normalize(grid);
    super(<any>grid, SIZE * SIZE * 3);
    this.hull = true;
  }
}
