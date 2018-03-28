import { Rectangular8Tile, RectangularGrid, Shape } from 'gridy';
import { MinimaxPlayer } from '../players/MinimaxPlayer';
import { ConnectGameBase } from './base/ConnectGameBase';

export class Gomoku9Game extends ConnectGameBase {
  public static title = 'Gomoku 9x9';
  public static group = 'Connect';
  public static original = 'GomokuGame';
  // tslint:disable-next-line:max-line-length
  public static sample = 'e5, e4, d6, f4, d5, d4, c4, g4, h4, f5, e6, b3, f7, g8, h5, f6, g6, e8, h7, h6, c7, b8, c5, c6, e7, d7, b4, f8, a3';

  constructor() {
    super(<any>new RectangularGrid(1, false, Shape.Even, 9, 9, Rectangular8Tile), 5);
  }

  public static player = () => new MinimaxPlayer(2);
}
