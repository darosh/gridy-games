import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { MorrisGameBase } from "./base/MorrisGameBase";

export class TwelveMensMorrisGame extends MorrisGameBase {
  public static title = "Twelve Men's Morris";
  public static group = "Mills";

  constructor() {
    super(3, false, true);
  }
}
