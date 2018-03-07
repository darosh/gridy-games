import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { MorrisGameBase } from "./base/MorrisGameBase";

export class ThreeDiagonalMensMorrisGame extends MorrisGameBase {
  public static title = "Three Diagonal Men's Morris";
  public static type = "Mills";

  constructor() {
    super(1, true, true);
  }
}
