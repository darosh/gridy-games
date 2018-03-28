import { AnyTile, Directions, TileMap, toMap } from 'gridy';

export function winning(move: any, player: number, min: number): AnyTile[] | undefined {
  const done: { [direction: number]: boolean } = {};

  for (const n of move.links) {
    if (done[-n[0]]) {
      continue;
    }

    const result = [move];
    done[-n[0]] = true;

    const v = getWinning(n, player, result, move);

    if (v >= min) {
      return result;
    }
  }
}

function getWinning(n: any, player: number, result: any[], move: any) {
  let o: any = n[1];
  let v = 1;
  while (o && (o.data === player)) {
    result.push(o);
    v++;
    o = o.links.get(n[0]);
    o = (o !== move) ? o : false;
  }
  o = (move).links.get(-n[0]);
  while (o && (o.data === player)) {
    result.unshift(o);
    v++;
    o = o.links.get(-n[0]);
    o = (o !== move) ? o : false;
  }

  return v;
}
