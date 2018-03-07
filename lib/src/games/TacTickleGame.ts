import { Rectangular8Tile, RectangularGrid, RectangularTile, Shape } from "gridy";
import { TicTackleGameBase } from "./base/TicTackleGameBase";

export class TacTickleGame extends TicTackleGameBase {
  public static title = "Tac-tickle";
  public static type = "Connect";
  public static authors = ["NRICH"];
  public static source = "https://nrich.maths.org/1240";
  public static created = "2000";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 4, 5, Rectangular8Tile) as any, 3, RectangularTile.directions);
  }
}
