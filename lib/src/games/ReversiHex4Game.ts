import { HexagonalGrid, normalize, Rectangular8Tile, rotate, Shape } from 'gridy';
import { landscapeHex } from '../utils';
import { ReversiGameBase } from './base/ReversiGameBase';

export class ReversiHex4Game extends ReversiGameBase {
  public static title = 'Reversi Hex 4x4';
  public static group = 'Reversi';
  public static original = 'ReversiGame';
  public static sample = 'b3, c3, c2, b2, c4, b4, a4, d2, d1, pass, a2, pass, d3';

  constructor() {
    super(<any>landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 4)));
  }
}
