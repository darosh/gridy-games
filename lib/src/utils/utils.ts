import { HexagonalGrid, normalize, Position, rotate } from "gridy";
import { IGame, IPLayer, Move } from "../index";

export const PASS = "pass";

export function shuffle(a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function last(a: any[]) {
  return a[a.length - 1];
}

export function isEmpty(a: any[]) {
  return !a || !a.length;
}

export function playout(game: IGame, players: IPLayer[]) {
  while (game.possible().length && !game.winner) {
    game.move(players[game.moves.length % players.length].select(game));
  }
}

export function parseRecord(record: string): Move[] {
  const tokens: Move[] = [];

  const records = record.replace(/[^0-9a-z]+/, "").replace(/([0-9])([a-z])/g, "$1,$2").split(",");

  for (const r of records) {
    tokens.push(parsePosition(r));
  }

  return tokens;
}

export function parsePosition(r: string) {
  if (r === PASS) {
    return null;
  } else {
    const t: any[] = r.replace(/([a-z])([0-9])/g, "$1,$2").split(",");
    t[0] = parseInt(t[0], 36) - 10;
    t[1] = parseInt(t[1], 10) - 1;
    return t;
  }
}

export function parsePositions(r: string) {
  if (r === PASS) {
    return null;
  } else {
    const t: any[] = r.split("-");
    return t.map(parsePosition);
  }
}

export function stringifyPosition(position: Position) {
  return String.fromCharCode(position.x + 97) + (position.y + 1);
}

export function stringifyPositions(positions: Position[]) {
  return positions.map(stringifyPosition).join("-");
}

export function stringify(game?: IGame) {
  return !game ? [] : game.moves.map((m) => (game as any).moveToString(m));
}

export function other(player: number) {
  return (player % 2) + 1;
}

export function landscapeHex(grid: HexagonalGrid) {
  rotate(grid, -1);
  grid.toPoint = HexagonalGrid.cubeToTwoAxisYZ;
  grid.toTile = HexagonalGrid.twoAxisToCubeYZ;
  normalize(grid);
  return grid;
}

export function reset(game: IGame) {
  while (game.moves.length) {
    game.undo();
  }
}

export function update(game: IGame, record: string) {
  if (!record) {
    return;
  }

  // .replace(/([0-9])([a-z])/g, "$1,$2")
  const records = record.replace(/[^0-9a-z-,]+/g, "").split(",");

  while (records.length > game.moves.length) {
    game.move((game as any).stringToMove(records[game.moves.length]));
  }
}

export function undoFor(game: IGame, player: number) {
  if ((game.player === player) && game.moves.length) {
    game.undo();
  }

  while ((game.player !== player) && game.moves.length) {
    game.undo();
  }
}
