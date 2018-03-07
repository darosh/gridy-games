import {
  AnyTile, IGrid, link, Position, Rectangular8Tile,
  RectangularGrid, RectangularTile, Shape, toMap,
} from "gridy";
import { IGame } from "../IGame";
import { CatchTheHareGameBase } from "./base/CatchTheHareGameBase";

// TODO Zamma https://en.wikipedia.org/wiki/Zamma

export class AlquerqueGame extends CatchTheHareGameBase {
  public static title = "Alquerque";
  public static type = "Misc";
  public static created = 950;
  public static aliases = ["Qirkat"];
  public static location = "Middle East";
  public static wiki = "https://en.wikipedia.org/wiki/Alquerque";

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, 5, 5, Rectangular8Tile) as any);
  }

  public possible(): any {
    this.grid.tiles.filter((t) => {
      if ((t as any).data === this.player) {
        return;
      }

      // for (const n of t.links) {

      // }
    });

    return [];
  }
}
