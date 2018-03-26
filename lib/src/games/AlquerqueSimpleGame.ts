import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap,
} from "gridy";

import { AlquerqueGameBase } from "./base/AlquerqueGameBase";

// TODO Zamma https://en.wikipedia.org/wiki/Zamma

const SIZE = 3;

export class AlquerqueSimpleGame extends AlquerqueGameBase {
  public static title = "Alquerque Simple";
  public static type = "Misc";
  public static created = 950;
  public static aliases = ["Qirkat"];
  public static location = "Middle East";
  public static wiki = "https://en.wikipedia.org/wiki/Alquerque";

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, SIZE, SIZE, Rectangular8Tile) as any);
  }
}
