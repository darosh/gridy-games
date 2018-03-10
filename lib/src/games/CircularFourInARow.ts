import { Radial8Tile, RadialGrid, Shape } from "gridy";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class CircularFourInARowGame extends ConnectGameBase {
  public static title = "Circular Four-in-a-row";
  public static type = "Connect";

  constructor() {
    const grid = new RadialGrid(1, false, Shape.Even, 8, 12, Radial8Tile);
    grid.tiles.splice(0, 12 * 2);
    super(grid as any, 4);
  }
}
