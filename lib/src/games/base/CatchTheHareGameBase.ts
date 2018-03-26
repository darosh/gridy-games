import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap,
} from "gridy";

import { IGame } from "../../IGame";
import { Theme } from "../../Theme";

export class CatchTheHareGameBase implements IGame {
  public static theme = Theme.Qirkat;
  public static move: boolean = true;

  public moves: any[] = [];
  public player: number = 1;
  public score?: { [player: number]: number; };
  public scale: number = 1;
  public winner: number = 0;

  public grid: IGrid<AnyTile>;
  private tileMap: Map<string, AnyTile>;

  constructor(grid: IGrid<AnyTile>) {
    this.grid = grid;
    this.tileMap = toMap(this.grid.tiles);
    link(this.tileMap);

    let i = 0;
    const mid = (this.grid.tiles.length - 1) / 2;

    for (const t of this.grid.tiles as any) {
      for (const [n, m] of (t as any).links) {
        if (this.isDiagonalCenter(m, t)) {
          t.links.delete(n);
          m.links.delete(-n);
        }
      }

      if (i < mid) {
        t.data = 1;
      } else if (i > mid) {
        t.data = 2;
      }

      i++;
    }
  }

  public isDiagonal(a: any, b: any) {
    return (a.x !== b.x && a.y !== b.y);
  }

  public isDiagonalCenter(a: any, b: any) {
    return this.isDiagonal(a, b) && (this.isCenter(a) || this.isCenter(b));
  }

  public isCenter(a: any) {
    return ((a.x % 2) && !(a.y % 2));
  }

  public rulers() {
    const m = new Map();

    for (const t of this.grid.tiles as any) {
      for (const l of (t as any).links) {
        const keys = [t.key, l[1].key];
        keys.sort();
        m.set(keys.toString(), [t, l[1]]);
      }
    }

    return Array.from(m.values());
  }

  public possible(): any[] {
    return [];
  }
  public move(m: any): void {
    throw new Error("Method not implemented.");
  }
  public undo(): void {
    throw new Error("Method not implemented.");
  }
  public evaluate(): number {
    throw new Error("Method not implemented.");
  }
}
