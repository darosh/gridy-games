import { Shape, TriangularGrid } from 'gridy';
import { Theme } from '../Theme';
import { ConnectGameBase } from './base/ConnectGameBase';

export class TicTacToeTriGame extends ConnectGameBase {
  public static title = 'Tic Tac Toe Tri';
  public static theme = Theme.Hex;
  public static group = 'Connect';
  public static original = 'TicTacToeGame';
  public static sample = 'a2, b2, b1, a1, c1';

  public landscape = true;

  constructor() {
    super(<any>new TriangularGrid(1, false, Shape.Triangular, 3, 3), 3);
  }
}
