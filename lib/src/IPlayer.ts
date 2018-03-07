import { IGame } from "./IGame";
import { Move } from "./Move";

export interface IPLayer {
  select(game: IGame): Move;
}
