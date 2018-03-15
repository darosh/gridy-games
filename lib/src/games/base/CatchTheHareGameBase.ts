import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap,
} from "gridy";

import { IGame } from "../../IGame";

export class CatchTheHareGameBase implements IGame {
  public static wip: boolean = true;

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
      for (const l of (t as any).links) {
        const keys = [t.key, l[1].key];
        keys.sort();

        if ((t.x % 2 && t.y % 2) || (l[1].x === t.x) || (l[1].y === t.y)) {
          // m.set(keys.toString(), [t, l[1]]);
        } else {
          t.links.delete(l[0]);
          // l[1].links.delete(-l[0]);
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
