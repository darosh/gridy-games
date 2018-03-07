import { AnyTile, IGrid, link, Position, toMap } from "gridy";
import { IGame } from "../../IGame";
import { Move } from "../../Move";
import { other, parsePosition, stringifyPosition } from "../../utils";

export interface IState {
  [index: string]: number;
}

export class ReversiGameBase implements IGame {
  public grid: IGrid<AnyTile>;
  public player = 1;
  public moves: Move[] = [];
  public score: { [index: number]: number } = { 1: 0, 2: 0 };
  public winner: number = 0;

  protected finished: boolean = false;
  protected tilesMap: Map<string, AnyTile>;
  protected empty: Map<string, AnyTile>;
  protected history: IState[] = [];
  protected center: any[];
  protected knownPossible?: any[];

  constructor(grid: IGrid<AnyTile>, center: boolean = false) {
    this.grid = grid;
    this.tilesMap = toMap(grid.tiles);
    const x1 = Math.floor(grid.x / 2 - .5);
    const x2 = Math.ceil(grid.x / 2 - .5);
    const y1 = Math.floor(grid.y / 2 - .5);
    const y2 = Math.ceil(grid.y / 2 - .5);

    this.center = [
      this.tilesMap.get((grid as any).tile(x1, y1).key),
      this.tilesMap.get((grid as any).tile(x1, y2).key),
      this.tilesMap.get((grid as any).tile(x2, y2).key),
      this.tilesMap.get((grid as any).tile(x2, y1).key),
    ];

    this.empty = toMap(this.grid.tiles);
    link(this.tilesMap);

    if (center) {
      this.center.forEach((t) => this.move(t, true));
    }

    this.updatePossible();
  }

  public moveToString(move: Move): string {
    if (!move) {
      return "pass";
    }

    const p = this.grid.toPoint(move);
    return stringifyPosition(p);
  }

  public stringToMove(move: string): Move {
    const p = parsePosition(move);

    if (!p) {
      return p;
    }

    const t = this.grid.tile.apply(this.grid, p);
    return this.tilesMap.get(t.key);
  }

  public possible(): any[] {
    return this.knownPossible as any;
  }

  public updatePossible() {
    this.knownPossible = this.possibleFor(this.player);

    if (!this.knownPossible.length) {
      if (this.possibleFor((this.player % 2) + 1).length) {
        this.move(null);
      } else {
        this.finished = true;
      }
    }
  }

  public possibleFor(pl: number): any[] {
    const r = [];

    if ((this.grid.tiles.length - this.empty.size) < 4) {
      return this.center.filter((t) => !t.data);
    }

    for (const m of this.empty.values() as any) {
      for (const d of (m as any).links.keys()) {
        let node = (m as any).links.get(d);
        let nodes = 0;

        while (node && node.data && (node.data !== pl)) {
          nodes++;
          node = node.links.get(d);
        }

        if (nodes && node && (node.data === pl)) {
          r.push(m);
          break;
        }
      }
    }

    return r;
  }

  public undo(): void {
    const m = this.moves.pop();
    this.finished = false;
    this.winner = 0;

    if (!m) {
      this.player = other(this.player);
      this.history.pop();
      this.undo();
      return;
    }

    this.score[m.data]--;
    m.data = null;
    this.empty.set(m.key, m);
    const h: IState = this.history.pop() as IState;
    this.player = (this.player % 2) + 1;

    for (const k in h) {
      if (h.hasOwnProperty(k)) {
        const d = (this.tilesMap.get(k) as any);
        this.score[d.data]--;
        d.data = h[k];
        this.score[d.data]++;
      }
    }

    this.updatePossible();
  }

  public move(m: any, fake = false): void {
    if (!m) {
      this.player = (this.player % 2) + 1;
      this.moves.push(m);
      this.history.push({});
      this.updatePossible();
      this.winner = this.getWinner();
      return;
    }

    m.data = this.player;

    this.score[this.player] = this.score[this.player] || 0;
    this.score[this.player]++;
    this.player = (this.player % 2) + 1;
    this.empty.delete(m.key);

    if (fake) {
      return;
    }

    this.moves.push(m);

    const state: IState = {};

    for (const d of m.links.keys()) {
      let node = m.links.get(d);
      const nodes = [];

      while (node && node.data && node.data !== m.data) {
        nodes.push(node);
        node = node.links.get(d);
      }

      if (node && (node.data === m.data)) {
        for (const n of nodes) {
          state[n.key] = n.data as number;
          this.score[n.data]--;
          this.score[m.data]++;
          n.data = m.data;
        }
      }
    }

    this.history.push(state);
    this.updatePossible();
    this.winner = this.getWinner();
  }

  public evaluate(): number {
    return - this.score[this.player] + this.score[other(this.player)];
  }

  public getWinner(): number {
    return !this.finished ? 0 : this.score[1] === this.score[2] ? -1 : this.score[1] > this.score[2] ? 1 : 2;
  }
}
