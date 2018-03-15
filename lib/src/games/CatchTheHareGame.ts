import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap,
} from "gridy";

import { IGame } from "../IGame";
import { CatchTheHareGameBase } from "./base/CatchTheHareGameBase";

export class CatchTheHareGame extends CatchTheHareGameBase {
  public static title = "Catch the Hare";
  public static type = "Misc";
  public static wiki = "https://en.wikipedia.org/wiki/Catch_the_Hare";
  public static location = "Europe";
  public static created = 1283;

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, 5, 5, Rectangular8Tile) as any);
  }
}
