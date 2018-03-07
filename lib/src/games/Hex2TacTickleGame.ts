// https://nrich.maths.org/1240
// nrich.maths.org 2000
// Lutz Tautenhahn 2005 www.lutanho.net/play/tictackle.html

import { HexagonalGrid, HexagonalTile, normalize, Shape } from "gridy";
import { TicTackleGameBase } from "./base/TicTackleGameBase";

export class Hex2TacTickleGame extends TicTackleGameBase {
  public static title = "Hex² Tac-tickle";
  public static type = "Connect";

  constructor() {
    const grid = new HexagonalGrid(1, true, Shape.Hexagonal, 4);
    // grid.toTile = HexagonalGrid.twoAxisToCube;
    // grid.toPoint = HexagonalGrid.cubeToTwoAxis;

    normalize(grid);
    super(grid as any, 3, HexagonalTile.directions, [[3, 0, 0], [0, 6, 0]]);
  }
}
