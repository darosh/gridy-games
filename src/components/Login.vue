<template>
  <div class="text-xs-center pa-2">
    <v-btn class="primary" @click="signInGoogle()">Sign in with Google</v-btn>
    <v-btn class="primary" @click="signInAnonym()">Sign in as guest</v-btn>
  </div>
</template>

<script>
import { state, signInAnonym, signInGoogle } from "../services/online";

export default {
  data() {
    return {
      state
    };
  },
  methods: {
    signInAnonym,
    signInGoogle
  },
  watch: {
    'state.user': {
      immediate: true,
      handler(value) {
        if (value) {
          this.$router.replace('online')
        }
      }
    }
  }
};
</script>

<style scoped>

</style>
