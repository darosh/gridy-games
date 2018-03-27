import { AnyTile, IGrid, link, Position, toMap } from "gridy";
import { IGame } from "../../IGame";
import { Move } from "../../Move";
import { moveToString, stringToMove } from "../../SerializableGame";
import { Theme } from "../../Theme";
import { other, parsePosition, stringifyPosition } from "../../utils";

export interface IState {
  [index: string]: number;
}

export class ReversiGameBase implements IGame {
  public static theme = Theme.Reversi;

  public grid: IGrid<AnyTile>;
  public player = 1;
  public moves: Move[] = [];
  public score: { [index: number]: number } = { 1: 0, 2: 0 };
  public winner: number = 0;

  public moveToString = moveToString.bind(this);
  public stringToMove = stringToMove.bind(this);

  protected finished: boolean = false;
  protected tileMap: Map<string, AnyTile>;
  protected empty: Map<string, AnyTile>;
  protected history: IState[] = [];
  protected center: any[];
  protected knownPossible?: any[];
  protected anti: boolean;

  constructor(grid: IGrid<AnyTile>, center: boolean = false, anti: boolean = false) {
    this.anti = anti;
    this.grid = grid;
    this.tileMap = toMap(grid.tiles);
    const x1 = Math.floor(grid.x / 2 - .5);
    const x2 = Math.ceil(grid.x / 2 - .5);
    const y1 = Math.floor(grid.y / 2 - .5);
    const y2 = Math.ceil(grid.y / 2 - .5);

    this.center = [
      this.tileMap.get((grid as any).tile(x1, y1).key),
      this.tileMap.get((grid as any).tile(x1, y2).key),
      this.tileMap.get((grid as any).tile(x2, y2).key),
      this.tileMap.get((grid as any).tile(x2, y1).key),
    ];

    this.empty = toMap(this.grid.tiles);
    link(this.tileMap);

    if (center) {
      this.center.forEach((t) => this.move(t, true));
    }

    this.updatePossible();
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
        const d = (this.tileMap.get(k) as any);
        this.score[d.data]--;
        d.data = h[k];
        this.score[d.data]++;
      }
    }

    this.updatePossible();
  }

  public move(m: any, fake = false): void {
    if (!m) {
      this.movePass(m);
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

    const state: IState = this.getState(m);

    this.history.push(state);
    this.updatePossible();
    this.winner = this.getWinner();
  }

  public evaluate(): number {
    return - this.score[this.player] + this.score[other(this.player)];
  }

  public getWinner(): number {
    return !this.finished
      ? 0
      : this.score[1] === this.score[2]
        ? -1
        : this.score[1] > this.score[2]
          ? this.anti ? 2 : 1
          : this.anti ? 1 : 2;
  }

  private movePass(m: any) {
    this.player = (this.player % 2) + 1;
    this.moves.push(m);
    this.history.push({});
    this.updatePossible();
    this.winner = this.getWinner();
  }

  private getState(m: any) {
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

    return state;
  }
}
