// Based on https://github.com/OMerkel/UCThello

import { IGame } from '../IGame';

export class UctNode {
  public action: any;
  public parentNode?: UctNode;
  public children: UctNode[];
  public wins: number;
  public visits: number;
  public unexamined: UctNode[];
  public activePlayer: number;
  public depth: number;

  constructor(game: IGame, parentNode?: UctNode, action?: any) {
    this.depth = game.moves.length;
    this.action = action;
    this.parentNode = parentNode;
    this.children = [];
    this.wins = 0;
    this.visits = 0;
    this.unexamined = game.possible();
    this.activePlayer = game.player % 2 + 1;
  }

  public addChild(game: IGame, index: number) {
    const node = new UctNode(game, this, this.unexamined[index]);
    this.unexamined.splice(index, 1);
    this.children.push(node);

    return node;
  }

  public selectChild() {
    let selected = null;
    let bestValue = Number.NEGATIVE_INFINITY;

    for (const child of this.children) {
      const uctValue = child.wins / child.visits + Math.sqrt(2 * Math.log(this.visits) / child.visits);

      if (uctValue > bestValue) {
        selected = child;
        bestValue = uctValue;
      }
    }

    return selected;
  }

  public update(result: number) {
    this.visits++;
    this.wins += this.activePlayer === result ? 1 : result === -1 ? 0 : -1;
  }

  public mostVisitedChild() {
    this.children.sort((a, b) => b.visits - a.visits);

    return this.children[0];
  }
}

// tslint:disable-next-line:max-classes-per-file
export class UctPlayer {
  public maxIterations: number;
  public maxTime: number;
  public blockSize: number;

  constructor(maxTime: number = 400, maxIterations: number = 8192, blockSize: number = 8) {
    this.blockSize = blockSize;
    this.maxTime = maxTime;
    this.maxIterations = maxIterations;
  }

  public select(game: IGame) {
    const root = new UctNode(game);
    const startTime = Date.now();
    const timeLimit = startTime + this.maxTime;

    let nodesVisited = 0;

    if (root.unexamined.length === 1) {
      return {
        duration: Date.now() - startTime,
        move: root.unexamined[0],
        nodesVisited
      };
    }

    nodesVisited = this.iterate(game, root, timeLimit);

    return {
      duration: Date.now() - startTime,
      move: root.mostVisitedChild().action,
      nodesVisited
    };
  }

  protected iterate(game: IGame, root: UctNode, timeLimit: number): number {
    let nodesVisited = 0;

    for (let iterations = 0;
      iterations < this.maxIterations && Date.now() < timeLimit;
      iterations += this.blockSize) {
      for (let i = 0; i < this.blockSize; ++i) {
        let node = root;
        const original = game.moves.length;

        // Selection
        while (node.unexamined.length === 0 && node.children.length > 0) {
          node = node.selectChild() as any;
          game.move(node.action);
        }

        // Expansion
        if (node.unexamined.length > 0) {
          const j = Math.floor(Math.random() * node.unexamined.length);
          game.move(node.unexamined[j]);
          node = node.addChild(game, j);
        }

        // Simulation
        let actions = game.possible();

        while (actions.length > 0) {
          game.move(actions[Math.floor(Math.random() * actions.length)]);
          ++nodesVisited;
          actions = game.possible();
        }

        // Backpropagation
        const result = game.winner;

        while (node) {
          node.update(result);
          node = <any>node.parentNode;
        }

        while (game.moves.length > original) {
          game.undo();
        }
      }
    }

    return nodesVisited;
  }
}
