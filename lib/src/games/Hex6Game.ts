import { HexagonalGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { landscapeHex } from "../utils";
import { HexGameBase } from "./base/HexGameBase";

export class Hex6Game extends HexGameBase {
  public static title = "Hex 6×6";
  public static type = "Hex";
  public static original = "HexGame";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 6)) as any);
  }
}
