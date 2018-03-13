import { Radial8Tile, RadialGrid, Shape } from "gridy";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class CircularTicTacToeGame extends ConnectGameBase {
  public static title = "Circular Tic Tac Toe";
  public static type = "Connect";
  public static original = "TicTacToeGame";

  constructor() {
    const grid = new RadialGrid(1, true, Shape.Even, 3, 4, Radial8Tile, 1);
    super(grid as any, 3);
  }
}
