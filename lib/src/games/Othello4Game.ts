import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class Othello4Game extends ReversiGameBase {
  public static title = "Othello 4x4";
  public static type = "Reversi";
  public static original = "OthelloGame";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 4, 4, Rectangular8Tile) as any, true);
  }
}
