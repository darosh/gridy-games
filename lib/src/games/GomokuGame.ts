import { Rectangular8Tile, RectangularGrid, Shape } from 'gridy';
import { MinimaxPlayer } from '../players/MinimaxPlayer';
import { ConnectGameBase } from './base/ConnectGameBase';

export class GomokuGame extends ConnectGameBase {
  public static title = 'Gomoku';
  public static group = 'Connect';
  public static wiki = 'https://en.wikipedia.org/wiki/Gomoku';
  public static location = 'Japan';
  public static created = 990;
  public static rules = ['Connect five pieces'];
  // tslint:disable-next-line:max-line-length
  public static sample = 'h8, h7, i8, g8, g9, i7, g7, i9, h9, f9, h10, h11, f8, i11, e7, d6, f6, e5, g5, h4, g10, j7, f11, e12, e9, h6, e10, d10, e8, e11, e6';

  constructor() {
    super(<any>new RectangularGrid(1, false, Shape.Even, 15, 15, Rectangular8Tile), 5);
  }

  public static player = () => new MinimaxPlayer(2);
}
