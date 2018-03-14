import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class Reversi6Game extends ReversiGameBase {
  public static title = "Reversi 6x6";
  public static type = "Reversi";
  public static original = "ReversiGame";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 6, 6, Rectangular8Tile) as any);
  }
}
