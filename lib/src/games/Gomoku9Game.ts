import { Rectangular8Tile, RectangularGrid, Shape } from "gridy";
import { MinimaxPlayer } from "../players/MinimaxPlayer";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class Gomoku9Game extends ConnectGameBase {
  public static title = "Gomoku 9x9";
  public static type = "Connect";
  public static player = () => new MinimaxPlayer(2);

  constructor() {
    super(new RectangularGrid(1, false, Shape.Even, 9, 9, Rectangular8Tile) as any, 5);
  }
}
