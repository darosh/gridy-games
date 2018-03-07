import { TicTacToeGame } from "../../src/games";

describe("TicTacToeGame", () => {
  it("Player 1 should win", () => {
    const game = new TicTacToeGame();
    game.init("a1a2b1b2c1");
    expect(game.winner()).toBe(1);
  });

  it("Player 2 should win", () => {
    const game = new TicTacToeGame();
    game.init("a1a2b1b2c3c2");
    expect(game.winner()).toBe(2);
  });

  it("should draw", () => {
    const game = new TicTacToeGame();
    game.init("a2a1b1a3b2b3c1c2c3");
    expect(game.winner()).toBe(-1);
  });
});
