import { Radial8Tile, RadialGrid, Shape } from "gridy";
import { Theme } from "../Theme";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class CircularTicTacToeGame extends ConnectGameBase {
  public static title = "Circular Tic Tac Toe";
  public static theme = Theme.Hex;
  public static type = "Connect";
  public static original = "TicTacToeGame";
  public static sample = "c3, a4, b3, a3, a2, b4, c4";

  constructor() {
    const grid = new RadialGrid(1, true, Shape.Even, 3, 4, Radial8Tile, 1);
    super(grid as any, 3);
  }
}
