// https://nrich.maths.org/1240
// nrich.maths.org 2000
// Lutz Tautenhahn 2005 www.lutanho.net/play/tictackle.html

import { Rectangular8Tile, RectangularGrid, RectangularTile, Shape } from "gridy";
import { TicTackleGameBase } from "./base/TicTackleGameBase";

export class TacTickle4Game extends TicTackleGameBase {
  public static title = "Tac-tickle 4×4";
  public static type = "Connect";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 4, 4, Rectangular8Tile) as any, 3, RectangularTile.directions);
  }
}
