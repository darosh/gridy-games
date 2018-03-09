import { IGame } from "./IGame";
import { IGridGame } from "./IGridGame";
import { other } from "./utils";

export class TimedProxy implements IGame, IGridGame {
  public game: IGame & IGridGame;

  public limit: number = 10000;
  public countdown: number = 5;
  public countdownSignal: number = 3;
  public signalDelay: number = 100;

  public counter: number = -1;
  public counterSignal: number = -1;
  public expired: boolean = false;
  public pending: boolean = false;

  private timer: number | null = null;
  private timeoutWinner: number | null = null;

  constructor(game: IGame & IGridGame, opt = {}) {
    this.game = game;
    Object.assign(this, opt);
  }

  public dispose() {
    this.stop();
  }

  get grid() {
    return this.game.grid;
  }

  get moves() {
    return this.game.moves;
  }

  public possible(): any[] {
    return this.game.possible();
  }

  public undo(): void {
    return this.game.undo();
  }

  public move(m: any): void {
    this.game.move(m);

    if (!this.game.winner) {
      this.start();
    } else {
      this.stop();
    }
  }

  public evaluate(): number {
    return this.game.evaluate();
  }

  public get player() {
    return this.game.player;
  }

  public get winner(): number {
    return this.timeoutWinner || this.game.winner;
  }

  private start() {
    this.stop(!!this.limit);

    this.counter = -1;
    this.counterSignal = -1;
    this.expired = false;
    this.timeoutWinner = null;

    if (!this.limit) {
      return;
    }

    let counter = this.countdown;

    this.timer = setInterval(() => {
      this.stop(true);
      this.timer = setInterval(() => {
        counter--;

        if (counter <= this.countdownSignal) {
          this.counterSignal = counter;
        }

        setTimeout(() => {
          this.counter = counter;

          if (!counter) {
            this.stop();
            this.expired = true;
            this.timeoutWinner = other(this.game.player);
          }
        }, this.signalDelay);
      }, 1000);
    }, this.limit - counter * 1000 - this.signalDelay);
  }

  private stop(pending = false) {
    this.pending = pending;

    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}
