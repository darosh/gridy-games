<template>
  <div class="text-xs-center pa-2">
    <div v-if="!loading" class="login-buttons">
      <div><v-btn @click="signInGoogle()"><v-icon class="mr-3">google</v-icon> Google login</v-btn></div>
      <div><v-btn @click="signInGitHub()"><v-icon class="mr-3">github_circle</v-icon> GitHub login</v-btn></div>
      <div><v-btn @click="signInAnonym()"><v-icon class="mr-3">person</v-icon> Guest login</v-btn></div>
    </div>
    <v-progress-circular v-else
        color="light-blue"
        indeterminate />
  </div>
</template>

<script>
import {
  state,
  states,
  signInAnonym,
  signInGitHub,
  signInGoogle
} from "../services/online";

export default {
  components: {
    VProgressCircular: () => import('vuetify/es5/components/VProgressCircular')
  },
  data() {
    return {
      state,
      loading: false
    };
  },
  watch: {
    "state.value": {
      immediate: true,
      handler(value) {
        console.log(value)
        if (value === states.USER) {
          this.$router.replace("online");
        } else if (value >= states.SIGNING) {
          this.loading = true;
        } else {
          this.loading = false;
        }
      }
    }
  },
  methods: {
    signInAnonym,
    signInGoogle,
    signInGitHub
  }
};
</script>

<style scoped>
.login-buttons >>> .btn__content {
  justify-content: left;
}
.login-buttons > * > * {
  min-width: 170px;
}
</style>
