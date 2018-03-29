import { Info } from '../../src';

describe('Game infos', () => {
  it('should load', () => {
    expect(Info.games.length).toBeGreaterThan(40);
  });
});
