import { Rectangular8Tile, RectangularGrid, RectangularTile, Shape } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class TacTickle4Game extends TacTickleGameBase {
  public static title = "Tac-tickle 4×4";
  public static type = "Connect";
  public static aliases = "Tic-tackle";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 4, 4, Rectangular8Tile) as any, 3, RectangularTile.directions);
  }
}
