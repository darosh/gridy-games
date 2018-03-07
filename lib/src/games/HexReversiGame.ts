import { HexagonalGrid, normalize, rotate, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { landscapeHex } from "../utils";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class HexReversiGame extends ReversiGameBase {
  public static title = "Hex Reversi";
  public static type = "Reversi";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, false, Shape.Rhombus, 8))  as any);
  }
}
