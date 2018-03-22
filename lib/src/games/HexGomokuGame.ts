import { HexagonalGrid, normalize, Shape } from "gridy";
import { MinimaxPlayer } from "../players/MinimaxPlayer";
import { ConnectGameBase } from "./base/ConnectGameBase";

export class HexGomokuGame extends ConnectGameBase {
  public static title = "Hex Gomoku";
  public static type = "Connect";
  public static original = "GomokuGame";
  public static sample = "h8, i8, h7, i7, i6, i5, g9, g10, h10, j6, h9, j7, g8, k8, i4, k9";
  public static player = () => new MinimaxPlayer(2);

  constructor() {
    const grid = new HexagonalGrid(1, true, Shape.Even, 15);
    super(grid as any, 5);
  }
}
