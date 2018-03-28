import { Rectangular8Tile, RectangularGrid, Shape } from 'gridy';
import { MinimaxPlayer } from '../players/MinimaxPlayer';
import { ConnectGameBase } from './base/ConnectGameBase';

export class Gomoku11Game extends ConnectGameBase {
  public static title = 'Gomoku 11x11';
  public static group = 'Connect';
  public static original = 'GomokuGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'f6, f5, e7, g5, f7, e5, d5, h5, i5, e6, d7, g7, d6, d8, c5, f8, c7, b7, d4, d3, c6, c4, e8, b5, c8, c9, f9, g10, d9, g6, e4, g4, f4, g3';

  constructor() {
    super(<any>new RectangularGrid(1, false, Shape.Even, 11, 11, Rectangular8Tile), 5);
  }

  public static player = () => new MinimaxPlayer(2);
}
