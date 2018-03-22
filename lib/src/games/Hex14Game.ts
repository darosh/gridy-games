import { HexagonalGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { landscapeHex } from "../utils";
import { HexGameBase } from "./base/HexGameBase";

export class Hex14Game extends HexGameBase {
  public static title = "Hex 14x14";
  public static type = "Hex";
  public static original = "HexGame";
  // tslint:disable-next-line:max-line-length
  public static sample = "h8, g7, e8, f9, g8, f8, h5, i6, j4, k5, i4, l3, f6, m1, e9, g10, e7, h11, c10, h13, a10, h12, d10, h14, h6, g5, j5, g6, b10, h10, g4, g9, f7, h7, f5, j6, h4, l4, j3, l2";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 14)) as any);
  }
}
