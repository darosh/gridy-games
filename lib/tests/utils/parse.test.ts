import { parseRecord } from '../../src/utils';

describe('Function parseRecord()', () => {
  it('parses not delimited', () => {
    expect(parseRecord('a1b1c2')).toEqual([[0, 0], [1, 0], [2, 1]]);
  });

  it('parses delimited', () => {
    expect(parseRecord('a1,b1, c2')).toEqual([[0, 0], [1, 0], [2, 1]]);
  });

  it('parses mixed', () => {
    expect(parseRecord('a1b1, c2')).toEqual([[0, 0], [1, 0], [2, 1]]);
  });
});
