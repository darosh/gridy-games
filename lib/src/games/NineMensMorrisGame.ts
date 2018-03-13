import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { MorrisGameBase } from "./base/MorrisGameBase";

export class NineMensMorrisGame extends MorrisGameBase {
  public static title = "Nine Men's Morris";
  public static type = "Mills";
  public static created = -1400;
  public static location = "Egypt";
  public static wiki = "https://en.wikipedia.org/wiki/Nine_Men%27s_Morris";

  constructor() {
    super(3);
  }
}
