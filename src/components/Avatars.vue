<template>
  <v-container grid-list-lg fluid>
    <v-layout row wrap>
      <v-flex v-for="avatar in avatars" :key="avatar" xs4 sm3 md2 lg1 pt-2 pb-2>
        <v-card class="text-xs-center pt-2" @click.native="randomize()">
          <g-avatar :value="avatar" width="96"></g-avatar>
          <div class="text-xs-center pb-2 grey--text">
            {{avatar}}
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Vue from 'vue'

const avatars = [];

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    avatars.push(`${i}${i}${j}${j}${j}${j}`);
  }
}

export default {
  components: {
    GAvatar: () => import("./Avatar")
  },
  data() {
    return {
      avatars
    };
  },
  methods: {
    randomize() {
      function r() {
        return Math.floor(Math.random() * 8);
      }

      const total = Math.pow(8, 6)

      for (let i = 0; i < 64; i++) {
        Vue.set(this.avatars, i, Math.floor(Math.random() * total + total).toString(8).substring(1) )
      }
    }
  }
};
</script>
