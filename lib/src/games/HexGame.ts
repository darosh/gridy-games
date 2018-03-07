import { HexagonalGrid, Shape } from "gridy";
import { IGame } from "../IGame";
import { landscapeHex } from "../utils";
import { HexGameBase } from "./base/HexGameBase";

export class HexGame extends HexGameBase {
  public static title = "Hex";
  public static type = "Hex";
  public static created = 1942;
  public static authors = ["Piet Hein", "John Nash"];
  public static aliases = ["Con-tac-tix"];
  public static wiki = "https://en.wikipedia.org/wiki/Hex_(board_game)";

  constructor() {
    super(landscapeHex(new HexagonalGrid(1, undefined, Shape.Rhombus, 11)) as any);
  }
}
