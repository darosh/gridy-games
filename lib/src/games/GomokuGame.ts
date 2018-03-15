import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { MinimaxPlayer } from "../players/MinimaxPlayer";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class GomokuGame extends ConnectGameBase {
  public static title = "Gomoku";
  public static type = "Connect";
  public static wiki = "https://en.wikipedia.org/wiki/Gomoku";
  public static location = "Japan";
  public static created = 990;
  public static rules = ["Connect 5"];
  public static player = () => new MinimaxPlayer(2);

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, 15, 15, Rectangular8Tile) as any, 5);
  }
}
