import { Move } from "./Move";

export interface IGame {
  moves: Move[];
  player: number;
  winner: number;
  score?: {[player: number]: number};
  wip?: boolean;

  possible(): Move[];
  move(m: Move): void;
  undo(): void;
  evaluate(): number;
}
