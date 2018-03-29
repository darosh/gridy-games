import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap
} from 'gridy';

import { IGame } from '../../IGame';
import { getMovePlace, other } from '../../utils';
import { quirkatSetup } from '../utils/quirkat';
import { jumpsToString, stringsToJump } from '../utils/serialization';
import { QuirkatBoard } from './QuirkatBoard';

export class QirkatGameBase extends QuirkatBoard {
  public moveToString = jumpsToString.bind(this);
  public stringToMove = stringsToJump.bind(this);

  public score: { [player: number]: number };
  public finished: boolean = false;

  private maxMoves: number;

  constructor(grid: IGrid<AnyTile>, maxMoves: number) {
    super(grid);
    this.maxMoves = maxMoves;

    quirkatSetup(grid.tiles);
    const stones = (grid.tiles.length - 1) / 2;
    this.score = { 1: stones, 2: stones };
  }

  public move(m: any): void {
    const first = m[0];
    let last = m[m.length - 1];
    last = Array.isArray(last) ? last[0] : last;

    for (let i = 1; i < m.length; i++) {
      if (Array.isArray(m[i])) {
        this.score[m[i][1].data]--;
        m[i][1].data = null;
      }
    }

    last.data = first.data;
    first.data = null;

    this.player = other(this.player);
    this.moves.push(m);

    this.winner = this.getWinner();

    if (this.winner) {
      this.finished = true;
    }
  }

  public undo(): void {
    const m = this.moves.pop();

    const first = m[0];
    let last = m[m.length - 1];
    last = Array.isArray(last) ? last[0] : last;

    const o = other(last.data);

    for (let i = m.length - 1; i > 0; i--) {
      const n = m[i];

      if (Array.isArray(n)) {
        this.score[o]++;
        n[1].data = o;
      }
    }

    first.data = last.data;
    last.data = null;

    this.player = other(this.player);
  }

  public getWinner() {
    if (!this.score[1]) {
      return 2;
    } else if (!this.score[2]) {
      return 1;
    } else if (this.moves.length === this.maxMoves) {
      return -1;
    } else {
      return 0;
    }
  }

  public possible(): any {
    let result: any[] = this.jumpsPossible();
    result = this.topJumps(result);
    result = this.leavesToMoves(result);

    if (!result.length) {
      result = this.simplePossible();
    }

    return result;
  }

  private leavesToMoves(r: any[]) {
    return r.map(this.leaveToMove);
  }

  private leaveToMove(nodeInput: any) {
    const result = [];
    let node = nodeInput;

    while (node) {
      if (node.parent) {
        result.unshift([node.tile, node.removed]);
      } else {
        result.unshift(node.tile);
      }

      node = node.parent;
    }

    return result;
  }

  private topJumps(r: any[]) {
    if (!r.length) {
      return r;
    }

    r.sort((a, b) => b.depth - a.depth);
    const d = r[0].depth;

    return r.filter((t) => t.depth === d);
  }

  private jumpsPossible() {
    const o = other(this.player);

    return this.grid.tiles.reduce((r: any[], t: any) => {
      if ((t).data !== this.player) {
        return r;
      }

      const leaves: any[] = this.multiJumps({ tile: t }, o);

      return r.concat(leaves);
    },                            []);
  }

  private multiJumps(parent: any, o: number, leaves: any[] = [], depth: number = 0, removed: any[] = []): any[] {
    const t = parent.tile;
    parent.jumps = [];

    for (const [n, m] of t.links) {
      if (((m).data === o) && (removed.indexOf(m) === -1)) {
        const d = (m).links.get(n);

        if (d && !d.data) {
          const r: any = { tile: d, removed: m, depth, parent };
          parent.jumps.push(r);
          this.multiJumps(r, o, leaves, depth + 1, removed.concat([m]));
        }
      }
    }

    if (!parent.jumps.length && depth) {
      leaves.push(parent);
    }

    return leaves;
  }

  private jumpPossible(t: any, p: number, o: number) {
    const result: any[] = [];

    for (const [n, m] of t.links) {
      if ((m).data === o) {
        const d = (m).links.get(n);

        if (d && !d.data) {
          result.push([t, [d, m]]);
        }
      }
    }

    return result;
  }

  private simplePossible(): any[] {
    return this.grid.tiles.reduce((r: any[], t: any) => {
      if ((t).data !== this.player) {
        return r;
      }

      for (const [n, m] of t.links) {
        if (!(m).data) {
          r.push([t, m]);
        }
      }

      return r;
    },                            []);
  }
}
