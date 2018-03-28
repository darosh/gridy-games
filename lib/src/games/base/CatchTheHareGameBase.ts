import {
  AnyGrid, AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap
} from 'gridy';

import {IGame} from '../../IGame';
import {Move} from '../../Move';
import {other} from '../../utils';
import {QuirkatBoard} from '../base/QuirkatBoard';
import {expandJumps, jumpsPossible, leavesToMoves, leaveToMove, multiJumps} from '../utils/quirkat';
import {jumpsToString, stringsToJump} from '../utils/serialization';

export class CatchTheHareGameBase extends QuirkatBoard implements IGame {
  public static title = 'Catch the Hare';
  public static group = 'Qirkat';
  public static wiki = 'https://en.wikipedia.org/wiki/Catch_the_Hare';
  public static location = 'Europe';
  public static created = 1283;

  public moveToString = jumpsToString.bind(this);
  public stringToMove = stringsToJump.bind(this);
  public jumpsPossible = jumpsPossible.bind(this);
  public multiJumps = multiJumps.bind(this);
  public leavesToMoves = leavesToMoves.bind(this);
  public leaveToMove = leaveToMove.bind(this);
  public expandJumps = expandJumps.bind(this);

  private finished = false;
  private maxMoves: number;

  constructor(grid: AnyGrid, maxMoves: number) {
    super(grid);
    this.maxMoves = maxMoves;
  }

  public move(m: any): void {
    const first = m[0];
    let last = m[m.length - 1];
    last = Array.isArray(last) ? last[0] : last;

    for (let i = 1; i < m.length; i++) {
      if (Array.isArray(m[i])) {
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

  public possible(): Move[] {
    if (this.player === 1) {
      return this.possibleHunters(1);
    } else {
      return this.possibleHunters(2).concat(this.possibleHare());
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
        n[1].data = o;
      }
    }

    first.data = last.data;
    last.data = null;

    this.player = other(this.player);
  }

  public evaluate(): number {
    throw new Error('Method not implemented.');
  }

  private possibleHunters(value: number) {
    return this.grid.tiles
      .filter((t: any) => t.data === value)
      .reduce((r: any[], t: any) => {
        for (const [n, m] of t.links) {
          if (!m.data) {
            r.push([t, m]);
          }
        }

        return r;
      }, []);
  }

  private possibleHare() {
    let result = this.jumpsPossible();
    result = this.expandJumps(result);
    result = this.leavesToMoves(result);

    return result;
  }

  private getWinner() {
    if (this.possible().length === 0) {
      return other(this.player);
    }

    if(this.moves.length === this.maxMoves) {
      return -1;
    }

    return 0;
  }
}
