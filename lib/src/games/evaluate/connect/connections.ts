import { AnyTile, Directions, TileMap, toMap } from "gridy";

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
