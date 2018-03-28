// based on https://medium.freecodecamp.org/simple-chess-ai-step-by-step-1d55a9266977

import { IGame, IPLayer, Move } from '../';

export class MinimaxPlayer implements IPLayer {
  public count = 0;
  public depth: number = 0;

  constructor(depth: number = 3) {
    this.depth = depth;
  }

  public select(game: IGame): Move {
    return { move: this.move(game, this.depth), count: this.count };
  }

  private move(game: IGame, depth: number, isMaximisingPlayer: boolean = true): Move {
    this.count = 0;
    const newGameMoves = game.possible();
    let bestMove = -Infinity;
    let bestMoveFound;

    for (const newGameMove of newGameMoves) {
      game.move(newGameMove);
      const value = this.minimax(depth - 1, game, !isMaximisingPlayer);
      game.undo();

      if (value > bestMove) {
        bestMove = value;
        bestMoveFound = newGameMove;
      }
    }

    return bestMoveFound;
  }

  private minimax(depth: number, game: IGame, isMaximisingPlayer: boolean) {
    this.count++;

    if (depth === 0) {
      return game.evaluate();
    }

    const newGameMoves = game.possible();

    if (isMaximisingPlayer) {
      let bestMove = -Infinity;

      for (const newGameMove of newGameMoves) {
        game.move(newGameMove);
        bestMove = Math.max(bestMove, this.minimax(depth - 1, game, !isMaximisingPlayer));
        game.undo();
      }

      return bestMove;
    } else {
      let bestMove = Infinity;

      for (const newGameMove of newGameMoves) {
        game.move(newGameMove);
        bestMove = Math.min(bestMove, this.minimax(depth - 1, game, !isMaximisingPlayer));
        game.undo();
      }

      return bestMove;
    }
  }
}
