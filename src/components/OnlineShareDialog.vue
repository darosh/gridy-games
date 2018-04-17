<template>
  <div>
    <v-dialog
      v-model="showDialog"
      max-width="360px">
      <v-card>
        <v-card-title>
          <span class="title pa-2">Share profile</span>
        </v-card-title>
        <v-card-text class="py-0 px-4">
          <v-text-field
            :value="profileLink"
            :append-icon-cb="copyLink"
            class="grey darken-2"
            append-icon="content_copy"
            hide-details
            readonly
            single-line
            solo/>
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn
            flat
            style="min-width: 0"
            @click="showDialog = !showDialog">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="showSnack"
      :timeout="2000"
      color="grey darken-3"
      top>
      <v-flex @click="showSnack = false">{{ snackMessage }}</v-flex>
    </v-snackbar>
  </div>
</template>

<script>
import { dialogLazy } from '../mixins/dialog-lazy'
import { copy } from '../services/copy'

export default {
  components: {
    VDialog: () => import('vuetify/es5/components/VDialog'),
    VTextField: () => import('vuetify/es5/components/VTextField')
  },
  mixins: [dialogLazy('$parent.showShare')],
  props: {
    profileLink: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      showSnack: false,
      snackMessage: ''
    }
  },
  methods: {
    copyLink () {
      copy(this.profileLink)
        .then(() => {
          this.snackMessage = 'Copied to clipboard'
          this.showSnack = true
        })
        .catch(() => {
          this.snackMessage = 'Copy to clipboard failed'
          this.showSnack = true
        })
    }
  }
}
</script>
