<template>
  <div>
    <div>
      <v-toolbar dense flat color="transparent">
        <v-subheader class="pl-3">Options</v-subheader>
      </v-toolbar>
      <div class="mx-3 mb-3">
        <v-layout row mx-3 align-center class="touch-bottom">
          <v-flex class="body-1">Sound</v-flex>
          <div>
            <v-switch v-model="useSound" hide-details color="light-blue" />
          </div>
        </v-layout>
        <v-layout v-if="canVibrate" row mx-3 align-center class="touch-bottom">
          <v-flex class="body-1">Vibration</v-flex>
          <div>
            <v-switch v-model="useVibration" hide-details color="light-blue" />
          </div>
        </v-layout>
        <v-layout row mx-3 align-center class="touch-bottom">
          <v-flex class="body-1">Dark</v-flex>
          <div>
            <v-switch v-model="useDark" hide-details color="light-blue" />
          </div>
        </v-layout>
        <v-layout row mx-3 align-center class="touch-bottom">
          <v-flex class="body-1">Full screen</v-flex>
          <div>
            <v-switch v-model="useFullscreen" hide-details color="light-blue" />
          </div>
        </v-layout>
      </div>
      <v-divider></v-divider>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <div slot="header" style="margin-left: -8px">
            <v-subheader class="pa-0 ma-0" style="height: auto">Log</v-subheader>
          </div>
          <div v-for="(l, k) in logs" :key="k" class="px-3">
            <div v-if="k && format(l.time) !== format(logs[k - 1].time)" style="clear: both; height: 2px" class="grey darken-1">
              <v-divider></v-divider>
            </div>
            <v-divider v-if="k" style="clear: both"></v-divider>
            <div style="float: left" class="pr-3 grey--text">{{format(l.time)}}</div>
            <div style="float: right" :class="{[`${COLORS[l.level]}--text`]: true}" class="body-2">{{l.msg}}</div>
          </div>
          <div style="clear: both" :class="{'mb-3': logs.length}"></div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </div>
  </div>
</template>

<script>
import { Shared } from "../services/shared";
import { kick1Sound } from "../services/sound/kick1";
import { kickVibration } from "../services/vibration/index";
import { full } from "../services/full";
import { logs } from "../services/online/log";
import { format } from 'pretty-date'

const COLORS = Object.freeze(['green', 'amber', 'red', 'light-blue'])

export default {
  components: {
    VSwitch: () => import("vuetify/es5/components/VSwitch"),
    VSubheader: () => import("vuetify/es5/components/VSubheader"),
    VTextField: () => import("vuetify/es5/components/VTextField"),
    VDivider: () => import("vuetify/es5/components/VDivider"),
    VExpansionPanel: () =>
      import("vuetify/es5/components/VExpansionPanel/VExpansionPanel"),
    VExpansionPanelContent: () =>
      import("vuetify/es5/components/VExpansionPanel/VExpansionPanelContent")
  },
  data() {
    return {
      Shared,      logs,
      COLORS,
      canVibrate: !!window.navigator.vibrate
    };
  },
  computed: {
    useSound: {
      get: function() {
        return this.$store.state.sound;
      },
      set: function(value) {
        if (value) {
          setTimeout(kick1Sound);
        }

        this.$store.commit("sound", value);
      }
    },
    useVibration: {
      get: function() {
        return this.$store.state.vibration;
      },
      set: function(value) {
        if (value) {
          setTimeout(kickVibration);
        }

        this.$store.commit("vibration", value);
      }
    },
    useDark: {
      get() {
        return this.$store.state.dark;
      },
      set(value) {
        this.$store.commit("dark", value);
      }
    },
    useFullscreen: {
      get() {
        return this.$store.state.full;
      },
      set(value) {
        this.$store.commit("full", value);
        full(value);
      }
    }
  },
  methods: {
    format
  }
};
</script>

<style scoped>
@media screen and (max-width: 1263px) {
  .touch-bottom {
    margin-bottom: 14px;
  }
}
</style>
