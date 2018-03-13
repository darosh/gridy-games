import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class Othelo4Game extends ReversiGameBase {
  public static title = "Othelo 4×4";
  public static type = "Reversi";
  public static original = "OtheloGame";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 4, 4, Rectangular8Tile) as any, true);
  }
}
