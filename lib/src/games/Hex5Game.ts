import { HexagonalGrid, Shape } from 'gridy';
import { IGame } from '../IGame';
import { landscapeHex } from '../utils';
import { HexGameBase } from './base/HexGameBase';

export class Hex5Game extends HexGameBase {
  public static title = 'Hex 5x5';
  public static group = 'Hex';
  public static original = 'HexGame';
  public static sample = 'e1, b2, b3, a4, a3, c2, c3, d2, d3, e3, e2';

  constructor() {
    super(<any>landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 5)));
  }
}
