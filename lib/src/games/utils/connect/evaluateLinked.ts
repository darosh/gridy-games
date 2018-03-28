import { AnyTile, Directions, TileMap, toMap } from 'gridy';

export function evaluateLinked(tiles: AnyTile[], min: number, player: number): number {
  let c: number = 0;

  for (const t of <any>tiles) {
    const s = [];

    for (const u of t.links) {
      if (u[0] > 0) {
        const to: any = u[1];

        const fromTile: any = t.links.get(t.opposite ? t.opposite(u[0]) : -u[0]);

        if ((!fromTile || fromTile.data !== player) && (to.data === player)) {
          s.push(u[0]);
        }
      }
    }

    if (!s.length) {
      let mp = 0;
      for (const d of t.links.values()) {
        if (!d.data) {
          mp++;
        }
      }

      c += mp / 8;
      continue;
    }

    for (const k of s) {
      c += evaluate(t, k, min, player);
    }
  }

  return c;
}

function evaluate(t: AnyTile, k: number, min: number, player: number) {
  const l = [];
  let i: any | undefined = t;

  while (i) {
    l.push(i);
    i = (i).links.get(k);

    if (!i || ((i).data !== player)) {
      break;
    }
  }

  let f = 0;

  i = l[0].links.get(-k);

  if (i && !i.data) {
    f++;
  }

  i = l[l.length - 1].links.get(k);

  if (i && !i.data) {
    f++;
  }

  if (!f && (l.length < min)) {
    return 0;
  }

  return Math.pow(min, l.length + 1 + (l.length >= min ? 1 : 0)) - Math.pow(min, l.length) * (2 - f);
}
