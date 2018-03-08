import { Radial8Tile, RadialGrid, Shape } from "gridy";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class CircularFourInARowGame extends ConnectGameBase {
  public static title = "Circular Four\u2011in\u2011a\u2011row";
  public static type = "Connect";

  constructor() {
    const grid = new RadialGrid(1, false, Shape.Even, 8, 12, Radial8Tile);
    grid.tiles.splice(0, 12 * 2);
    super(grid as any, 4);
  }
}
