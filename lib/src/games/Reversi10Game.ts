import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class Reversi10Game extends ReversiGameBase {
  public static title = "Reversi 10x10";
  public static type = "Reversi";
  public static original = "ReversiGame";
  // tslint:disable-next-line:max-line-length
  public static sample = "f6, e5, e6, f5, g4, e7, d8, h3, d4, e8, f8, e4, f4, g7, g5, e3, g3, c3, d6, d7, i3, g6, c8, f3, h6, c7, c6, b9, f2, b5, e2, d9, c10, i7, h4, i2, b2, h5, a4, c5, j1, j2, i4, g8, h7, a5, a10, a1, f9, a3, g9, i6, b8, h8, c9, d2, j3, i5, b6, d3, f7, a6, d1, e1, j7, j8, d5, c2, j4, e10, b7, b10, h9, h2, e9, i9, a9, b4, c4, b3, c1, i8, j10, j9, i10, j5, j6, h10, i1, d10, f10, g10, a8, g2, a7, h1, b1, a2, f1, g1";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 10, 10, Rectangular8Tile) as any);
  }
}
