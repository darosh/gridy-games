import {IGame} from '../../../IGame';
import {IGridGame} from '../../../IGridGame';
import {other} from '../../../utils';

export function isDiagonalCenter(a: any, b: any) {
  return isDiagonal(a, b) && (isCenter(a) || isCenter(b));
}

function isDiagonal(a: any, b: any) {
  return (a.x !== b.x && a.y !== b.y);
}

function isCenter(a: any) {
  return ((a.x % 2) && !(a.y % 2));
}

export function quirkatSetup(tiles: any[]) {
  let i = 0;
  const mid = (tiles.length - 1) / 2;

  for (const t of <any>tiles) {
    if (i < mid) {
      t.data = 1;
    } else if (i > mid) {
      t.data = 2;
    }

    i++;
  }
}

export function jumpsPossible(this: IGridGame & IGame) {
  const o = other(this.player);

  return this.grid.tiles.reduce((r: any[], t: any) => {
    if ((t).data !== this.player) {
      return r;
    }

    const leaves: any[] = (<any>this).multiJumps({tile: t}, o);

    return r.concat(leaves);
  }, []);
}

export function multiJumps(
  this: IGridGame & IGame, parent: any, o: number, leaves: any[] = [], depth: number = 0, removed: any[] = []): any[] {
  const t = parent.tile;
  parent.jumps = [];

  for (const [n, m] of t.links) {
    if (((m).data === o) && (removed.indexOf(m) === -1)) {
      const d = (m).links.get(n);

      if (d && !d.data) {
        const r: any = {tile: d, removed: m, depth, parent};
        parent.jumps.push(r);
        (<any>this).multiJumps(r, o, leaves, depth + 1, removed.concat([m]));
      }
    }
  }

  if (!parent.jumps.length && depth) {
    leaves.push(parent);
  }

  return leaves;
}

export function leavesToMoves(this: any, r: any[]) {
  return r.map(this.leaveToMove);
}

export function leaveToMove(this: any, nodeInput: any) {
  const result = [];
  let node = nodeInput;

  while (node) {
    if (node.parent) {
      result.unshift([node.tile, node.removed]);
    } else {
      result.unshift(node.tile);
    }

    node = node.parent;
  }

  return result;
}

export function expandJumps(this: any, leaves: any[]) {
  return leaves.reduce((r, t) => {
    let node = t;

    while (node.parent) {
      r.push(node);
      node = node.parent;
    }

    return r;
  }, []);
}
