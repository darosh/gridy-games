import { HexagonalGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { landscapeHex } from "../utils";
import { HexGameBase } from "./base/HexGameBase";

export class Hex7Game extends HexGameBase {
  public static title = "Hex 7x7";
  public static type = "Hex";
  public static original = "HexGame";
  public static sample = "f2, d5, c3, e2, d3, e3, d4, e4, e1, f1, c6, d6";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 7)) as any);
  }
}
