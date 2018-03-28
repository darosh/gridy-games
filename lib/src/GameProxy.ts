import { IGame } from './IGame';

export class GameProxy implements IGame {
  public game: IGame;

  constructor(game: IGame) {
    this.game = game;
  }

  get moves() {
    return this.game.moves;
  }

  public possible(): any[] {
    return this.game.possible();
  }

  public undo(): void {
    return this.game.undo();
  }

  public move(m: any): void {
    return this.game.move(m);
  }

  public evaluate(): number {
    return this.game.evaluate();
  }

  public get player() {
    return this.game.player;
  }

  public get winner(): number {
    return this.game.winner;
  }
}
