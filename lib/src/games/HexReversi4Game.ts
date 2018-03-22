import { HexagonalGrid, normalize, Rectangular8Tile, rotate, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { landscapeHex } from "../utils";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class HexReversi4Game extends ReversiGameBase {
  public static title = "Hex Reversi 4x4";
  public static type = "Reversi";
  public static original = "ReversiGame";
  public static sample = "b3, c3, c2, b2, c4, b4, a4, d2, d1, pass, a2, pass, d3";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 4)) as any);
  }
}
