// https://nrich.maths.org/1240
// nrich.maths.org 2000
// Lutz Tautenhahn 2005 www.lutanho.net/play/tictackle.html

import { HexagonalGrid, HexagonalTile, Shape } from "gridy";
import { TicTackleGameBase } from "./base/TicTackleGameBase";

export class HexTacTickleGame extends TicTackleGameBase {
  public static title = "Hex Tac-tickle";
  public static type = "Connect";

  constructor() {
    super(new HexagonalGrid(1, true, Shape.Even, 4, 5) as any, 3, HexagonalTile.directions);
  }
}
