import { AnyTile, IGrid, ITile, link, Search, toArray, toMap } from "gridy";
import { IGame } from "../../IGame";
import { Move } from "../../Move";
import { other, parsePosition, parseRecord, stringifyPosition } from "../../utils";
import { connections, evaluateLines, evaluateLinked, winning } from "../evaluate/connect";

export class ConnectGameBase implements IGame {
  public grid: IGrid<AnyTile>;
  public min: number;
  public moves: Move[] = [];
  public player = 1;
  public winner: number = 0;

  public tilesMap: Map<string, AnyTile>;
  public finished: boolean = false;
  public playerTiles: { [i: number]: AnyTile[] } = {};
  public freeTilesMap: Map<string, AnyTile>;

  constructor(grid: IGrid<AnyTile>, min: number) {
    this.grid = grid;
    this.min = min;
    this.tilesMap = toMap(this.grid.tiles);
    this.freeTilesMap = toMap(this.grid.tiles);
    link(this.tilesMap);
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

  public init(record: string) {
    const moves = parseRecord(record);

    for (const move of moves) {
      this.move(this.tilesMap.get((this.grid.tile(move[0], move[1]) as AnyTile).key));
    }
  }

  public possible(): any[] {
    if (this.finished) {
      return [];
    }

    // const arr = toArray(this.freeTilesMap) as any;

    // for (const t of arr) {
    //   t.sort = 0;
    //   for (const n of t.links.values()) {
    //     t.sort += n.data ? 1 : 0;
    //   }
    // }

    // arr.sort((a: any, b: any) => (a.sort - b.sort));

    // return arr;

    return toArray(this.freeTilesMap);
  }

  public undo(): void {
      const move = this.moves.pop();
      move.data = null;

      this.freeTilesMap.set(move.key, move);
      this.player = other(this.player);
      this.finished = false;
      this.winner = 0;

      this.playerTiles[this.player].pop();
  }

  public move(m: Move): void {
    m.data = this.player;
    (this.playerTiles[this.player] || (this.playerTiles[this.player] = [])).push(m);
    this.player = (this.player % 2) + 1;
    this.moves.push(m);
    this.freeTilesMap.delete(m.key);

    this.winner = this.getWinner();

    if ((this.moves.length === this.grid.tiles.length) || this.winner) {
      this.finished = true;
    }
  }

  public evaluate(): number {
    const a = evaluateLinked(this.playerTiles[this.player] || [], this.min, this.player);
    const b = evaluateLinked(this.playerTiles[other(this.player)] || [], this.min, other(this.player));

    return a - b * this.min;
  }

  public getWinner(): number {
    const w = connections(this.moves[this.moves.length - 1], other(this.player), this.min);

    if (w) {
      return other(this.player);
    }

    return this.moves.length === this.grid.tiles.length ? -1 : 0;
  }

  public winning(): AnyTile[] | undefined {
    const m = this.moves[this.moves.length - 1];
    return winning(m, m.data, this.min);
  }
}
