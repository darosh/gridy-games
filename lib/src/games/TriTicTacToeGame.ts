import { Shape, TriangularGrid } from "gridy";
import { Theme } from "../Theme";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class TriTicTacToeGame extends ConnectGameBase {
  public static title = "Tri Tic Tac Toe";
  public static theme = Theme.Hex;
  public static type = "Connect";
  public static original = "TicTacToeGame";

  public landscape = true;

  constructor() {
    super(new TriangularGrid(1, false, Shape.Triangular, 3, 3) as any, 3);
  }
}
