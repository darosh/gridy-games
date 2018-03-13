import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { Move } from "../Move";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class ConnectFourGame extends ConnectGameBase {
  public static title = "Connect Four";
  public static type = "Connect";
  public static authors = ["Howard Wexler", "Ned Strongin"];
  public static created = 1974;
  public static wiki = "https://en.wikipedia.org/wiki/Connect_Four";
  public static alias = ["Captain's Mistress",
  "Four Up", "Plot Four", "Find Four", "Four in a Row", "Four in a Line", "Gravitrips"];
  public static rules: string[] = ["Connect 4"];

  public landscape = true;

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, 7, 6, Rectangular8Tile) as any, 4);
  }

  public possible() {
    if (this.finished) {
      return [];
    }

    const moves: Move[] = [];

    for (let x = 0; x < this.grid.x; x++) {
      for (let y = 0; y < this.grid.y; y++) {
        const m = this.tilesMap.get([x, y].toString()) as Move;

        if (!m.data) {
          moves.push(m);
          break;
        }
      }
    }

    return moves;
  }
}
