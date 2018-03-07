import { GameProxy } from "../../src";
import { possible } from "../../src/ai/ConnectAi";
import { GomokuGame, TicTacToeGame } from "../../src/games";
import { AlphaBetaPlayer } from "../../src/players";
import { playout } from "../../src/utils";

describe("AlphaBetaPlayer", () => {
  it("should favor the winning move in TicTacToeGame", () => {
    const game = new TicTacToeGame();
    const player = new AlphaBetaPlayer(3);
    game.init("b1c1b2c2");
    expect(player.select(game)).toEqual({ data: null, x: 1, y: 2 });
  });

  it("should block the winning move in TicTacToeGame", () => {
    const game = new TicTacToeGame();
    const player = new AlphaBetaPlayer(3);
    game.init("a1a2b2a3");
    expect(player.select(game)).toEqual({ data: null, x: 2, y: 2 });
  });

  it("should finish TicTacToeGame", () => {
    const game = new TicTacToeGame();
    const player = new AlphaBetaPlayer(5);
    playout(game, [player]);
    expect(game.moves.length).toBeGreaterThan(4);
    expect(game.possible().length).toEqual(0);
    expect(game.winner()).toEqual(1);
  });

  // it("should finish GomokuGame", () => {
  //   const game = new GameProxy(new GomokuGame());
  //   const player = new AlphaBetaPlayer(2);
  //   game.possible = possible;

  //   playout(game, [player]);

  //   expect(game.moves.length).toBeGreaterThan(8);
  //   //   expect(game.possible().length).toEqual(0)
  //   //   expect(game.winner()).toEqual(1)
  // });
});
