// based on https://medium.freecodecamp.org/simple-chess-ai-step-by-step-1d55a9266977

import { IGame, IPLayer, Move } from "../";

export class AlphaBetaPlayer implements IPLayer {
  public count = 0;
  public hit = 0;
  public depth: number = 0;

  constructor(depth: number = 3) {
    this.depth = depth;
  }

  public select(game: IGame): Move {
    return {move: this.move(game, this.depth), count: this.count, hit: this.hit};
  }

  private move(game: IGame, depth: number, isMaximisingPlayer: boolean = true): Move {
    this.count = 0;
    const newGameMoves = game.possible();
    let bestMove = -Infinity;
    let bestMoveFound;

    for (const newGameMove of newGameMoves) {
      game.move(newGameMove);
      const value = this.minimax(depth - 1, game, -Infinity, Infinity, !isMaximisingPlayer);
      game.undo();

      if (value > bestMove) {
        bestMove = value;
        bestMoveFound = newGameMove;
      }
    }

    return bestMoveFound;
  }

  private minimax(depth: number, game: IGame, alpha: number, beta: number, isMaximisingPlayer: boolean) {
    this.count++;

    if (depth === 0) {
      return game.evaluate();
    }

    const newGameMoves = game.possible();

    if (isMaximisingPlayer) {
      let bestMove = -Infinity;

      for (const newGameMove of newGameMoves) {
        game.move(newGameMove);
        bestMove = Math.max(bestMove, this.minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer));
        game.undo();
        alpha = Math.max(alpha, bestMove);

        if (beta <= alpha) {
          this.hit++;
          return bestMove;
        }
      }

      return bestMove;
    } else {
      let bestMove = Infinity;

      for (const newGameMove of newGameMoves) {
        game.move(newGameMove);
        bestMove = Math.min(bestMove, this.minimax(depth - 1, game, alpha, beta, !isMaximisingPlayer));
        game.undo();
        beta = Math.min(beta, bestMove);

        if (beta <= alpha) {
          this.hit++;
          return bestMove;
        }
      }

      return bestMove;
    }
  }
}
