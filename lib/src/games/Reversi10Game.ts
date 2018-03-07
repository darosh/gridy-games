import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class Reversi10Game extends ReversiGameBase {
  public static title = "Reversi 10×10";
  public static type = "Reversi";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 10, 10, Rectangular8Tile) as any);
  }
}
