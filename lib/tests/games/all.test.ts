import * as Games from '../../src/games';
import { Info } from '../../src/Info';
import { initActions, reset, stringify, update } from '../../src/utils';

describe('Game infos', () => {
  it('should load', () => {
    expect(Info.games.length).toBeGreaterThan(40);
  });
});

Object.keys(Games).forEach((key) => {
  describe(`Game ${key}`, () => {
    let game: any;
    let score: any;
    let possible: any;

    it('should create instance', () => {
      game = new (<any>Games)[key]();
      score = JSON.stringify(game.score);
      expect(game).toBeDefined();
    });

    it('should have no winner ', () => {
      expect(game.winner).toBe(0);
    });

    it('should get possible', () => {
      possible = game.possible();
      expect(possible.length).toBeGreaterThan(0);
    });

    it('should init actions', () => {
      initActions(game, possible);
    });

    it('should load sample moves', () => {
      update(game, game.constructor.sample);
      expect(game.moves.length).toBeGreaterThan(0);
    });

    it('should have winner ', () => {
      expect(game.winner < 0 || game.winner > 0).toEqual(true);
    });

    it('should serialize sample moves', () => {
      const sample = stringify(game).join(', ');
      expect(sample).toBe(game.constructor.sample);
    });

    it('should evaluate', () => {
      if (game.evaluate) {
        try {
          game.evaluate();
        } catch (ignore) {
          // ignored
        }
      }
    });

    it('should reset moves', () => {
      reset(game);
      expect(game.moves.length).toBe(0);
    });

    it('should reset score', () => {
      expect(JSON.stringify(game.score)).toEqual(score);
    });

    it('should reset winner', () => {
      expect(game.winner).toBe(0);
    });
  });
});
