import { HexagonalGrid, HexagonalTile, normalize, Shape } from 'gridy';
import { QirkatGameBase } from './base/QirkatGameBase';

const SIZE = 7;

export class QirkatHex7Game extends QirkatGameBase {
  public static title = 'Qirkat Hex 7x7';
  public static group = 'Qirkat';
  public static original = 'QirkatGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'd3-d4, d5-d4-d3, d2-d3-d4, d6-d5, d4-d5-d6, d7-d6-d5, c3-d2, e1-d2-c3, b3-c3-d3, e3-d3-c3, b4-c3-d2, e2-e3, b5-b4, d5-c5-b5-c4-d3, d2-d3-d4, e3-d4-c5, b6-c5-d4, f1-e2, d4-d5, e5-d5-c5, c6-c5-c4, f2-f1, c4-c5, f3-f2, a7-b6, e4-e5, c5-b5, e5-d5, b4-c3, e6-d7, b7-c6, d5-c6-b7, c7-b7-a7, f2-e3, b5-c5, f5-e6, b2-b3, e3-d3, c3-d3-e3-e2-e1, g3-f3, b1-b2, d7-c7, b3-b4, f3-e4, c1-b1, g1-f2, e1-f1-g1-f2-e3-e4-e5-f4-g3-g2-g1, e6-f5, d1-e1, c7-b7, a7-b7-c7, f5-e5, e1-d2, e7-e6, c5-c4, e5-d5, c7-c6, d5-c6-b7-b6-b5-b4-b3-c2-d1-d2-d3-c4-b5, a6-b5-c4, e6-e5, c4-d3, f6-f5, a3-b3, e5-e6, d3-e2, e6-d7, a2-a3, f5-e5, b3-b4, e5-f4, b4-b3, f4-e5, a3-a2, d7-e6, b3-a3, e5-f4, g1-f2, g4-g3, e2-f1, f7-f6, f1-g1, f6-f7, a4-b3, g3-f3, b3-c3, f3-f2-f1, g1-f1-e1, e6-e5, c3-c4, g5-f5, c4-c3, f5-e6, e1-e2, f7-f6, c3-c2, f6-f7, e2-e3, f4-f5, c2-c1, f5-g4, a3-a4, e5-f5, a4-b3, e6-d7, e3-d4, f5-f6, d4-c5, f6-f5, a5-b5, f5-f4, b5-b6, f7-f6, a2-a3, g7-f7, b6-b7, f6-g5, c1-d1, g6-g7, c5-c6, g5-g6, b3-c3, f7-f6, b2-c1, f4-f3, c1-b2, g6-g5, d1-e1, f6-f7, c6-d5, d7-c7, b7-c7-d7, f7-f6, b1-a2, f3-f4, d5-e4, g7-f7, b2-b1, f7-e7, d7-e7-f7-f6-f5-f4-f3, g4-f5, c3-d3, f5-f4, f3-f4-f5, g5-f5-e5-e4-e3-d3-c3, a3-b3, c3-b3-a3, a2-a3-a4';

  public hull: boolean;

  constructor() {
    const grid = new HexagonalGrid(1, true, Shape.Rhombus, SIZE, SIZE);
    normalize(grid);
    super(<any>grid, SIZE * SIZE * 3);
    this.hull = true;
  }
}
