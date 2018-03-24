import { Shape, TriangularGrid, TriangularTile } from "gridy";
import { TacTickleGameBase } from "./base/TacTickleGameBase";

export class TacTickleTriGame extends TacTickleGameBase {
  public static title = "Tac-tickle Tri";
  public static type = "Move to Connect";
  public static original = "TacTickleGame";

  constructor() {
    super(new TriangularGrid(1, true, Shape.Rhombus, 4, 4) as any, 3, TriangularTile.directions1,
    [[2, 0, 1], [2, 3, 1]]);
  }
}
