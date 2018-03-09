import { ICompoundStep, IGameTile, IGridGame, Move } from "../IGridGame";

function getMovePlace(move: Move, cursor: number = 0): IGameTile | undefined {
  if (Array.isArray(move)) {
    if (Array.isArray(move[cursor])) {
      return move[cursor] as any[0];
    } else {
      return move[cursor] as any;
    }
  } else if (!cursor) {
    return move;
  }
}

export function initHighlight(game: IGridGame) {
  for (const tile of game.grid.tiles) {
    tile.highlighted = false;
  }
}

export function initActions(game: IGridGame, moves: Move[], cursor: number = 0) {
  const highlighted = [];

  for (const move of moves) {
    const tile = getMovePlace(move, cursor) as IGameTile;
    tile.actions = tile.actions || [];
    tile.actions.push({ move, cursor: cursor + 1 });

    if (!tile.highlighted) {
      tile.highlighted = true;
      highlighted.push(tile);
    }
  }

  game.actions = !cursor ? [] : game.actions;
  (game.actions as any).push({ highlighted });
}

export function selectAction(game: IGridGame, tile: IGameTile) {
  if (tile.actions) {
    if (tile.actions.length === 1) {
      const action = tile.actions[0];
      const place = getMovePlace(action.move, action.cursor);

      if (!place) {
        return action.move;
      }

      undoAction(game);
      initActions(game, [action.move], action.cursor);
    } else {
      const moves = tile.actions.map((a) => a.move);
      const action = tile.actions[0];
      undoAction(game);
      initActions(game, moves, action.cursor);
    }
  } else {
    return false;
  }
}

export function undoAction(game: IGridGame) {
  let h;

  // tslint:disable-next-line:no-conditional-assignment
  while (h = game.actions && game.actions.pop()) {
    if (h.highlighted) {
      for (const i of h.highlighted) {
        i.highlighted = false;
        i.actions = undefined;
      }
    }
  }
}
