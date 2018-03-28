import { Radial8Tile, RadialGrid, Shape } from 'gridy';
import { Theme } from '../Theme';
import { ConnectGameBase } from './base/ConnectGameBase';

export class TicTacToeRoundGame extends ConnectGameBase {
  public static title = 'Tic Tac Toe Round';
  public static theme = Theme.Hex;
  public static group = 'Connect';
  public static original = 'TicTacToeGame';
  public static sample = 'c3, a4, b3, a3, a2, b4, c4';

  constructor() {
    const grid = new RadialGrid(1, true, Shape.Even, 3, 4, Radial8Tile, 1);
    super(<any>grid, 3);
  }
}
