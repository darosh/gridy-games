<template>
  <v-dialog
    v-model="showDialog"
    max-width="236px">
    <v-card>
      <v-card-title class="title pa-4">Edit profile</v-card-title>
      <div class="px-4 pt-0">
        <v-text-field
          v-model="nameEdit"
          :append-icon-cb="renewName"
          label="Name"
          append-icon="autorenew"
          hide-details/>
        <v-text-field
          v-model="avatarEdit"
          :append-icon-cb="renewAvatar"
          class="mt-3"
          label="Avatar"
          append-icon="autorenew"
          hide-details/>
      </div>
      <div class="text-xs-center py-3">
        <g-avatar
          :value="avatarEdit"
          width="144"/>
      </div>
      <v-container
        fluid
        grid-list-xs
        style="padding: 0 2px; margin-top: -16px">
        <v-layout
          row
          justify-space-around>
          <div>
            <v-btn
              v-for="i in 6"
              :key="i"
              icon
              flat
              class="ma-0"
              @click="digit(i-1)">
              {{ avatarEdit[i-1] }}
            </v-btn>
          </div>
        </v-layout>
      </v-container>
      <v-card-actions>
        <v-spacer/>
        <v-btn
          flat
          style="min-width: 0"
          @click="showDialog = false">Dismiss</v-btn>
        <v-btn
          flat
          style="min-width: 0"
          @click="$emit('edit', {name: nameEdit, avatar: avatarEdit}); showDialog = false">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { random, base } from 'gridy-avatars'
import { randomName } from '../services/online/name'
import { dialogLazy } from '../mixins/dialog-lazy'

export default {
  components: {
    VDialog: () => import('vuetify/es5/components/VDialog'),
    GAvatar: () => import('./Avatar'),
    VTextField: () => import('vuetify/es5/components/VTextField')
  },
  mixins: [dialogLazy('$parent.showEdit')],
  model: {
    prop: 'show',
    event: 'change'
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: String,
      default: '000000'
    },
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      nameEdit: this.name,
      avatarEdit: this.avatar
    }
  },
  methods: {
    renewAvatar () {
      this.avatarEdit = random()
    },
    renewName () {
      this.nameEdit = randomName()
    },
    digit (d) {
      const u = (parseInt(this.avatarEdit.charAt(d), 10) + 1) % base
      this.avatarEdit = `${this.avatarEdit.substring(
        0,
        d
      )}${u}${this.avatarEdit.substring(d + 1)}`
    }
  }
}
</script>
