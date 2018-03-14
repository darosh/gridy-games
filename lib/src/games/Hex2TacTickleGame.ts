import { HexagonalGrid, HexagonalTile, normalize, Shape } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class Hex2TacTickleGame extends TacTickleGameBase {
  public static title = "Hex2 Tac-tickle";
  public static type = "Connect";
  public static original = "TacTickleGame";

  constructor() {
    const grid = new HexagonalGrid(1, true, Shape.Hexagonal, 4);
    normalize(grid);
    super(grid as any, 3, HexagonalTile.directions, [[3, 0, 0], [0, 6, 0]]);
  }
}
