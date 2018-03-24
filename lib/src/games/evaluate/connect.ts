import { AnyTile, Directions, TileMap, toMap } from "gridy";

function mapped(available: TileMap, selection: Directions<AnyTile>) {
  return selection.filter((t) => available.has(t[1].key))
    .map((t) => [t[0], available.get(t[1].key)]) as Directions<AnyTile>;
}

export function evaluateLines(t1: AnyTile[], free: Map<string, AnyTile>, min: number): number {
  let c: number = 0;
  const a1 = toMap(t1);

  for (const t of t1) {
    const m = new Map(mapped(a1, t.neighbors()));
    const s = Array.from(m.keys()).filter((k) => (k > 0) && !m.has(t.opposite ? t.opposite(k) : -k));

    if (!s.length) {
      const mp = mapped(free, t.neighbors());
      c = Math.max(c, mp.length / 8);
      continue;
    }

    for (const k of s) {
      const l = [];
      let i: AnyTile | undefined = t;

      while (i) {
        l.push(i);
        i = new Map(mapped(a1, i.neighbors())).get(k);
      }

      const v = l.length;

      if (v === min) {
        return Infinity;
      }

      let f = 0;

      i = new Map(mapped(free, l[0].neighbors())).get(-k);

      if (i) {
        f++;
      }

      i = new Map(mapped(free, l[l.length - 1].neighbors())).get(k);

      if (i) {
        f++;
      }

      if (!f) {
        continue;
      }

      c = Math.max(c, Math.pow(min, v) - Math.pow(min, v - 1) * (2 - f));
    }
  }

  return c;
}

export function evaluateLinked(tiles: AnyTile[], min: number, player: number): number {
  let c: number = 0;

  for (const t of tiles as any) {
    // const v = (t as any).data;

    const s = [];

    for (const u of t.links) {
      if (u[0] > 0) {
        const to: any = u[1];

        const from: any = t.links.get(t.opposite ? t.opposite(u[0]) : -u[0]);

        if ((!from || from.data !== player) && (to.data === player)) {
          s.push(u[0]);
        }
      }
    }
    // const s = Array.from(t.links.keys())
    //   .filter((k: any) => {
    //     if (k < 0) {
    //       return;
    //     }

    //     const to: any = t.links.get(k);
    //     const from: any = t.links.get(t.opposite ? t.opposite(k) : -k);

    //     return to && (to.data === player) && (!from || from.data !== player);
    //   });

    if (!s.length) {
      let mp = 0;
      for (const d of t.links.values()) {
        if (!d.data) {
          mp++;
        }
      }

      // c = Math.max(c, mp / 8);
      c += mp / 8;
      continue;
    }

    for (const k of s) {
      const l = [];
      let i: any | undefined = t;

      while (i) {
        l.push(i);
        i = (i as any).links.get(k);

        if (!i || ((i as any).data !== player)) {
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
        continue;
      }

      c += Math.pow(min, l.length + 1 + (l.length >= min ? 1 : 0)) - Math.pow(min, l.length) * (2 - f);
      // c = Math.max(Math.pow(min, l.length + 1 + (l.length >= min ? 1 : 0)) - Math.pow(min, l.length) * (2 - f));
    }
  }

  return c;
}

export function connections(move: any, player: number, min: number) {
  const done: { [direction: number]: boolean } = {};

  for (const [n, m] of move.links as any) {
    // const opposite = move.opposite ? move.opposite(n) : -n;
    const opposite = -n;

    if (!done[opposite]) {
      done[opposite] = true;

      let o: any = m;
      let v = 1;

      while (o && (o.data === player)) {
        v++;
        o = o.links.get(n);
        o = (o !== move) ? o : false;
      }

      o = (move as any).links.get(opposite);

      while (o && (o.data === player)) {
        v++;
        o = o.links.get(opposite);
        o = (o !== move) ? o : false;
      }

      if (v >= min) {
        return true;
      }
    }
  }
}

export function winning(move: any, player: number, min: number): AnyTile[] | undefined {
  const done: { [direction: number]: boolean } = {};

  for (const n of move.links as any) {
    if (!done[-n[0]]) {
      const result = [move];
      done[-n[0]] = true;

      let o: any = n[1];
      let v = 1;

      while (o && (o.data === player)) {
        result.push(o);
        v++;
        o = o.links.get(n[0]);
        o = (o !== move) ? o : false;
      }

      o = (move as any).links.get(-n[0]);

      while (o && (o.data === player)) {
        result.unshift(o);
        v++;
        o = o.links.get(-n[0]);
        o = (o !== move) ? o : false;
      }

      if (v >= min) {
        return result;
      }
    }
  }
}
