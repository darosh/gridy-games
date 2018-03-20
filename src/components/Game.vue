<template>
  <div v-resize="onResize" :class="theme">
    <v-layout column wrap align-center align-content-center>
      <div class="mt-1-5" style="text-align: center">
        <g-board :game="game" :coords="$store.state.coords" :frame="frame" :margin="margin" :move="move" :vertical="vertical" :waiting="waiting" interactive centered/>
      </div>
    </v-layout>
    <v-layout v-if="game.moves.length && game.score" row justify-center align-center class="text-xs-center player-score" style="position: absolute; bottom: 12px; left:2px; right:0">
      <v-flex class="title text-xs-right" style="width: 60px">{{ game.score[1] }}</v-flex>
      <g-player-divider class="player-divider mx-3 d-block" />
      <v-flex class="title text-xs-left" style="width: 60px">{{ game.score[2] }}</v-flex>
    </v-layout>
    <v-speed-dial v-model="fab" style="z-index: 9" fixed right bottom direction="top" transition="slide-y-reverse-transition">
      <v-fab-transition slot="activator">
        <v-btn v-if="game.moves.length" v-model="fab" :color="$store.state.dark ? 'grey darken-4' : 'grey darken-3'" dark fab hover>
          <v-icon class="white--text">gamepad</v-icon>
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-btn v-if="game.moves.length" fab dark small color="grey darken-3" @click.stop="undo()">
        <v-icon class="white--text">undo</v-icon>
      </v-btn>
      <v-btn v-if="game.moves.length" fab dark small color="grey darken-3" @click.stop="reset()">
        <v-icon class="white--text">refresh</v-icon>
      </v-btn>
    </v-speed-dial>
    <v-snackbar v-model="snackbar" :timeout="12000" class="verdict-snack" color="grey darken-3" auto-height top>
      <v-flex @click="snackbar = false">
        <span v-if="game.winner">{{ verdict }}</span>
      </v-flex>
      <v-btn flat color="light-blue" @click.native="snackbar = false; reset()">Restart</v-btn>
    </v-snackbar>
    <v-dialog :value="rules" max-width="280px">
      <v-card>
        <v-card-title>
          <span class="title pa-2">{{game.constructor.title | titled}}</span>
        </v-card-title>
        <v-card-text class="pt-0 pb-4">
          <div class="px-2" v-for="(r, k) in rulesText" :key="k">{{ r }}</div>
        </v-card-text>
        <div class="text-xs-center">
          <g-board :game="sample" :frame="[240,164]" :margin="4" class="preview d-inline-block"></g-board>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat @click="rules = false" style="min-width: 0">Ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import {
  Games,
  TimedProxy,
  initActions,
  initHighlight,
  selectAction,
  undoAction,
  update
} from "../../plugins/lib";
import { isHuman } from "../services/players";
import { Bus } from "../services/bus";
import { PlayerWorker } from "../worker/ai";
import { theme } from "../style/theme";
import { Shared } from "../services/shared";
import { gameData } from "../services/utils";

import { latency, chordSound, kick1Sound, kick2Sound } from "../services/sound";
import { kickVibration } from "../services/vibration";
import gameResize from "../mixins/game-resize";
import gameSession from "../mixins/game-session";
import playerSwitch from "../mixins/player-switch";

const LATENCY = 2;

export default {
  components: {
    GBoard: () => import("./Board"),
    GPlayerDivider: () => import("./PlayerDivider"),
    VDialog: () => import("vuetify/es5/components/VDialog")
  },
  mixins: [gameResize, gameSession, playerSwitch],
  data() {
    return {
      game: null,
      frame: null,
      margin: 20,
      fab: false,
      working: false,
      robotPlayer: {},
      theme: null,
      snackbar: false,
      rules: false,
      showRules: true,
      rulesText: true
    };
  },
  watch: {
    "game.player": function() {
      this.robot();
    },
    "game.winner": function(value) {
      if (value) {
        this.snackbar = true;
        this.update();
      }
    },
    "$store.state.player": {
      handler: function() {
        this.initRobots();
        this.initTimer();
        this.robot();
      },
      deep: true
    },
    "$store.state.timer": function(value) {
      this.initTimer();
    },
    "$route.params.id": function(value) {
      this.initGame();
      this.initRobots();
      this.onResize();
      this.update();
    }
  },
  computed: {
    sample() {
      const game = new this.game.constructor();
      update(game, this.game.constructor.sample);

      return game;
    }
  },
  mounted() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },
  created() {
    this.initGame();
    this.initRobots();
    this.onResize();
    this.update();
    Bus.$on("game", this.update);
  },
  destroyed() {
    Bus.$off("game", this.update);
    this.destroyRobots();

    if (this.game.dispose) {
      this.game.dispose();
    }
  },
  methods: {
    initTimer() {
      this.game.limit = this.hotSeat ? this.$store.state.timer : 0;
    },
    initGame() {
      if (!this.human[1] && this.human[2]) {
        this.switchPlayer();
      }

      const g = this.$route.params.id + "Game";
      const game = new Games[g]();
      initHighlight(game);
      const timed = new TimedProxy(game);
      this.game = Shared.game = timed;
      this.theme = theme(Games[g]);
      this.initTimer();

      if (this.showRules) {
        this.showRules = false;

        setTimeout(() => {
          this.rulesText = gameData(game.constructor, "rules");
          this.rules = !!this.rulesText;
        }, 200);
      }
    },
    initRobot(robot) {
      return isHuman(robot)
        ? false
        : new PlayerWorker(robot, this.$route.params.id);
    },
    destroyRobots() {
      if (this.robotPlayer[1]) {
        this.robotPlayer[1].terminate();
      }

      if (this.robotPlayer[2]) {
        this.robotPlayer[2].terminate();
      }
    },
    initRobots() {
      this.destroyRobots();
      this.robotPlayer = {
        1: this.initRobot(this.$store.state.player[1]),
        2: this.initRobot(this.$store.state.player[2])
      };
    },
    kickSound() {
      if (this.$store.state.sound) {
        if (this.game.winner) {
          chordSound(this.game.winner);
        } else if (this.game.player === 1) {
          kick1Sound();
        } else {
          kick2Sound();
        }
      }

      if (this.$store.state.vibration && !this.robotMatch) {
        kickVibration(
          50,
          this.$store.state.sound ? LATENCY * latency.latency : 0
        );
      }
    },
    robot() {
      const player = this.robotPlayer[this.game.player];

      if (!this.working && !this.game.winner && player) {
        this.working = true;
        player.select(this.game).then(move => {
          this.working = false;
          undoAction(this.game);
          this.game.move(move.move);
          this.kickSound();
          this.update();
          this.robot();
        });
      }
    },
    move(tile) {
      this.rules = false;

      if (this.game.winner) {
        return;
      }

      const action = selectAction(this.game, tile);

      if (action === false) {
        return;
      }

      if (action) {
        undoAction(this.game);
        this.game.move(action);
        this.kickSound();
        this.update();
      } else {
        this.kickSound();
      }
    },
    update() {
      undoAction(this.game);

      if (this.game.winner) {
        return;
      }

      initActions(this.game, this.game.possible());
    },
    undo() {
      this.snackbar = false;
      this.game.undo();
      this.game.undo();
      this.update();
    },
    reset() {
      this.fab = false;
      this.snackbar = false;
      this.initGame();
      this.onResize();
      this.initRobots();
      this.update();
      this.robot();
    }
  }
};
</script>

<style scoped>
.clickable:hover {
  cursor: pointer;
}

.mt-1-5 {
  margin-top: 5px;
}

.verdict-snack {
  padding-top: 62px;
}
</style>
