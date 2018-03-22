import { HexagonalGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { landscapeHex } from "../utils";
import { HexGameBase } from "./base/HexGameBase";

export class Hex11Game extends HexGameBase {
  public static title = "Hex 11x11";
  public static type = "Hex";
  public static original = "HexGame";
  // tslint:disable-next-line:max-line-length
  public static sample = "f6, g6, f7, g5, f5, g4, f4, g7, d8, f8, g3, i3, h3, h4, i2, k2, j3, j2, e10, f9, k1, j1, g10, f10, e11, f11";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 11)) as any);
  }
}
