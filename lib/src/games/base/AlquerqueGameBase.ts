import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap,
} from "gridy";

import { IGame } from "../../IGame";
import { jumpsToString, stringsToJump } from "../../SerializableGame";
import { getMovePlace, other } from "../../utils";
import { CatchTheHareGameBase } from "./CatchTheHareGameBase";

// TODO Zamma https://en.wikipedia.org/wiki/Zamma

export class AlquerqueGameBase extends CatchTheHareGameBase {
  public moveToString = jumpsToString.bind(this);
  public stringToMove = stringsToJump.bind(this);

  public score: { [player: number]: number };
  public finished: boolean = false;

  constructor(grid: IGrid<AnyTile>) {
    super(grid);

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
    } else if (this.moves.length === (this.grid.tiles.length * 3)) {
      return -1;
    } else {
      return 0;
    }
  }

  public possible(): any {
    let result: any[] = this.jumpsPossible();

    if (!result.length) {
      result = this.simplePossible();
    }

    return result;
  }

  private jumpsPossible() {
    const o = other(this.player);

    return this.grid.tiles.reduce((r: any[], t: any) => {
      if ((t as any).data !== this.player) {
        return r;
      }

      r = r.concat(this.jumpPossible(t, this.player, o));

      return r;
    }, []);
  }

  private jumpPossible(t: any, p: number, o: number) {
    const result: any[] = [];

    for (const [n, m] of t.links) {
      if ((m as any).data === o) {
        const d = (m as any).links.get(n);

        if (d && !d.data) {
          result.push([t, [d, m]]);
        }
      }
    }

    return result;
  }

  private simplePossible(): any[] {
    return this.grid.tiles.reduce((r: any[], t: any) => {
      if ((t as any).data !== this.player) {
        return r;
      }

      for (const [n, m] of t.links) {
        if (!(m as any).data) {
          r.push([t, m]);
        }
      }

      return r;
    }, []);
  }
}
