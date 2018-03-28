import { HexagonalGrid, HexagonalTile, normalize, Shape } from 'gridy';
import { QirkatGameBase } from './base/QirkatGameBase';

const SIZE = 5;

export class QirkatHex2Game extends QirkatGameBase {
  public static title = 'Qirkat Hex2';
  public static group = 'Qirkat';
  public static original = 'QirkatGame';
  // tslint:disable-next-line:max-line-length
  // public static sample = 'c4-d4, e4-d4-c4, b4-c4-d4, d6-c5-b4, d4-d5-d6, e7-d6-c5, b6-c5-d4, b4-b5-b6-c6-d6, c7-d7-e7-d6-c5, f6-e7, d4-e5-f6-e6-d6, f5-e5, a3-b4, e5-d6-c7, b7-c7-d7, e7-d7-c7, b4-a3, g5-f6, c5-b6, f6-g5, b6-c5, f7-f6, c5-b6, f6-e5, c3-d4, e1-d2-c3, c2-c3-c4, e5-d4-c3-c4-c5, b6-c5-d4, e3-d3-c3-d4-e5, d1-e1, f1-e1-d1, c1-d1-e1-e2-e3, f4-e3-d2, a5-b5, c7-d7, b5-b6, g5-f4, b2-c2, d2-c2-b2-b3-b4, a4-b4-c4, g6-g5, b1-b2, e5-f5, b6-c6, g7-f6, c6-c7, d7-c7-b7, a7-b7-c7, f6-e5, b2-c2, f2-e2, a1-b1, f5-f6, a3-b4, e5-e4, b4-a5, g1-f1, a5-b6, g3-f2, c4-c3, g4-g3, a6-a5, f2-e3, b1-a1, e4-d4, c3-d4-e5-f6-g7, g5-f6, g7-f6-e5, f4-e5-d6, c7-d6-e5, g3-f2, a1-b1, g2-g3, e5-f6, e3-d3, f6-f5, f2-e3, a2-a1, d3-d2, b6-a6, d2-c2-b2, b1-b2-b3, e3-e4, a6-a7, e2-e1, a5-a6, e4-e3, f5-e5, g3-g4, a6-a5, g4-g3, e5-d6, e3-e4, b3-b4, e1-d2, d6-d7, d2-c1, b4-c5, f3-f2, c5-c4, f1-g1, d7-c7, e4-e3, a5-b6, f2-f3, c7-b7, g3-g4, b6-c6, e3-e4, c4-b4, c1-c2, b4-c5, g1-f1, c5-c4, g4-f4, a1-b1, c2-c3, c4-c3-c2, e4-d4, c6-d6, d4-e5, d6-c5, e5-d4, c5-d4-e3-f3-g3-f4-e5, f1-g1, e5-d6, g1-f2, b1-b2, f2-e2, c2-d2, e2-d2-c2-b2-a2, d6-c5, a2-a1, a7-a6, a1-b1, c5-c4, b1-a1, a6-a5, a1-b2, a5-a4, b2-c3, c4-c3-c2';

  constructor() {
    const grid = new HexagonalGrid(1, true, Shape.Hexagonal, SIZE, SIZE);
    normalize(grid);
    super(<any>grid);
  }
}
