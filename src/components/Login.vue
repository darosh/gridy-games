<template>
  <div class="text-xs-center pa-2">
    <div
      v-if="!loading"
      class="login-buttons mt-1">
      <div><v-btn
        light
        color="white"
        @click="signInGoogle()"><v-icon class="mr-3">google</v-icon> Log in with Google</v-btn></div>
      <div><v-btn
        light
        color="white"
        @click="signInTwitter()"><v-icon
          class="mr-3"
          style="fill: #1da1f2">twitter_circle</v-icon> Log in with Twitter</v-btn></div>
      <div><v-btn
        dark
        color="grey darken-3"
        @click="signInGitHub()"><v-icon class="mr-3">github_circle</v-icon>Log in with GitHub</v-btn></div>
      <div><v-btn
        dark
        color="grey darken-3"
        @click="signInAnonym()"><v-icon class="mr-3">person</v-icon>Guest login</v-btn></div>
    </div>
    <v-progress-circular
      v-else
      color="light-blue"
      class="mt-1"
      indeterminate />
  </div>
</template>

<script>
import {
  state,
  states,
  signInAnonym,
  signInGitHub,
  signInTwitter,
  signInGoogle
} from '../services/online'

export default {
  components: {
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
        console.log('Login state value:', states[value])

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
.login-buttons >>> .btn__content {
  justify-content: left;
  text-transform: none
}
.login-buttons > * > * {
  min-width: 200px;
}
</style>
