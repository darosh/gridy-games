import { HexagonalGrid, HexagonalTile, normalize, Shape } from 'gridy';
import { QirkatGameBase } from './base/QirkatGameBase';

const SIZE = 5;

export class QirkatHexGame extends QirkatGameBase {
  public static title = 'Qirkat Hex';
  public static group = 'Qirkat';
  public static original = 'QirkatGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'c2-c3, c4-c3-c2, c1-c2-c3, d1-c2, c3-c2-c1, d3-c3, b3-c3-d3-d2-d1, e3-d3, a3-b3, e2-e3, b3-a3, e1-e2, d1-c2, d3-d2, a4-b3, d4-d3, a5-a4, c5-b5-a5-b4-c3, c2-c3-c4, d3-c4-b5, b3-b4, b5-b4-b3, a3-b3-c3-d2-e1, d5-c5, e1-d1, e2-d3, d1-d2, d3-d2-d1, c1-d1-e1, e3-d3, e1-d1, c5-d5, b2-b3, d3-d2, d1-d2-d3, e4-e3, b3-c2, e3-d3-c3-c2-c1, b1-c1-d1, d5-d4, d1-c2, d4-d3, c2-c3, d3-c3-b3, a4-b3-c2, e5-d5, c2-c1, d5-e4, c1-b1, e4-e3, a2-a3, e3-d4, b1-b2, d4-e3, a3-a2, e3-d4, a2-a3, d4-e3, a3-a4, e3-d4, a4-a3, d4-e3, a3-a4, e3-e2, a1-a2, e2-e1, a2-a3, e1-d1, b2-c1, d1-c1-b1, a3-a2, b1-a1, a2-a3, a1-a2, a3-a2-a1';

  public hull: boolean;

  constructor() {
    const grid = new HexagonalGrid(1, true, Shape.Rhombus, SIZE, SIZE);
    normalize(grid);
    super(<any>grid, SIZE * SIZE * 3);
    this.hull = true;
  }
}
