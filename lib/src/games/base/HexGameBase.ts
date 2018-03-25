import { AnyTile, Float3, IGrid, link, Position, toArray, toMap } from "gridy";
import { IGame } from "../../IGame";
import { Move } from "../../Move";
import { moveToString, stringToMove, undo } from "../../SerializableGame";
import { Theme } from "../../Theme";
import { other, parsePosition, stringifyPosition } from "../../utils";

export class HexGameBase implements IGame {
  public static theme = Theme.Hex;

  public moves: any[] = [];
  public player: number = 1;
  public score?: { [player: number]: number; };
  public winner: number = 0;
  public playerTiles: { [i: number]: AnyTile[] } = { 1: [], 2: [] };

  public moveToString = moveToString.bind(this);
  public stringToMove = stringToMove.bind(this);
  public undo = undo.bind(this);

  private grid: IGrid<AnyTile>;
  private tileMap: Map<string, AnyTile>;
  private freeTileMap: Map<string, AnyTile>;
  private finished: boolean = false;

  constructor(grid: IGrid<AnyTile>, lines: number = 3, skip: number = 2) {
    this.grid = grid;
    this.tileMap = toMap(grid.tiles);
    this.freeTileMap = toMap(grid.tiles);
    link(this.tileMap);
    this.markLine(this.grid.tile(0, 0), this.grid.tile(0, this.grid.y - 1), 1, "begin");
    this.markLine(this.grid.tile(this.grid.x - 1, 0), this.grid.tile(this.grid.x - 1, this.grid.y - 1), 1, "end");
    this.markLine(this.grid.tile(0, 0), this.grid.tile(this.grid.x - 1, 0), 2, "begin");
    this.markLine(this.grid.tile(0, this.grid.y - 1), this.grid.tile(this.grid.x - 1, this.grid.y - 1), 2, "end");
  }

  public possible(): any[] {
    // throw new Error("Method not implemented.");
    if (this.finished) {
      return [];
    }

    return toArray(this.freeTileMap);
  }

  public links(): any[] {
    return [
      [this.grid.tile(-1, 1), this.grid.tile(- 1, this.grid.y - 1), 1],
      [this.grid.tile(this.grid.x, 0), this.grid.tile(this.grid.x, this.grid.y - 2), 1],
      [this.grid.tile(1, -1), this.grid.tile(this.grid.x - 1, -1), 2],
      [this.grid.tile(0, this.grid.y), this.grid.tile(this.grid.x - 2, this.grid.y), 2],
    ];
  }

  public move(m: any): void {
    m.data = this.player;
    this.playerTiles[this.player].push(m);
    this.player = other(this.player);
    this.moves.push(m);
    this.freeTileMap.delete(m.key);

    this.winner = this.getWinner();

    if ((this.moves.length === this.grid.tiles.length) || this.winner) {
      this.finished = true;
    }
  }

  public evaluate(): number {
    throw new Error("Method not implemented.");
  }

  public winning(): AnyTile[] | undefined {
    const tile: any = this.moves[this.moves.length - 1];
    const m = new Map([[tile.key, true]]);
    const a: any[] = [{ tile, previous: null }];
    const v = tile.data;
    let i = 0;
    let begin;
    let end;

    while (i < a.length) {
      const t = a[i].tile;

      if (t["begin" + v]) {
        begin = begin || a[i];

        // if (!end) {
        //   continue;
        // }
      } else if (t["end" + v]) {
        end = end || a[i];

        // if (!begin) {
        //   continue;
        // }
      }

      if (begin && end) {
        const result = [];

        let item = begin;

        while (item) {
          result.push(item.tile);
          item = item.previous;
        }

        item = end;
        const line = [];

        while (item) {
          line.unshift(item.tile);
          item = item.previous;
        }

        line.shift();

        return result.concat(line);
      }

      for (const [, n] of t.links) {
        if (n.data === v) {
          if (!m.has(n.key)) {
            a.push({ tile: n, previous: a[i] });
            m.set(n.key, true);
          }
        }
      }
      i++;
    }
  }

  private getWinner(): number {
    if (!this.moves.length) {
      return 0;
    }

    const last = this.moves[this.moves.length - 1];
    const w = this.flood(last);

    if (w) {
      return last.data;
    }

    if (this.moves.length === this.grid.tiles.length) {
      return -1;
    }

    return 0;
  }
  private markLine(from: any, to: any, value: any, key: string) {
    Float3.line(from, to).forEach((t: any) => {
      (this.tileMap.get(t.toString()) as any)[key + value] = true;
    });
  }

  private flood(tile: any) {
    const m = new Map([[tile.key, true]]);
    const a = [tile];
    const v = tile.data;
    let i = 0;
    let begin = false;
    let end = false;

    while (i < a.length) {
      const t = a[i];

      if (t["begin" + v]) {
        begin = true;

        // if (!end) {
        //   continue;
        // }
      } else if (t["end" + v]) {
        end = true;

        // if (!begin) {
        //   continue;
        // }
      }

      if (begin && end) {
        return true;
      }

      for (const [, n] of t.links) {
        if (n.data === v) {
          if (!m.has(n.key)) {
            a.push(n);
            m.set(n.key, true);
          }
        }
      }
      i++;
    }

    return false;
  }
}
