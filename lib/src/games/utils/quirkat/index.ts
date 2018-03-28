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
