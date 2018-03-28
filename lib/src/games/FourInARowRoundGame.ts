import { Radial8Tile, RadialGrid, Shape } from 'gridy';
import { ConnectGameBase } from './base/ConnectGameBase';

export class FourInARowRoundGame extends ConnectGameBase {
  public static title = 'Four-in-a-row Round';
  public static group = 'Connect';
  public static rules: string[] = ['Connect four pieces'];
  public static original = 'FourInARow11Game';
  public static sample = 'f5, g4, g5, h5, f3, i6, f6, f4, h4, i3, e7';

  constructor() {
    const grid = new RadialGrid(1, false, Shape.Even, 12, 8, Radial8Tile, 2);
    super(<any>grid, 4);
  }
}
