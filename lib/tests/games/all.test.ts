import { Games, Info, update } from '../../src';

describe('Game infos', () => {
  it('should load', () => {
    expect(Info.games.length).toBeGreaterThan(40);
  });
});

Object.keys(Games).forEach((key) => {
  describe(`Game ${key}`, () => {
    let game: any;

    it('should create instance', () => {
      game = new (<any>Games)[key]();
      expect(game).toBeDefined();
    });

    it('should load sample moves', () => {
      update(game, game.constructor.sample);
      expect(game.moves.length).toBeGreaterThan(0);
    });
  });
});
