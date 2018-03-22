import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap,
} from "gridy";

import { IGame } from "../../IGame";
import { Theme } from "../../Theme";

function unlink(tile: any, remove = false) {
  for (const k of tile.links.keys()) {
    if (tile.links.has(-k) && !remove) {
      const source = tile.links.get(-k);
      const target = tile.links.get(k);
      target.links.set(-k, source);
      source.links.set(k, target);
    } else {
      tile.links.get(k).links.delete(-k);
    }
  }
}

export class MorrisGameBase implements IGame {
  public static theme = Theme.Mills;
  public static wip: boolean = true;

  public moves: any[] = [];
  public player: number = 1;
  public score?: { [player: number]: number; };
  public scale: number = 0.33;
  public winner: number = 0;

  private grid: IGrid<AnyTile>;
  private tileMap: Map<string, AnyTile>;

  constructor(squares: number = 3, center: boolean = false, diagonals: boolean = false) {
    const base = squares * 2 + 1;
    const mid = squares;
    const valid = [0, mid, base - 1];
    this.grid = new RectangularGrid(1, undefined, Shape.Even, base, base, diagonals
      ? Rectangular8Tile : RectangularTile) as any;

    this.tileMap = toMap(this.grid.tiles);
    link(this.tileMap);

    this.grid.tiles = (this.grid.tiles as any).filter((t: any) => {
      let v;
      let r;
      const x = Math.abs(t.x - mid);
      const y = Math.abs(t.y - mid);

      if (x === 0 && y === 0) {
        v = center;
        r = !center;
      } else {
        v = (x === y) || (center ? (((x === 0) || (y === 0))) : ((x === 0) ? !(y === 0) : (y === 0)));
      }

      if (!v) {
        unlink(t, r);
      } else if (x !== y) {
        for (const k of t.links.keys()) {
          if (Math.abs(k) > 2) {
            t.links.get(k).links.delete(-k);
            t.links.delete(k);
          }
        }
      }

      return v;
    });
  }

  public links() {
    const m = new Map();

    for (const t of this.grid.tiles) {
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
