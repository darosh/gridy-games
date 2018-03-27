import { HexagonalGrid, normalize, rotate, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { landscapeHex } from "../utils";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class AntiReversiHexGame extends ReversiGameBase {
  public static title = "Anti-Reversi Hex";
  public static type = "Reversi";
  public static original = "ReversiGame";
  public static rules: string[] = ["Capture less pieces"];
  // tslint:disable-next-line:max-line-length
  public static sample = "e4, e5, d5, d4, f5, d6, c4, g5, e6, d7, d8, c8, b8, c5, f4, c6, b7, b6, a7, b5, f6, g4, h4, e3, a6, g6, d3, c7, e7, a8, g7, g3, h2, f3, f2, b4, a4, h3, a5, g1, e2, c3, d2, h5, g2, e8, f7, f1, e1, d1, c2, c1, h6, f8, b3, b2, a2, b1, a3, g8, h1, a1, h7";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, false, Shape.Rhombus, 8))  as any, false, true);
  }
}
