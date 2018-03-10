import { HexagonalGrid, HexagonalTile, Shape } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class HexTacTickleGame extends TacTickleGameBase {
  public static title = "Hex Tac-tickle";
  public static type = "Connect";

  constructor() {
    super(new HexagonalGrid(1, true, Shape.Even, 4, 5) as any, 3, HexagonalTile.directions);
  }
}
