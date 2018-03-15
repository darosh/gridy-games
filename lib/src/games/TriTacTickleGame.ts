import { Shape, TriangularGrid, TriangularTile } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class TriTacTickleGame extends TacTickleGameBase {
  public static title = "Tri Tac-tickle";
  public static type = "Move to Connect";
  public static original = "TacTickleGame";
  public static wip = true;

  constructor() {
    super(new TriangularGrid(1, true, Shape.Rhombus, 4, 4) as any, 3, TriangularTile.directions1,
    [[2, 0, 1], [2, 3, 1]]);
  }
}
