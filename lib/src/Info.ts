import * as games from "./games";
import { table } from "./utils";

export class Info {
  public static set wip(value: boolean) {
    if (value !== this.wipValue) {
      this.wipValue = value;
      Info.gamesValue = undefined;
    }
  }

  public static get games(): ReadonlyArray<any> {
    if (!Info.gamesValue) {
      Info.gamesValue = Object.freeze(table(games as any, this.wipValue));
    }

    return Info.gamesValue as ReadonlyArray<any>;
  }

  public static game(id: string) {
    return Info.games.find((g) => g.id === id);
  }

  public static similar(id: string, exclude: string) {
    return Info.games.filter((g) => g.originalId === id && g.id !== exclude);
  }

  private static wipValue: boolean = false;
  private static gamesValue?: ReadonlyArray<any>;
}
