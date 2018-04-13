<template>
  <v-dialog
    :value="showDialog"
    light
    persistent
    max-width="520">
    <v-card light>
      <v-card-title class="title">
        <span class="pa-2">Log out {{ state.guest ? 'guest' : '' }}</span>
      </v-card-title>
      <v-card-text
        v-if="!state.guest"
        class="px-4 pt-0">
        Log out, or delete account, or just disconnect from realtime playing.
      </v-card-text>
      <v-card-text
        v-else
        class="px-4 pt-0">
        Delete guest account, or just disconnect from realtime playing.
      </v-card-text>
      <v-card-actions class="action-buttons">
        <v-layout
          row
          wrap
          style="align-items: flex-end">
          <v-flex class="px-2">
            <v-btn
              dark
              class="mb-2"
              color="red"
              @click="showDialog = false; deleteOut()">Delete</v-btn>
            <div class="d-inline-block">
              <v-btn
                v-if="!state.guest"
                class="mb-2"
                color="primary"
                flat
                light
                @click="showDialog = false; logOut()">Logout</v-btn>
              <v-btn
                class="mb-2"
                color="primary"
                flat
                @click="showDialog = false; disconnect()">Disconnect</v-btn>
            </div>
          </v-flex>
          <v-layout
            row
            style="justify-content: flex-end">
            <div>
              <v-btn
                flat
                light
                @click="showDialog = false">Dismiss</v-btn>
            </div>
          </v-layout>
        </v-layout>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { logOut, deleteOut, disconnect } from '../services/online'
import { state } from '../services/online/states'
import Vue from 'vue'
import { setTimeout } from 'timers'

export default {
  components: {
    VDialog: () => import('vuetify/es5/components/VDialog')
  },
  data () {
    return {
      showDialog: false,
      state
    }
  },
  watch: {
    'state.logout': {
      immediate: true,
      handler (value) {
        if (value) {
          Vue.nextTick(() => {
            setTimeout(() => {
              this.showDialog = true
            }, 50)
          })
        }
      }
    },
    showDialog: function (value) {
      if (!value) {
        setTimeout(() => {
          this.state.logout = false
        }, 300)
      }
    }
  },
  methods: {
    logOut,
    deleteOut,
    disconnect
  }
}
</script>

<style scoped>
.action-buttons {
  justify-content: space-between;
}
.action-buttons * {
  min-width: 0;
}
</style>
