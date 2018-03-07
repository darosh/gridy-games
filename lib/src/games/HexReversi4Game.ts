import { HexagonalGrid, normalize, Rectangular8Tile, rotate, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { landscapeHex } from "../utils";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class HexReversi4Game extends ReversiGameBase {
  public static title = "Hex Reversi 4×4";
  public static type = "Reversi";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 4)) as any);
  }
}