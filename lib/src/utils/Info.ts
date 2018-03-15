import * as games from "../games";
import { table } from "./table";

export class Info {
  public static get games() {
    if (!Info.gamesValue) {
      Info.gamesValue = Object.freeze(table(games as any));
    }

    return Info.gamesValue;
  }

  public static game(id: string) {
    return Info.games.find((g) => g.id === id);
  }

  public static similar(id: string, exclude: string) {
    return Info.games.filter((g) => g.originalId === id && g.id !== exclude);
  }

  private static gamesValue: ReadonlyArray<any>;
}
