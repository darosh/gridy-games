import { HexagonalGrid, normalize, Shape } from "gridy";
import { MinimaxPlayer } from "../players/MinimaxPlayer";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class HexGomokuGame extends ConnectGameBase {
  public static title = "Hex Gomoku";
  public static type = "Connect";
  public static player = () => new MinimaxPlayer(2);

  constructor() {
    const grid = new HexagonalGrid(1, true, Shape.Even, 15);
    super(grid as any, 5);
  }
}
