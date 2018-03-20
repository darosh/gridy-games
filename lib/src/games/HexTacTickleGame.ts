import { HexagonalGrid, HexagonalTile, Shape } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class HexTacTickleGame extends TacTickleGameBase {
  public static title = "Hex Tac-tickle";
  public static type = "Move to Connect";
  public static original = "TacTickleGame";
  public static sample = "b1-c2, d5-d4, c5-c4, c1-d2, a5-b4, b5-a5, c4-b3";

  constructor() {
    super(new HexagonalGrid(1, true, Shape.Even, 4, 5) as any, 3, HexagonalTile.directions);
  }
}
