import { HexagonalGrid, normalize, Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { MinimaxPlayer } from "../players/MinimaxPlayer";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class FourInARow11Game extends ConnectGameBase {
  public static title = "Four-in-a-row";
  public static type = "Connect";
  public static rules = ["Connect 4"];
  public static wiki = "https://en.wikipedia.org/wiki/M,n,k-game";
  public static player = () => new MinimaxPlayer(2);

  constructor() {
    const grid = new RectangularGrid(1, undefined, Shape.Even, 11, 11, Rectangular8Tile);
    super(grid as any, 4);
  }
}
