import { Shape, TriangularGrid, TriangularTile } from 'gridy';
import { TacTickleGameBase } from './base/TacTickleGameBase';

export class TacTickleTriGame extends TacTickleGameBase {
  public static title = 'Tac-tickle Tri';
  public static type = 'Move to Connect';
  public static original = 'TacTickleGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'f1-e2, c4-d3, f4-g4, e4-f3, g4-h3, d3-e3, d4-c4, e1-f1, c4-d3, f3-g3, d3-c3, f1-g1, d1-c2, g3-h2, c2-d2';

  constructor() {
    super(new TriangularGrid(1, true, Shape.Rhombus, 4, 4) as any, 3, TriangularTile.directions1,
          [[2, 0, 1], [2, 3, 1]]);
  }
}
