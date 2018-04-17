<template>
  <v-dialog
    v-model="showDialog"
    light
    max-width="360">
    <v-card light>
      <v-card-title class="title red white--text">
        <span class="pl-2">Error</span>
        <v-spacer/>
        <v-icon class="white--text mr-2">warning</v-icon>
      </v-card-title>
      <v-card-text class="body-2 pb-0 px-4">
        {{ state.error.code }}
      </v-card-text>
      <v-card-text class="pb-0 px-4">
        {{ state.error.message }}
      </v-card-text>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          flat
          light
          @click="showDialog = false">Dismiss</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { state } from '../services/online/states'
import { dialogLazy } from '../mixins/dialog-lazy'

export default {
  components: {
    VDialog: () => import('vuetify/es5/components/VDialog')
  },
  mixins: [dialogLazy('state.error')],
  data () {
    return {
      state
    }
  }
}
</script>
