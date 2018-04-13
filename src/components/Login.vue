<template>
  <div
    v-if="canReconnect"
    class="pa-3">
    <div class="title mb-3">Disconnected</div>
    <div class="login-buttons app-grid">
      <v-btn
        color="grey darken-3 btn-large"
        @click="reconnect()">
        <v-icon class="icon-large">sync_disabled</v-icon>
        Reconnect
      </v-btn>
    </div>
  </div>
  <div
    v-else-if="!loading"
    class="pa-3">
    <div class="title mb-3">Log in</div>
    <div class="login-buttons app-grid">
      <v-btn
        light
        color="white btn-large"
        @click="signInGoogle()">
        <v-icon class="icon-large">google</v-icon>
        Log in with Google
      </v-btn>
      <v-btn
        light
        color="white btn-large"
        @click="signInTwitter()">
        <v-icon
          class="icon-large"
          style="fill: #1da1f2">twitter_circle</v-icon> Log in with Twitter</v-btn>
      <v-btn
        light
        color="white btn-large"
        @click="signInGitHub()">
        <v-icon
          class="icon-large small"
          color="black">github_circle</v-icon>
        <v-icon
          class="icon-large large"
          color="black">github_circle_large</v-icon>
        Log in with GitHub</v-btn>
      <v-btn
        dark
        color="grey darken-3 btn-large"
        @click="signInAnonym()">
        <v-icon
          class="icon-large"
          color="white">person_outline</v-icon>Guest login</v-btn>
      <div>
        <v-expansion-panel
          class="rounded"
          light>
          <v-expansion-panel-content expand-icon="person">
            <div slot="header">
              <div class="subheading">Account help</div>
            </div>
            <div
              class="pb-3"
              style="position: relative">
              <v-divider light/>
              <ul
                class="body-1 ml-3 pl-3 pr-3 mt-3 square-list"
                style="opacity: 0.87">
                <li class="mb-0">Only random name and avatar will be visible to other players</li>
                <li class="mb-0">You can delete account manually during logout</li>
                <li class="mb-0">Account may be deleted due to inactivity automatically</li>
                <li class="mb-0">Only one provider per unique email allowed</li>
                <li>Only one connection (device, browser tab) per account allowed</li>
              </ul>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
      <div>
        <v-expansion-panel class="rounded">
          <v-expansion-panel-content expand-icon="person_outline">
            <div slot="header">
              <div class="subheading">Guest help</div>
            </div>
            <div class="ma-0 pb-3">
              <v-divider/>
              <ul
                class="body-1 ml-3 pl-3 pr-3 mt-3 square-list"
                style="opacity: 0.87">
                <li class="mb-0">Only random name and avatar will be visible to other players</li>
                <li class="mb-0">Guest account is marked with outline person icon
                  <v-icon class="size-16">person_outline</v-icon>
                </li>
                <li class="mb-0">Guest account is deleted after logout</li>
                <li>Guest account may be deleted due to inactivity automatically</li>
              </ul>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </div>
    </div>
    <div
      v-if="onlineUsers && onlineUsers.onlineUsers && onlineUsers.onlineUsers.length"
      class="mt-3 pt-3">
      <div class="title">Online players</div>
      <div class="users-grid mt-3">
        <v-card
          v-for="(i, k) in onlineUsers.onlineUsers"
          :key="k"
          bottom
          tag="div">
          <g-avatar
            :value="i.avatar"
            width="48"
            class="d-block py-1"
            style="margin: 0 auto" />
          <div
            style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap; width: 100%; max-width: 100%; font-size: 12px;"
            class="text-xs-center px-1">{{ i.name }}</div>
        </v-card>
        <div v-if="onlineUsers.onlineUsersCount > onlineUsers.onlineUsers.length">
          <div class="display-2 text-xs-center mt-1">+</div>
          <div
            class="text-xs-center body-2"
            style="margin-top: -2px">{{ (onlineUsers.onlineUsersCount - onlineUsers.onlineUsers.length) | number }}</div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else
    class="pa-3 text-xs-center">
    <v-progress-circular
      color="light-blue"
      indeterminate />
    <div
      v-if="state.message"
      class="mt-1">
      <span
        v-if="state.message[state.message.length - 1] === '…'"
        style="visibility: hidden">…</span>{{ state.message }}
    </div>
  </div>
</template>

<script>
// import { onlineUsersFnc } from "../services/online/fake";
import {
  onlineUsersFnc,
  reconnect,
  signInAnonym,
  signInGitHub,
  signInTwitter,
  signInGoogle
} from '../services/online'
import {
  canReconnect,
  isState,
  state,
  states
} from '../services/online/states'

const onlineUsers = onlineUsersFnc()

export default {
  components: {
    VDivider: () => import('vuetify/es5/components/VDivider'),
    VTooltip: () => import('vuetify/es5/components/VTooltip'),
    VExpansionPanel: () =>
      import('vuetify/es5/components/VExpansionPanel/VExpansionPanel'),
    VExpansionPanelContent: () =>
      import('vuetify/es5/components/VExpansionPanel/VExpansionPanelContent'),
    VProgressCircular: () => import('vuetify/es5/components/VProgressCircular'),
    GAvatar: () => import('./Avatar')
  },
  data () {
    return {
      state,
      loading: false,
      canReconnect: false,
      onlineUsers: null
    }
  },
  watch: {
    'state.value': {
      immediate: true,
      handler (value) {
        if (isState(states.USER)) {
          this.$router.replace('online')
        } else if (isState(states.INITIALIZED) || canReconnect()) {
          this.loading = false
          this.canReconnect = canReconnect()
        } else {
          this.loading = true
        }
      }
    }
  },
  mounted () {
    onlineUsers().then(res => {
      if (res) {
        this.onlineUsers = res.data
      }
    })
  },
  methods: {
    reconnect,
    signInAnonym,
    signInGoogle,
    signInTwitter,
    signInGitHub
  }
}
</script>

<style scoped>
.login-buttons>>>.btn__content {
  justify-content: left;
  text-transform: none;
  padding: 16px;
  flex-direction: column;
}
.login-buttons > * > * {
  min-width: 200px;
}

.btn-large {
  height: auto;
  margin: 0;
  padding: 0;
}

.btn-large > * {
  align-items: flex-start;
  padding: 0;
}

.icon-large,
.icon-large svg {
  width: 192px;
  height: 192px;
  display: block;
}

.black--text svg {
  fill: #161616;
}

.app-grid {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(4, 1fr);
}

.app-grid *:nth-child(5) {
  grid-column: 1 / 4;
}

.small {
  display: none;
}

@media (max-width: 1264px) {
  .app-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .app-grid *:nth-child(5) {
    grid-row: 2;
  }

  .app-grid *:nth-child(6) {
    grid-row: 3;
    grid-column: 2/4;
  }
  /* .app-grid *:nth-child(5) {
    padding-bottom: 8px;
  } */
}

@media (max-width: 960px) {
  .icon-large,
  .icon-large svg {
    width: 120px;
    height: 120px;
  }

  .small {
    display: block;
  }

  .large {
    display: none;
  }
}

@media (max-width: 600px) {
  .app-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .app-grid *:nth-child(4) {
    grid-column: 1;
    grid-row: 4;
  }

  .app-grid *:nth-child(5) {
    grid-column: 1 / 3;
    grid-row: 3;
  }

  .app-grid *:nth-child(6) {
    grid-row: 5;
    grid-column: 1/3;
  }
}

@media (max-width: 320px) {
  .app-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .app-grid *:nth-child(4) {
    grid-row: 5;
  }

  .app-grid *:nth-child(5) {
    grid-column: 1;
    grid-row: 4;
  }

  .app-grid *:nth-child(6) {
    grid-row: 6;
    grid-column: 1;
  }
}

.square-list li {
  list-style-type: square;
}

.icon.size-16,
.icon.size-16 svg {
  width: 16px;
  height: 16px;
}

.bg-icon {
  width: 48px;
  height: 48px;
  text-align: left;
  display: block;
}
.bg-icon svg {
  display: inline-block;
  height: 48px;
  width: auto;
  opacity: 0.5;
}

.users-grid {
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(25, 1fr);
}

@media (max-width: 1904px) {
  .users-grid {
    grid-template-columns: repeat(20, 1fr);
  }
}

@media (max-width: 1264px) {
  .users-grid {
    grid-template-columns: repeat(16, 1fr);
  }
}

@media (max-width: 960px) {
  .users-grid {
    grid-template-columns: repeat(10, 1fr);
  }
}

@media (max-width: 600px) {
  .users-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}
@media (max-width: 320px) {
  .users-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.rounded.expansion-panel,
.rounded.expansion-panel > li {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

@media (max-width: 1264px) and (min-width: 601px) {
  div:nth-child(6) > .rounded.expansion-panel,
  div:nth-child(6) > .rounded.expansion-panel > li {
    border-bottom-left-radius: 0;
    border-top-right-radius: 8px;
  }
}

.icon--rounded {
  background: #fff;
  border-radius: 50%;
}
</style>
