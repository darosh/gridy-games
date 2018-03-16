<template>
  <div class="mx-3 mb-1">
    <v-layout
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>Title</v-flex>
      <div
        class="body-1">
        {{ game.title | titled }}
      </div>
    </v-layout>
    <v-layout
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>Type</v-flex>
      <div class="body-1">{{ game.type }}</div>
    </v-layout>
    <v-layout
      v-if="game.created"
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>Created</v-flex>
      <div class="body-1">{{ game.created | era }}</div>
    </v-layout>
    <v-layout
      v-if="game.location"
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>Location</v-flex>
      <div class="body-1">{{ game.location }}</div>
    </v-layout>
    <v-layout
      v-if="game.authorsArray"
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>{{ game.authorsArray.length > 1 ? 'Authors' : 'Author' }}</v-flex>
      <div
        class="body-1"
        v-html="game.authorsArray.join(', <br/>')"/>
    </v-layout>
    <v-layout
      v-if="game.aliasesArray"
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>{{ game.aliasesArray.length > 1 ? 'Aliases' : 'Alias' }}</v-flex>
      <div
        class="body-1"
        v-html="game.aliasesArray.join(', <br />')"/>
    </v-layout>
    <v-layout
      v-if="game.link"
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>Info</v-flex>
      <div
        class="body-1">
        <a
          :href="game.link"
          class="light-blue--text"
          target="_blank"
          rel="noopener">{{game.link | link}}</a>
      </div>
    </v-layout>
    <v-layout
      v-if="game.rulesArray"
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>{{ game.rulesArray.length > 1 ? 'Rules' : 'Rule' }}</v-flex>
      <div
        class="body-1"
        v-html="game.rulesArray.join(', <br />')"/>
    </v-layout>
    <v-layout
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>Tiles</v-flex>
      <div
        class="body-1">{{game.tiles}}</div>
    </v-layout>
    <v-layout
      v-if="game.originalId"
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>Original</v-flex>
      <div
        class="body-1">
        <router-link
          :to="{name: 'game' , params: {id: game.originalId}}"
          class="light-blue--text">{{ game.original | titled }}</router-link>
      </div>
    </v-layout>
    <v-layout
      v-if="similar.length"
      row
      mx-3
      mb-1>
      <v-flex
        class="body-2 mr-3"
        xs3>Similar</v-flex>
      <div
        class="body-1">
        <div
          v-for="s in similar"
          :key="s.id"
          class="pb-1">
          <router-link
            :to="{name: 'game' , params: {id: s.id}}"
            class="light-blue--text">{{ s.title | titled }}</router-link>
        </div>
      </div>
    </v-layout>
  </div>
</template>

<script>
import {Info} from '../../plugins/lib'

export default {
  props: {
    game: {
      type: Object,
      required: true
    }
  },
  computed: {
    similar () {
      return Info.similar(this.game.originalId || this.game.id, this.game.id)
    }
  }
}
</script>
