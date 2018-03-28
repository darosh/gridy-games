import { IGame, IPLayer, Move } from '../';

export class RandomPlayer implements IPLayer {
  public select(game: IGame): Move {
    const possible = game.possible();

    return {move: possible[Math.floor(Math.random() * possible.length)]};
  }
}
