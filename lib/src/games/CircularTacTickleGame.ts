import { Radial8Tile, RadialGrid, RadialTile, Shape } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class CircularTacTickleGame extends TacTickleGameBase {
  public static title = "Circular Tac-tickle";
  public static type = "Connect";
  public static original = "TacTickleGame";

  constructor() {
    super(new RadialGrid(1, false, Shape.Even, 4, 5, Radial8Tile, 1) as any, 3, RadialTile.directions,
    [[0, 1, 1], [0, 4, 0]]);
  }
}
