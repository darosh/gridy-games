import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap,
} from "gridy";

import { QirkatGameBase } from "./base/QirkatGameBase";

const SIZE = 5;

export class QirkatGame extends QirkatGameBase {
  public static title = "Qirkat";
  public static type = "Qirkat";
  public static created = 950;
  public static aliases = ["Alquerque"];
  public static location = "Middle East";
  public static wiki = "https://en.wikipedia.org/wiki/Alquerque";
  public static rules = ["Capture all pieces"];
  // tslint:disable-next-line:max-line-length
  public static sample = "c2-c3, c4-c3-c2, c1-c2-c3, d2-c1, c3-c4, c5-c4-c3, b4-c3-d2, e1-d2-c3, b2-c2, e2-e1, c2-c3-c4, d4-c4-b4-b3-b2, a2-b2-c2, c1-c2-c3, b5-b4, d3-d4, b4-c3-d2, d1-d2-d3, a5-b5, d5-c5, b5-c5-d5, e5-d5-c5, a3-b2, d4-e5, b2-a2, e3-e2, a1-b2, c5-d4, b2-c2, e4-e3, a4-a5, e1-d2, a2-b2, e5-e4, b2-a3, d2-c2-b2, a3-b2-c1, d3-d2, a5-a4, d4-e5, c1-b2, e2-e1, b2-c1, e3-e2, c1-d2-e3, e1-d1, e3-e2-e1-d1-c1, e4-e3, c1-b2, e3-e2, b1-a1, e2-e3, b2-a3, e5-e4, a3-b2, e3-e2, b2-c3, e4-e5, a1-a2, e2-d2, c3-d2-e1, e5-d5, a4-a5, d5-e5, a2-a3, e5-e4, a5-b5, e4-e5, b5-c5, e5-e4, c5-d4, e4-d4-c4, a3-b3, c4-b4, b3-b4-b5";

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, SIZE, SIZE, Rectangular8Tile) as any);
  }
}
