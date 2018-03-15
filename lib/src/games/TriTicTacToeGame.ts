import { Shape, TriangularGrid } from "gridy";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class TriTicTacToeGame extends ConnectGameBase {
  public static title = "Tri Tic Tac Toe";
  public static type = "Connect";
  public static original = "TicTacToeGame";
  public static wip = true;

  constructor() {
    super(new TriangularGrid(1, false, Shape.Triangular, 3, 3) as any, 3);
  }
}
