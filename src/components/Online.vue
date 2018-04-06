<template>
  <div>
    <v-container grid-list-lg fluid>
      <g-avatar width="128" />

      <div class="title mb-3">Play Online</div>
      <v-layout row wrap>
        <v-flex xs12 sm4 md3 lg2>
          <v-card>
            <v-layout class="ma-0">
              <v-card-title>
                <div class="title" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">
                  {{user.name || ('Guest')}}
                </div>
              </v-card-title>
              <v-spacer></v-spacer>
              <v-btn icon flat @click="share()">
                <v-icon>share</v-icon>
              </v-btn>
            </v-layout>
            <v-card-media height="144px">
              <v-icon>person</v-icon>
            </v-card-media>
            <v-card-actions class="mt-2">
              <v-btn flat color="primary" block>48 preferred games</v-btn>
            </v-card-actions>
            <v-layout row>
              <v-spacer></v-spacer>
              <v-flex style="min-width: 136px;" class="pl-3 pb-4">
                <v-switch v-model="user.available" @change="availableChanged(user.available)" color="primary" label="Accept invites" hide-details></v-switch>
              </v-flex>
              <v-spacer></v-spacer>
            </v-layout>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 md3 lg2>
          <v-card>
            <v-card-title>
              <div class="title">Random opponent</div>
            </v-card-title>
            <v-card-media height="144px">
              <v-icon>help</v-icon>
            </v-card-media>
            <v-card-actions class="mt-2">
              <v-btn flat color="primary" block>Play</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

      <v-dialog :value="showShare" max-width="360px" persistent>
        <v-card>
          <v-card-title>
            <span class="title pa-2">Share your profile</span>
          </v-card-title>
          <v-card-text class="py-0 px-4">
            <v-text-field :value="profileLink" hide-details single-line solo-inverted></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn flat style="min-width: 0" @click="openShare()">Open</v-btn>
            <v-btn flat style="min-width: 0" @click="showShare = !showShare">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- <div class="headline">Players</div>

      <v-layout row wrap>
        <v-flex xs6 sm4 lg1 v-for="user in users" :key="user['.key']">
          <v-card>
            <v-card-media :src="user.photo" height="80px"></v-card-media>
            <v-card-title>
              <div style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">{{user.name || user['.key']}}</div>
            </v-card-title>
            <v-card-actions>
              <v-btn small>play</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
      <div class="headline">Games</div>
      <v-layout row wrap>
        <v-flex xs6 sm4 lg1 v-for="game in games" :key="game['.key']">
          <v-card>
            <v-card-title>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout> -->
    </v-container>
  </div>
</template>

<script>
import {
  state,
  logOut,
  usersRef,
  gamesRef,
  availableChanged
} from "../services/online";
import { Info } from "../../plugins/lib";

export default {
  components: {
    VTextField: () => import("vuetify/es5/components/VTextField"),
    VSwitch: () => import("vuetify/es5/components/VSwitch"),
    VDialog: () => import("vuetify/es5/components/VDialog"),
    GAvatar: () => import("./Avatar")
  },
  data() {
    return {
      user: null,
      state,
      Info,
      acceptInvites: false,
      showShare: false
    };
  },
  firebase: {
    users: usersRef.limitToLast(25),
    games: gamesRef.limitToLast(25)
  },
  computed: {
    profileLink() {
      const r = this.$router.resolve(this.profileRoute)
      return location.origin + location.pathname + r.href
    },
    profileRoute() {
      return {name: 'player', params: {id: this.user['.key'] }}
    }
  },
  methods: {
    logOut,
    availableChanged,
    share() {
      if(navigator.share) {
        navigator.share({
          url: this.profileLink
        });
      } else {
        this.showShare = !this.showShare
      }
    },
    openShare() {
      this.$router.push(this.profileRoute)
    }
  },
  watch: {
    "state.user": {
      immediate: true,
      handler(value) {
        if (!value) {
          this.$router.replace("login");
        }
      }
    },
    "state.userRef": {
      immediate: true,
      handler(value) {
        if (!value) {
          this.user = null;
        } else {
          this.$bindAsObject("user", state.userRef);
        }
      }
    }
  }
};
</script>

<style scoped>
*>>>.card__media__content .icon {
  width: 100%;
  display: block;
}

*>>>.card__media__content .icon svg {
  width: 100%;
  display: block;
  height: 144px;
}
</style>
