import { AnyTile, IGrid } from "gridy/dist/types";
import { IGame } from "./IGame";
import { IGameTile, IGridMappedGame, Move } from "./IGridGame";
import { other, parsePosition, parsePositions, stringifyPosition, stringifyPositions } from "./utils";

export function moveToString(this: IGridMappedGame, move: Move): string {
  if (!move) {
    return "pass";
  }

  const p = this.grid.toPoint(move as IGameTile);
  return stringifyPosition(p);
}

export function stringToMove(this: IGridMappedGame, move: string): Move | null {
  const p = parsePosition(move);

  if (!p) {
    return p;
  }

  const t = this.grid.tile.apply(this.grid, p);
  return this.tileMap.get(t.key) as Move;
}

export function movesToString(this: IGridMappedGame, move: Move[]): string {
  if (!move) {
    return "pass";
  }

  const p = (Array.isArray(move) ? move : [move]).map(this.grid.toPoint as any);
  return stringifyPositions(p as any);
}

export function stringsToMove(this: IGridMappedGame, move: string): Move | null {
  const p = parsePositions(move);

  if (!p) {
    return p;
  }

  return (p as any).map((pp: any) => {
    const t = this.grid.tile.apply(this.grid, pp);
    return this.tileMap.get(t.key);
  });
}

export function undo(this: IGridMappedGame & IGame): void {
  const move = this.moves.pop();
  move.data = null;

  this.freeTileMap.set(move.key, move);
  this.player = other(this.player);
  this.finished = false;
  this.winner = 0;

  this.playerTiles[this.player].pop();
}
