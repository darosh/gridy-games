import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { MorrisGameBase } from "./base/MorrisGameBase";

export class SixMensMorrisGame extends MorrisGameBase {
  public static title = "Six Men's Morris";
  public static group = "Mills";
  public static created = -1400;
  public static location = "Egypt";
  public static wiki = "https://en.wikipedia.org/wiki/Six_Men%27s_Morris";

  constructor() {
    super(2);
  }
}
