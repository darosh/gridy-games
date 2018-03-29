import { Games, Info, reset, stringify, update } from '../../src';

describe('Game infos', () => {
  it('should load', () => {
    expect(Info.games.length).toBeGreaterThan(40);
  });
});

Object.keys(Games).forEach((key) => {
  describe(`Game ${key}`, () => {
    let game: any;
    let score: any;

    it('should create instance', () => {
      game = new (<any>Games)[key]();
      score = JSON.stringify(game.score);
      expect(game).toBeDefined();
    });

    it('should get possible', () => {
      const possible = game.possible();
      expect(possible.length).toBeGreaterThan(0);
    });

    it('should load sample moves', () => {
      update(game, game.constructor.sample);
      expect(game.moves.length).toBeGreaterThan(0);
    });

    it('should serialize sample moves', () => {
      const sample = stringify(game).join(', ');
      expect(sample).toBe(game.constructor.sample);
    });

    it('should reset moves', () => {
      reset(game);
      expect(game.moves.length).toBe(0);
    });

    it('should reset score', () => {
      expect(JSON.stringify(game.score)).toEqual(score);
    });
  });
});
