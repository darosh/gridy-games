import { HexagonalGrid, Shape } from 'gridy';
import { IGame } from '../IGame';
import { landscapeHex } from '../utils';
import { HexGameBase } from './base/HexGameBase';

export class Hex13Game extends HexGameBase {
  public static title = 'Hex 13x13';
  public static type = 'Hex';
  public static original = 'HexGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'l1, j3, c1, k12, b1, e6, d8, a12, b7, j6, l3, a1, l6, m2, h1, h4, i1, d3, g8, f1, k8, g7, f6, e2, b6, f8, i7, e5, f9, j4, h2, e10, l9, k6, m5, e9, g2, h7, a3, a6, g4, i6, a10, g10, f11, k3, h11, a9, j5, b8, e13, c8, i5, h12, i11, g1, b4, h5, b12, e1, c6, d13, k2, m3, c10, a11, i12, j10, d11, f5, a7, j1, e11, g13, m9, i8, d5, c11, b11, a5, l7, d10, i13, c12, b2, c5, m10, i9, m1, c13, a4, d2, m4, g11, f13, e8, d7, h3, b10, k9, g5, h6, j13, g3, i2, f3, d4, i3, l5, k4, j2, j2';

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 13)) as any);
  }
}
