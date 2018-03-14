import { HexagonalGrid, HexagonalTile, Shape } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class HexTacTickleGame extends TacTickleGameBase {
  public static title = "Hex Tac-tickle";
  public static type = "Move to Connect";
  public static original = "TacTickleGame";

  constructor() {
    super(new HexagonalGrid(1, true, Shape.Even, 4, 5) as any, 3, HexagonalTile.directions);
  }
}
