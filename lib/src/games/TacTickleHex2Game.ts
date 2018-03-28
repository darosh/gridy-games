import { HexagonalGrid, HexagonalTile, normalize, Shape } from 'gridy';
import { TacTickleGameBase } from './base/TacTickleGameBase';

export class TacTickleHex2Game extends TacTickleGameBase {
  public static title = 'Tac-tickle Hex2';
  public static group = 'Move to Connect';
  public static original = 'TacTickleGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'g1-f2, f1-e2, f2-f3, d7-d6, f3-e4, b7-b6, e4-d5, d6-c6, d5-c5, d1-d2, a7-b7, e2-d3, e1-f1, d3-c4, f1-e2, d2-d3, c5-b5, b6-c5';

  constructor() {
    const grid = new HexagonalGrid(1, true, Shape.Hexagonal, 4);
    normalize(grid);
    super(<any>grid, 3, HexagonalTile.directions, [[3, 0, 0], [0, 6, 0]]);
  }
}
