import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { Move } from "../Move";
import { CheckersGameBase } from "./base/CheckersGameBase";

export class CzechCheckersGame extends CheckersGameBase {
  public static title = "Czech Checkers";
  public static type = "Checkers";

  constructor() {
    super(new RectangularGrid(1, undefined, Shape.Even, 8, 8, Rectangular8Tile) as any, 3);

    for (const t of this.grid.tiles as any) {
      t.even = (t.x % 2) === (t.y % 2);
      t.odd = !t.even;
    }
  }
}
