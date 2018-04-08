<template>
  <div>
    <v-container grid-list-lg fluid>
      <div class="app-grid">
        <v-card>
          <v-layout class="ma-0">
            <div class="title pa-3" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">
              {{ user.name || ('Guest') }}
            </div>
            <v-spacer/>
            <v-btn icon flat @click="showEdit = true">
              <v-icon>mode_edit</v-icon>
            </v-btn>
            <v-btn icon flat @click="share()">
              <v-icon>share</v-icon>
            </v-btn>
          </v-layout>
          <div class="text-xs-center pb-3">
            <g-avatar width="48" :value="user.avatar" style="width: calc(100% - 74px)" />
          </div>
        </v-card>
        <v-card v-for="user in users" :key="user['.key']">
          <v-card-title>
            <div class="subheading" style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">{{user.name || user['.key']}}</div>
          </v-card-title>
          <div class="text-xs-center pb-3">
            <g-avatar width="96" :value="user.avatar" style="width: calc(100% - 58px)"/>
          </div>
        </v-card>
      </div>

      <v-dialog :value="showShare" max-width="360px" persistent>
        <v-card>
          <v-card-title>
            <span class="title pa-2">Share your profile</span>
          </v-card-title>
          <v-card-text class="py-0 px-4">
            <v-text-field :value="profileLink" class="grey darken-2" append-icon="content_copy" :append-icon-cb="copyLink" hide-details readonly single-line solo/>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn flat style="min-width: 0" @click="openShare()">Open</v-btn>
            <v-btn flat style="min-width: 0" @click="showShare = !showShare">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-snackbar v-model="showSnack" :timeout="2000" color="grey darken-3" top>
        <v-flex @click="showSnack = false">{{ snackMessage }}</v-flex>
      </v-snackbar>

    </v-container>

    <g-profile-edit v-if="showEdit" v-model="showEdit" :avatar="user.avatar" :name="user.name" @edit="edited" />
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
import { copy } from "../services/copy";

export default {
  components: {
    GProfileEdit: () => import("./ProfileEdit"),
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
      showShare: false,
      showEdit: false,
      showSnack: false,
      snackMessage: ""
    };
  },
  firebase: {
    users: usersRef.limitToLast(25),
    games: gamesRef.limitToLast(25)
  },
  computed: {
    profileLink() {
      const r = this.$router.resolve(this.profileRoute);
      return location.origin + location.pathname + r.href;
    },
    profileRoute() {
      return { name: "player", params: { id: this.user[".key"] } };
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
  },
  methods: {
    logOut,
    availableChanged,
    share() {
      if (navigator.share) {
        navigator.share({
          url: this.profileLink
        });
      } else {
        this.showShare = !this.showShare;
      }
    },
    openShare() {
      this.$router.push(this.profileRoute);
    },
    copyLink() {
      copy(this.profileLink)
        .then(() => {
          this.snackMessage = "Copied to clipboard";
          this.showSnack = true;
        })
        .catch(() => {
          this.snackMessage = "Copy to clipboard failed";
          this.showSnack = true;
        });
    },
    edited(values) {
      state.userRef.update(values);
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

.app-grid {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(16, 1fr);
}

.app-grid > *:first-child {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

@media (max-width: 1904px) {
  .app-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}
@media (max-width: 1264px) {
  .app-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media (max-width: 960px) {
  .app-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 600px) {
  .app-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
