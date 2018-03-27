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
  public static rules = ["Capture all pieces"];
  // tslint:disable-next-line:max-line-length
  public static sample = "b1-b2, b3-b2-b1, a2-b2, b1-b2-b3, a3-a2, c1-b2, a2-a3, b2-b1, a1-b1-c1, b3-b2, c1-b1, b2-c1, b1-a1, c1-b1, a1-b1-c1, c2-b2, c1-b1, b2-a2, a3-a2-a1, c3-b3, b1-c1, b3-c3, a1-a2, c3-b3, a2-b2, b3-b2-b1, c1-b1-a1";

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, SIZE, SIZE, Rectangular8Tile) as any);
  }
}
