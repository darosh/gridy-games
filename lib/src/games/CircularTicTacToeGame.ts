import { Radial8Tile, RadialGrid, Shape } from "gridy";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class CircularTicTacToeGame extends ConnectGameBase {
  public static title = "Circular Tic Tac Toe";
  public static type = "Connect";

  constructor() {
    const grid = new RadialGrid(1, true, Shape.Even, 4, 3, Radial8Tile);
    grid.tiles.splice(0, 3 * 1);
    super(grid as any, 3);
  }
}
