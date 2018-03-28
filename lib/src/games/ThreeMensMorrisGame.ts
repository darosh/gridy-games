import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { MorrisGameBase } from "./base/MorrisGameBase";

export class ThreeMensMorrisGame extends MorrisGameBase {
  public static title = "Three Men's Morris";
  public static group = "Mills";
  public static created = -1400;
  public static location = "Egypt";
  public static wiki = "https://en.wikipedia.org/wiki/Three_Men%27s_Morris";

  constructor() {
    super(1, true);
  }
}
