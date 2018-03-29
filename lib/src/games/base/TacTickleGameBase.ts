import { AnyTile, Directions, IGrid, link, Position, toMap } from 'gridy';
import { Move } from '../..';
import { IGame } from '../../IGame';
import { Theme } from '../../Theme';
import { other, parsePositions, stringifyPositions } from '../../utils';
import { connections, winning } from '../utils/connect';
import { movesToString, stringsToMove } from '../utils/serialization';

export class TacTickleGameBase implements IGame {
  public static theme = Theme.TacTickle;
  public static move: boolean = true;

  public moves: any[] = [];
  public player: number = 1;
  public score?: { [player: number]: number };
  public winner: number = 0;

  public playerTiles: { [i: number]: AnyTile[] } = { 1: [], 2: [] };

  public grid: IGrid<AnyTile>;

  public moveToString = movesToString.bind(this);
  public stringToMove = stringsToMove.bind(this);

  private tileMap: Map<string, AnyTile>;
  private min: number;
  private directions: number[];
  private finished: boolean = false;

  constructor(grid: IGrid<AnyTile>, min: number = 3, directions: Directions<any>, lines?: any) {
    this.grid = grid;
    this.tileMap = toMap(grid.tiles);
    link(this.tileMap);
    this.min = min;
    this.init(lines);
    this.directions = directions.map(([d]) => d);
  }

  public possible(): any[] {
    // throw new Error("Method not implemented.");
    if (this.finished) {
      return [];
    }

    return this.grid.tiles.reduce((r: any[], t: any) => {
      if (t.data !== this.player) {
        return r;
      }

      for (const [dir, nei] of t.links) {
        if (!nei.data && (this.directions.indexOf(dir) > -1)) {
          r.push([t, nei]);
        }
      }

      return r;
    },                            []);
  }
  public move(m: any): void {
    m[1].data = m[0].data;
    m[0].data = null;
    this.player = other(this.player);
    this.moves.push(m);
    const w = connections(m[1], m[1].data, this.min);

    if (w) {
      this.finished = true;
      this.winner = m[1].data;
    } else if (this.moves.length === (this.grid.tiles.length * 2)) {
      this.finished = true;
      this.winner = -1;
    }
  }
  public undo(): void {
    const move = this.moves.pop();
    move[0].data = move[1].data;
    move[1].data = null;

    this.player = other(this.player);
    this.finished = false;
    this.winner = 0;
  }
  public evaluate(): number {
    throw new Error('Method not implemented.');
  }

  public winning(): AnyTile[] | undefined {
    const m = this.moves[this.moves.length - 1];

    return winning(m[1], m[1].data, this.min);
  }

  private init(lines = [[0, 0, 1], [0, this.grid.y - 1, 0]]) {
    for (const [xx, y, skip] of lines) {
      for (let x: number = xx; x < xx + 4; x++) {
        const t = (<any>this.tileMap.get((<any>this.grid).tile(x, y).key));
        const p = (x + skip) % 2 + 1;
        if (!t) { continue; }
        t.data = p;
        // this.playerTiles[p].push(t);
      }
    }
  }
}
