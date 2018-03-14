import { HexagonalGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { landscapeHex } from "../utils";
import { HexGameBase } from "./base/HexGameBase";

export class Hex11Game extends HexGameBase {
  public static title = "Hex 11x11";
  public static type = "Hex";
  public static original = "HexGame";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 11)) as any);
  }
}