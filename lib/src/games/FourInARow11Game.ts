import { HexagonalGrid, normalize, Rectangular8Tile, RectangularGrid, Shape } from 'gridy';
import { MinimaxPlayer } from '../players/MinimaxPlayer';
import { ConnectGameBase } from './base/ConnectGameBase';

export class FourInARow11Game extends ConnectGameBase {
  public static title = 'Four-in-a-row';
  public static group = 'Connect';
  public static rules = ['Connect four pieces'];
  public static wiki = 'https://en.wikipedia.org/wiki/M,n,k-game';
  public static sample = 'f6, f5, e6, g6, d6, c6, e7, e5, c5, b4, f8';

  constructor() {
    super(<any>new RectangularGrid(1, undefined, Shape.Even, 11, 11, Rectangular8Tile), 4);
  }

  public static player = () => new MinimaxPlayer(2);
}
