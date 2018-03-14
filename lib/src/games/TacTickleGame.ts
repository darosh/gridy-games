import { Rectangular8Tile, RectangularGrid, RectangularTile, Shape } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class TacTickleGame extends TacTickleGameBase {
  public static title = "Tac-tickle";
  public static type = "Move to Connect";
  public static authors = ["NRICH"];
  public static source = "https://nrich.maths.org/1240";
  public static created = "2000";
  public static rules: string[] = ["Move to connect 3"];

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 4, 5, Rectangular8Tile) as any, 3, RectangularTile.directions);
  }
}
