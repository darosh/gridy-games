import { AnyTile, IGrid, Position, toMap } from "gridy";
import { IGame } from "../../IGame";

export class CheckersGameBase implements IGame {
  public static wip: boolean = true;

  public moves: any[] = [];
  public player: number = 1;
  public score?: { [player: number]: number; };
  public winner: number = 0;

  public grid: IGrid<AnyTile>;
  private tileMap: Map<string, AnyTile>;

  constructor(grid: IGrid<AnyTile>, lines: number = 3, skip: number = 2) {
    this.grid = grid;
    this.tileMap = toMap(grid.tiles);
    this.init(lines, skip);
  }

  public possible(): any[] {
    // throw new Error("Method not implemented.");
    return [];
  }
  public move(m: any): void {
    throw new Error("Method not implemented.");
  }
  public undo(): void {
    throw new Error("Method not implemented.");
  }
  public evaluate(): number {
    throw new Error("Method not implemented.");
  }

  private init(lines: number, skip: number) {
    for (const n of [[0, lines, "1"], [this.grid.y - lines, this.grid.y, "2"] as any]) {
      for (let line: number = n[0]; line < n[1]; line++) {
        for (let x: number = skip === 1 ? 0 : line % 2; x < this.grid.x; x += skip) {
          (this.tileMap.get((this.grid as any).tile(x, line).key) as any).data = n[2];
        }
      }
    }
  }
}
