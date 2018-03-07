import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { ReversiGameBase } from "./base/ReversiGameBase";

export class OtheloGame extends ReversiGameBase {
  public static title = "Othelo";
  public static type = "Reversi";
  public static created = 1971;
  public static authors = [" Goro Hasegawa"];
  public static wiki = "https://en.wikipedia.org/wiki/Reversi";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 8, 8, Rectangular8Tile) as any, true);
  }
}
