import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { MorrisGameBase } from "./base/MorrisGameBase";

export class SixMensMorrisGame extends MorrisGameBase {
  public static title = "Six Men's Morris";
  public static type = "Mills";

  constructor() {
    super(2);
  }
}
