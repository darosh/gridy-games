import { Radial8Tile, RadialGrid, RadialTile, Shape } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class CircularTacTickleGame extends TacTickleGameBase {
  public static title = "Circular Tac-tickle";
  public static type = "Move to Connect";
  public static original = "TacTickleGame";
  public static sample = "c5-c4, c2-c3, b2-b3, b5-b4, b3-a3, d5-d4, c4-c5, a2-b2";

  constructor() {
    super(new RadialGrid(1, false, Shape.Even, 4, 5, Radial8Tile, 1) as any, 3, RadialTile.directions,
    [[0, 1, 1], [0, 4, 0]]);
  }
}
