import { ConnectFourGame } from "../../src/games";
import { AlphaBetaPlayer, RandomPlayer } from "../../src/players";
import { playout } from "../../src/utils";

describe("ConnectFourGame", () => {
  it("should finish", () => {
    const game = new ConnectFourGame();
    const player = new RandomPlayer();
    playout(game, [player]);
    expect(game.moves.length).toBeGreaterThan(5);
    expect(game.winner() === 0).toBeFalsy();
  });
  it("should win", () => {
    const game = new ConnectFourGame();
    const player = new AlphaBetaPlayer();
    playout(game, [player]);
    expect(game.winner()).toBe(1);
  });
});
