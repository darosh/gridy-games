<template>
  <div class="text-xs-center pa-2">
    <div v-if="!loading">
      <v-btn class="primary" @click="signInGoogle()">Sign in with Google</v-btn>
      <v-btn class="primary" @click="signInGitHub()">Sign in as GitHub</v-btn>
      <v-btn class="primary" @click="signInAnonym()">Sign in as guest</v-btn>
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

</style>
