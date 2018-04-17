<template>
  <div
    v-if="user && user['.key'] && user.name && user.avatar"
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
            @click="share()">
            <v-icon>share</v-icon>
          </v-btn>
        </v-layout>
        <div class="text-xs-center pb-5">
          <g-avatar
            :value="user.avatar"
            width="48"
            style="width: calc(100% - 74px)" />
        </div>
        <div style="position: absolute; bottom: 8px; left: 0">
          <v-icon
            v-if="!user.guest"
            :style="{opacity: 0.5}"
            class="pl-3">{{ user.online ? 'person' : 'lan_disconnect' }}</v-icon>
          <v-icon
            v-else
            :style="{opacity: 0.5}"
            class="pl-3">{{ user.online ? 'person_outline' : 'lan_disconnect' }}</v-icon>
          <span
            class="pl-2 grey--text"
            style="position: relative; bottom: -2px">{{ user.last ? format(new Date(user.last)) : '' }}</span>
        </div>
        <div style="position: absolute; bottom: 0px; right: 0">
          <v-btn
            icon
            flat
            @click="showEdit = !showEdit">
            <v-icon>mode_edit</v-icon>
          </v-btn>
          <v-btn
            icon
            flat
            @click="showSelect = !showSelect">
            <v-icon>gridy</v-icon>
          </v-btn>
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
        <div style="height: 8px;" />
        <div style="position: absolute; bottom: 8px; left: 0; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; width: 100%">
          <v-icon
            v-if="!u.guest"
            :style="{opacity: 0.5}"
            class="pl-3">{{ u.online ? 'person' : 'lan_disconnect' }}</v-icon>
          <v-icon
            v-else
            :style="{opacity: 0.5}"
            class="pl-3">{{ u.online ? 'person_outline' : 'lan_disconnect' }}</v-icon>
          <span
            class="pl-2 grey--text"
            style="position: relative; bottom: -2px">{{ u.last ? format(new Date(u.last)) : '' }}</span>
        </div>
      </v-card>
    </div>

    <g-online-share-dialog
      v-if="showShare"
      :profile-link="profileLink" />

    <g-online-profile-edit-dialog
      v-if="showEdit"
      v-model="showEdit"
      :avatar="user.avatar"
      :name="user.name"
      @edit="edited" />
    <g-online-select-games-dialog v-if="showSelect" />
  </div>
  <div
    v-else
    class="pa-3 text-xs-center">
    <v-progress-circular
      color="light-blue"
      indeterminate />
    <div
      v-if="state.message"
      class="mt-1">
      <span
        v-if="state.message[state.message.length - 1] === '…'"
        style="visibility: hidden">…</span>{{ state.message }}
    </div>
  </div>
</template>

<script>
import {
  logOut,
  userRef,
  usersRef,
  updateUser,
  bindingData
} from '../services/online'
import {
  isDisconnected,
  isState,
  state,
  states
} from '../services/online/states'
import { Info } from '../../plugins/lib'
import { format } from 'pretty-date'

export default {
  components: {
    VProgressCircular: () => import('vuetify/es5/components/VProgressCircular'),
    GAvatar: () => import('./Avatar'),
    GOnlineProfileEditDialog: () => import('./OnlineProfileEditDialog'),
    GOnlineSelectGamesDialog: () => import('./OnlineSelectGamesDialog'),
    GOnlineShareDialog: () => import('./OnlineShareDialog')
  },
  data () {
    return {
      user: null,
      state,
      Info,
      acceptInvites: false,
      showShare: false,
      showEdit: false,
      showSelect: false,
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
        if (isState(states.USER)) {
          bindingData()
          this.$bindAsObject('user', userRef)
        } else if (isDisconnected()) {
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
