import { TicTacToeGame } from '../../src/games';
import { RandomPlayer } from '../../src/players/RandomPlayer';
import { playout } from '../../src/utils';

describe('RandomPlayer Tests', () => {
  it('One RandomPlayer should finish game', () => {
    const player = new RandomPlayer();
    const game = new TicTacToeGame();
    playout(game, [player]);
    expect(game.moves.length).toBeGreaterThan(4);
  });

  it('Two RandomPlayers should finish game', () => {
    const player1 = new RandomPlayer();
    const player2 = new RandomPlayer();
    const game = new TicTacToeGame();
    playout(game, [player1, player2]);
    expect(game.moves.length).toBeGreaterThan(4);
  });

  it('Two RandomPlayers should finish 10 games', () => {
    for (let i = 0; i < 10; i++) {
      const player1 = new RandomPlayer();
      const player2 = new RandomPlayer();
      const game = new TicTacToeGame();
      playout(game, [player1, player2]);
      expect(game.moves.length).toBeGreaterThan(4);
    }
  });
});
