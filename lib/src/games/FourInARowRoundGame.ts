import { Radial8Tile, RadialGrid, Shape } from "gridy";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class FourInARowRoundGame extends ConnectGameBase {
  public static title = "Four-in-a-row Round";
  public static type = "Connect";
  public static rules: string[] = ["Connect 4"];
  public static original = "TicTacToeGame";
  public static sample = "f5, g4, g5, h5, f3, i6, f6, f4, h4, i3, e7";

  constructor() {
    const grid = new RadialGrid(1, false, Shape.Even, 12, 8, Radial8Tile, 2);
    super(grid as any, 4);
  }
}
