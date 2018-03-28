import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap,
} from "gridy";

import { IGame } from "../IGame";
import { QuirkatBoard } from "./base/QuirkatBoard";

export class CatchTheHareGame extends QuirkatBoard {
  public static title = "Catch the Hare";
  public static group = "Misc";
  public static wiki = "https://en.wikipedia.org/wiki/Catch_the_Hare";
  public static location = "Europe";
  public static created = 1283;
  public static wip: boolean = true;

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, 5, 5, Rectangular8Tile) as any);
  }
}
