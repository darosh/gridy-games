import { HexagonalGrid, Shape } from 'gridy';
import { IGame } from '../IGame';
import { landscapeHex } from '../utils';
import { HexGameBase } from './base/HexGameBase';

export class Hex9Game extends HexGameBase {
  public static title = 'Hex 9x9';
  public static type = 'Hex';
  public static original = 'HexGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'e5, e4, f5, e3, d5, g5, g4, c5, i3, c6, h3, d4, b8, c7, c8, d7, a8, e8, d8, e7, e2, g2, f2, f3, g1, h1, d9, e9';

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 9)) as any);
  }
}
