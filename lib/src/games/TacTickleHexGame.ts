import { HexagonalGrid, HexagonalTile, Shape } from 'gridy';
import { TacTickleGameBase } from './base/TacTickleGameBase';

export class TacTickleHexGame extends TacTickleGameBase {
  public static title: string = 'Tac-tickle Hex';
  public static type: string = 'Move to Connect';
  public static original: string = 'TacTickleGame';
  public static sample: string = 'b1-c2, d5-d4, c5-c4, c1-d2, a5-b4, b5-a5, c4-b3';

  constructor() {
    super(<any>new HexagonalGrid(1, true, Shape.Even, 4, 5), 3, HexagonalTile.directions);
  }
}
