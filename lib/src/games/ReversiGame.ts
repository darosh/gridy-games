import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class ReversiGame extends ReversiGameBase {
  public static title = "Reversi";
  public static type = "Reversi";
  public static created = 1883;
  public static authors = ["Lewis Waterman", "John W. Mollett"];
  public static wiki = "https://en.wikipedia.org/wiki/Reversi";
  public static rules: string[] = ["Capture pieces"];
  public static location = "England";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 8, 8, Rectangular8Tile) as any);
  }
}
