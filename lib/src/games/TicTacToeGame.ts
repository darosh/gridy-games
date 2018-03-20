import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class TicTacToeGame extends ConnectGameBase {
  public static title = "Tic Tac Toe";
  public static type = "Connect";
  public static aliases = ["Noughts and Crosses", "Xs and Os", "Exy-ozys"];
  public static created = -1300;
  public static location = "Egypt";
  public static wiki = "https://en.wikipedia.org/wiki/Tic-tac-toe";
  public static rules: string[] = ["Connect 3"];
  public static sample: string = "b2, b3, a3, c1, c3, a2, a1";

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, 3, 3, Rectangular8Tile) as any, 3);
  }
}
