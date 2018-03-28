import { HexagonalGrid, normalize, Rectangular8Tile, rotate, Shape } from 'gridy';
import { landscapeHex } from '../utils';
import { ReversiGameBase } from './base/ReversiGameBase';

export class ReversiHex10Game extends ReversiGameBase {
  public static title = 'Reversi Hex 10x10';
  public static type = 'Reversi';
  public static original = 'ReversiGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'f5, f6, e6, e5, d5, d6, e7, d4, c5, f4, g4, b6, d3, g5, e4, d8, c6, d7, e8, e3, c9, h4, g6, d2, f3, f7, h3, h2, d1, b10, a7, d9, i4, c3, c10, g7, b4, b5, a10, g3, h1, d10, f2, a6, c8, c4, f8, f1, a5, e9, g1, a4, e10, i1, a3, b8, b9, e1, j1, h5, g2, j4, i3, e2, j3, a9, h6, i6, b3, f9, c7, b2, j6, i2, a8, h7, i5, j5, g8, f10, c1, j7, g9, g10, c2, j2, j8, b1, i7, i8, a2, b7, h9, i9, h10, j9, j10, pass, a1, pass, h8, pass, i10';

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 10)) as any);
  }
}
