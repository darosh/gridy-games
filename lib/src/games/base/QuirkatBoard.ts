import {
  AnyTile, IGrid, link, Position, Rectangular8Tile, RectangularGrid, RectangularTile, Shape, toMap
} from 'gridy';

import { Theme } from '../../Theme';
import {isDiagonalCenter} from '../utils/quirkat';

export class QuirkatBoard {
  public static theme = Theme.Qirkat;
  public static move: boolean = true;

  public moves: any[] = [];
  public player: number = 1;
  public score?: { [player: number]: number };
  public scale: number = 1;
  public winner: number = 0;

  public grid: IGrid<AnyTile>;
  private tileMap: Map<string, AnyTile>;

  constructor(grid: IGrid<AnyTile>) {
    this.grid = grid;
    this.tileMap = toMap(this.grid.tiles);
    link(this.tileMap);

    for (const t of <any>this.grid.tiles) {
      for (const [n, m] of (t).links) {
        if (isDiagonalCenter(m, t)) {
          t.links.delete(n);
          m.links.delete(-n);
        }
      }
    }
  }

  public rulers() {
    const m = new Map();

    for (const t of <any>this.grid.tiles) {
      for (const l of (t).links) {
        const keys = [t.key, l[1].key];
        keys.sort();
        m.set(keys.toString(), [t, l[1]]);
      }
    }

    return Array.from(m.values());
  }
}
