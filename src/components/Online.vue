<template>
  <div
    v-if="user && user['.key']"
    class="pa-3">
    <div style="display: none">{{ counter }}</div>
    <div class="app-grid">
      <v-card>
        <v-layout class="ma-0">
          <div
            class="title pa-3"
            style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">
            {{ user.name }}
          </div>
          <v-spacer/>
          <v-btn
            icon
            flat
            @click="showEdit = true">
            <v-icon>mode_edit</v-icon>
          </v-btn>
          <v-btn
            icon
            flat
            @click="share()">
            <v-icon>share</v-icon>
          </v-btn>
        </v-layout>
        <div class="text-xs-center pb-3">
          <g-avatar
            :value="user.avatar"
            width="48"
            style="width: calc(100% - 74px)" />
        </div>
        <div style="position: absolute; bottom: 8px; left: 0">
          <v-icon
            v-if="!user.guest"
            :style="{opacity: 0.5}"
            class="pl-3">{{ user.online ? 'cloud_queue' : 'cloud_off' }}</v-icon>
          <v-icon
            v-else
            :style="{opacity: 0.5}"
            class="pl-3">{{ user.online ? 'visibility' : 'visibility_off' }}</v-icon>
          <span
            class="pl-2 grey--text"
            style="position: relative; bottom: -2px">{{ user.last ? format(new Date(user.last)) : '' }}</span>
        </div>
      </v-card>
      <v-card
        v-for="u in users"
        v-if="user['.key'] !== u['.key']"
        :key="u['.key']">
        <v-card-title>
          <div
            class="subheading"
            style="text-overflow: ellipsis; overflow: hidden; white-space: nowrap">{{ u.name || user['.key'] }}</div>
        </v-card-title>
        <div class="text-xs-center pb-3">
          <g-avatar
            :value="u.avatar"
            width="96"
            style="width: calc(100% - 58px)" />
        </div>
        <div style="height: 8px;"/>
        <div style="position: absolute; bottom: 8px; left: 0; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; width: 100%">
          <v-icon
            v-if="!u.guest"
            :style="{opacity: 0.5}"
            class="pl-3">{{ u.online ? 'cloud_queue' : 'cloud_off' }}</v-icon>
          <v-icon
            v-else
            :style="{opacity: 0.5}"
            class="pl-3">{{ u.online ? 'visibility' : 'visibility_off' }}</v-icon>
          <span
            class="pl-2 grey--text"
            style="position: relative; bottom: -2px">{{ u.last ? format(new Date(u.last)) : '' }}</span>
        </div>
      </v-card>
    </div>

    <v-dialog
      :value="showShare"
      max-width="360px"
      persistent>
      <v-card>
        <v-card-title>
          <span class="title pa-2">Share your profile</span>
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
            @click="showShare = !showShare">Close</v-btn>
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

    <g-profile-edit
      v-if="showEdit"
      v-model="showEdit"
      :avatar="user.avatar"
      :name="user.name"
      @edit="edited" />
  </div>
</template>

<script>
import {
  state,
  logOut,
  userRef,
  usersRef,
  updateUser
} from '../services/online'
import { states } from '../services/online/states'
import { Info } from '../../plugins/lib'
import { copy } from '../services/copy'
import { format } from 'pretty-date'

export default {
  components: {
    GProfileEdit: () => import('./ProfileEdit'),
    VTextField: () => import('vuetify/es5/components/VTextField'),
    VSwitch: () => import('vuetify/es5/components/VSwitch'),
    VDialog: () => import('vuetify/es5/components/VDialog'),
    GAvatar: () => import('./Avatar')
  },
  data () {
    return {
      user: null,
      state,
      Info,
      acceptInvites: false,
      showShare: false,
      showEdit: false,
      showSnack: false,
      snackMessage: '',
      counter: 0
    }
  },
  firebase: {
    users: usersRef.limitToLast(100)
  },
  computed: {
    profileLink () {
      const r = this.$router.resolve(this.profileRoute)
      return location.origin + location.pathname + r.href
    },
    profileRoute () {
      return { name: 'player', params: { id: this.user['.key'] } }
    }
  },
  watch: {
    'state.value': {
      immediate: true,
      handler (value) {
        if (value === states.USER) {
          this.$bindAsObject('user', userRef)
        } else if (value !== states.DISCONNECTED) {
          this.$router.replace('login')
        }
      }
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.counter++
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    logOut,
    format,
    share () {
      if (navigator.share) {
        navigator.share({
          url: this.profileLink
        })
      } else {
        this.showShare = !this.showShare
      }
    },
    openShare () {
      this.$router.push(this.profileRoute)
    },
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
    },
    edited (values) {
      updateUser(values)
    }
  }
}
</script>

<style scoped>
*>>>.card__media__content .icon {
  width: 100%;
  display: block;
}

*>>>.card__media__content .icon svg {
  width: 100%;
  display: block;
  height: 144px;
}

.app-grid {
  display: grid;
  grid-gap: 8px;
  grid-template-columns: repeat(12, 1fr);
}

.app-grid > *:first-child {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

@media (max-width: 1904px) {
  .app-grid {
    grid-template-columns: repeat(8, 1fr);
  }
}
@media (max-width: 1264px) {
  .app-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}
@media (max-width: 960px) {
  .app-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
@media (max-width: 600px) {
  .app-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>