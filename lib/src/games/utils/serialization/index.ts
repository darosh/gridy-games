import {IGameTile, IGridMappedGame, Move} from '../../../IGridGame';
import {parsePosition, parsePositions, stringifyPosition, stringifyPositions} from '../../../utils/index';

export function moveToString(this: IGridMappedGame, move: Move): string {
  if (!move) {
    return 'pass';
  }

  const p = this.grid.toPoint(<IGameTile>move);
  return stringifyPosition(p);
}

export function stringToMove(this: IGridMappedGame, move: string): Move | null {
  const p = parsePosition(move);

  if (!p) {
    return p;
  }

  const t = this.grid.tile.apply(this.grid, p);
  return this.tileMap.get(t.key) as Move;
}

export function movesToString(this: IGridMappedGame, move: Move[]): string {
  if (!move) {
    return 'pass';
  }

  const p = (Array.isArray(move) ? move : [move]).map(<any>this.grid.toPoint);
  return stringifyPositions(<any>p);
}

export function jumpsToString(this: IGridMappedGame, move: Move[]): string {
  if (!move) {
    return 'pass';
  }

  const p = (Array.isArray(move) ? move : [move]).reduce((r: any[], t) => {
    const a = (Array.isArray(t) ? t.slice() : [t]) as any[];
    a.reverse();
    a.forEach((d) => r.push(d));
    return r;
  },                                                     []).map(<any>this.grid.toPoint);
  return stringifyPositions(<any>p);
}

export function stringsToJump(this: IGridMappedGame, move: string): Move | null {
  const p = parsePositions(move);

  if (!p) {
    return p;
  }

  const m = [getTile.call(this, p.shift())] as any;

  if (p.length === 1) {
    m.push(getTile.call(this, p.shift()));
  } else {
    while (p.length) {
      const b = getTile.call(this, p.shift());
      const a = getTile.call(this, p.shift());
      m.push([a, b]);
    }
  }

  return m;
}

function getTile(this: IGridMappedGame, t: any): any {
  return this.tileMap.get(this.grid.tile.apply(this.grid, t).key);
}

export function stringsToMove(this: IGridMappedGame, move: string): Move | null {
  const p = parsePositions(move);

  if (!p) {
    return p;
  }

  return (<any>p).map((pp: any) => {
    const t = this.grid.tile.apply(this.grid, pp);
    return this.tileMap.get(t.key);
  });
}
