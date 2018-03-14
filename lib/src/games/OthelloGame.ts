import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class OthelloGame extends ReversiGameBase {
  public static title = "Othello";
  public static type = "Reversi";
  public static created = 1971;
  public static authors = [" Goro Hasegawa"];
  public static wiki = "https://en.wikipedia.org/wiki/Reversi";
  public static location = "Japan";
  public static original = "ReversiGame";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 8, 8, Rectangular8Tile) as any, true);
  }
}
