// Based on https://github.com/OMerkel/UCThello

import { IGame } from '../IGame';
import { UctNode, UctPlayer } from './UctPlayer';

// tslint:disable-next-line:max-classes-per-file
export class UctCachedPlayer extends UctPlayer {
  private cachedRoot?: UctNode;

  constructor(maxTime: number = 400, maxIterations: number = 8192, blockSize: number = 8) {
    super(maxTime, maxIterations, blockSize);
  }

  public select(game: IGame) {
    const root = this.getRoot(game) || new UctNode(game);
    const startTime = Date.now();
    const timeLimit = startTime + this.maxTime;

    const nodesVisited = this.iterate(game, root, timeLimit);

    this.cachedRoot = root.mostVisitedChild();

    return {
      duration: Date.now() - startTime,
      move: this.cachedRoot.action,
      nodesVisited
    };
  }

  private getRoot(game: IGame) {
    if (!this.cachedRoot || this.cachedRoot.depth >= game.moves.length) {
      return;
    }

    for (let i = this.cachedRoot.depth; i < game.moves.length; i++) {
      this.cachedRoot = this.cachedRoot.children.find((c) => c.action === game.moves[i]) as any;

      if (!this.cachedRoot) {
        return;
      }
    }

    return this.cachedRoot;
  }
}
