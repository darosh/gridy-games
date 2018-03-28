import {IGame} from '../../../IGame';
import {IGridMappedGame} from '../../../IGridGame';
import {other} from '../../../utils';

export function undo(this: IGridMappedGame & IGame): void {
  const move = this.moves.pop();
  move.data = null;

  this.freeTileMap.set(move.key, move);
  this.player = other(this.player);
  this.finished = false;
  this.winner = 0;

  this.playerTiles[this.player].pop();
}
