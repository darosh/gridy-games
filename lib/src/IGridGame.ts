import { AnyTile, IGrid } from 'gridy';

export type TileData = number | string | null | undefined;

export interface IGameTile extends AnyTile {
  data: TileData;
  updated: TileData;
  highlighted: boolean;
  selected: boolean;
  actions?: IAction[];
}

/**
 * AnyTile single placement
 * [AnyTile, AnyTile] simple move
 * [AnyTile, AnyTile, AnyTile] double move
 * [AnyTile, [AnyTile, [removed]] move + removed
 * [[AnyTile, undefined, modified] move + modified
 */

export enum Phase {
  PLACE = 0,
  REMOVED = 1,
  MODIFIED = 2
}

export type Step = (IGameTile | ICompoundStep);
export type Move = Step | Step[];

export interface ICompoundStep extends Array<IGameTile | IGameTile[] | undefined> {
  [Phase.PLACE]: IGameTile;
  [Phase.REMOVED]?: IGameTile | IGameTile[];
  [Phase.MODIFIED]?: IGameTile | IGameTile[];
}

export interface IAction {
  cursor: number;
  move: Move;
}

export interface IGameState {
  highlighted?: IGameTile[];
  selected?: IGameTile[];
  updated?: IGameTile[];
}

export interface IGridGame {
  grid: IGrid<IGameTile>;
  scale?: number;
  landscape?: boolean;
  hull?: boolean;
  actions?: IGameState[];
  winning?(): IGameTile[];
  rulers?(): IGameTile[];
  links?(): IGameTile[];
  moveToString?(move: any): string;
}

export interface IGridMappedGame extends IGridGame {
  tileMap: Map<string, IGameTile>;
  freeTileMap: Map<string, IGameTile>;
  playerTiles: { [i: number]: IGameTile[] };
  finished: boolean;
}

export interface IGridGameConstructor {
  title: string;
  group: string;

  authors?: string[];
  aliases?: string[];
  original?: string;
  rules?: string[];
  created?: number;
  location?: string;
  wiki?: string;
  source?: string;
  landscape?: boolean;
  wip?: boolean;

  new(): IGridGame;
}
