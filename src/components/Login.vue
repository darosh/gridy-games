<template>
  <div
    v-if="!loading"
    class="pa-3">
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
      <div
        class="pb-3"
        style="position: relative">
        <v-divider/>
        <v-icon
          style="position: absolute;"
          class="bg-icon ml-3 mt-1">person</v-icon>
        <ul
          class="body-1 ml-4"
          style="opacity: 0.87; margin-top: 56px">
          <li class="mb-1">Only random name and avatar will be visible to other players</li>
          <li class="mb-1">You can delete account manually during logout</li>
          <li class="mb-1">Account may be deleted due to inactivity automatically</li>
          <li class="mb-1">Only one provider per unique email allowed</li>
          <li>Only one connection (device, browser tab) per account allowed</li>
        </ul>
        <v-divider style="position: absolute; bottom: 0"/>
      </div>
      <div
        class="ma-0 pb-3"
        style="position: relative">
        <v-divider/>
        <v-icon
          style="position: absolute;"
          class="bg-icon ml-3 mt-1">person_outline</v-icon>
        <ul
          class="body-1 ml-4"
          style="opacity: 0.87; margin-top: 56px">
          <li class="mb-1">Only random name and avatar will be visible to other players</li>
          <li class="mb-1">Guest account is marked with outline person icon
            <v-icon class="size-16">person_outline</v-icon>
          </li>
          <li class="mb-1">Guest account is deleted after logout</li>
          <li>Guest account may be deleted due to inactivity automatically</li>
        </ul>
        <v-divider style="position: absolute; bottom: 0"/>
      </div>
    </div>
  </div>
  <div
    v-else
    class="pa-3 text-xs-center">
    <v-progress-circular
      color="light-blue"
      indeterminate />
  </div>
</template>

<script>
import {
  state,
  signInAnonym,
  signInGitHub,
  signInTwitter,
  signInGoogle
} from '../services/online'
import { states } from '../services/online/states'

export default {
  components: {
    VDivider: () => import('vuetify/es5/components/VDivider'),
    VProgressCircular: () => import('vuetify/es5/components/VProgressCircular')
  },
  data () {
    return {
      state,
      loading: false
    }
  },
  watch: {
    'state.value': {
      immediate: true,
      handler (value) {
        if (value === states.USER) {
          this.$router.replace('online')
        } else if (value >= states.LOADING) {
          this.loading = true
        } else {
          this.loading = false
        }
      }
    }
  },
  methods: {
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
  grid-gap: 16px;
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
    grid-row: 6;
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
    grid-column: 1;
  }
}

li {
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
</style>
