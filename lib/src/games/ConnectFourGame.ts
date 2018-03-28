import { Rectangular8Tile, RectangularGrid, Shape } from 'gridy';
import { Move } from '../Move';
import { Theme } from '../Theme';
import { ConnectGameBase } from './base/ConnectGameBase';

export class ConnectFourGame extends ConnectGameBase {
  public static title = 'Connect Four';
  public static theme = Theme.Plastic;
  public static group = 'Connect';
  public static authors = ['Howard Wexler', 'Ned Strongin'];
  public static created = 1974;
  public static wiki = 'https://en.wikipedia.org/wiki/Connect_Four';
  public static alias = ['Captain\'s Mistress',
  'Four Up', 'Plot Four', 'Find Four', 'Four in a Row', 'Four in a Line', 'Gravitrips'];
  public static rules: string[] = ['Connect four pieces'];
  public static sample = 'c1, d1, c2, e1, b1, f1, g1, d2, d3, c3, e2, e3, e4';

  public landscape = true;

  constructor() {
    super(<any>new RectangularGrid(1, false, Shape.Even, 7, 6, Rectangular8Tile), 4);
  }

  public possible() {
    if (this.finished) {
      return [];
    }

    const moves: Move[] = [];

    for (let x = 0; x < this.grid.x; x++) {
      for (let y = 0; y < this.grid.y; y++) {
        const m = <Move>this.tileMap.get([x, y].toString());

        if (!m.data) {
          moves.push(m);
          break;
        }
      }
    }

    return moves;
  }
}
