import * as games from './games';
import { table } from './utils';

// tslint:disable:no-unnecessary-class function-name

export class Info {
  private static wipValue: boolean = false;
  private static gamesValue?: ReadonlyArray<any>;

  public static set wip(value: boolean) {
    if (value !== this.wipValue) {
      this.wipValue = value;
      Info.gamesValue = undefined;
    }
  }

  public static get games(): ReadonlyArray<any> {
    if (!Info.gamesValue) {
      Info.gamesValue = Object.freeze(table(<any>games, this.wipValue));
    }

    return Info.gamesValue;
  }

  public static game(id: string) {
    return Info.games.find((g) => g.id === id);
  }

  public static similar(id: string, exclude: string) {
    return Info.games.filter((g) => g.originalId === id && g.id !== exclude);
  }
}
