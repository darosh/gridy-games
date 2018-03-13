import { Radial8Tile, RadialGrid, Shape } from "gridy";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class CircularFourInARowGame extends ConnectGameBase {
  public static title = "Circular Four-in-a-row";
  public static type = "Connect";
  public static rules: string[] = ["Connect 4"];
  public static original = "TicTacToeGame";

  constructor() {
    const grid = new RadialGrid(1, false, Shape.Even, 12, 8, Radial8Tile, 2);
    super(grid as any, 4);
  }
}
