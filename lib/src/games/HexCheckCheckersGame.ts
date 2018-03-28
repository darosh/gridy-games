import { HexagonalGrid, Rectangular8Tile, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { Theme } from "../Theme";
import { CheckersGameBase } from "./base/CheckersGameBase";

export class HexCheckCheckersGame extends CheckersGameBase {
  public static title = "Hex Czech Checkers";
  public static theme = Theme.CheckersHex;
  public static group = "Checkers";

  constructor() {
    super(new HexagonalGrid(1, true, Shape.Odd, 4, 8) as any, 3, 1);
  }
}
