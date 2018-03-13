<template>
  <div class="mx-3 mb-3">
    <v-layout
      row
      mx-3
      mb-3>
      <v-flex
        class="body-2 mr-3"
        xs3>Title</v-flex>
      <div
        v-if="game.wiki"
        class="body-1">
        <a
          :href="game.wiki"
          target="_blank"
          rel="noopener"
          class="light-blue--text">{{ game.title | titled }}</a>
      </div>
      <div
        v-else-if="game.source"
        class="body-1">
        <a
          :href="game.source"
          target="_blank"
          rel="noopener"
          class="light-blue--text">{{ game.title | titled }}</a>
      </div>
      <div
        v-else
        class="body-1">{{ game.title | titled }}</div>
    </v-layout>
    <v-layout
      row
      mx-3
      mb-3>
      <v-flex
        class="body-2 mr-3"
        xs3>Type</v-flex>
      <div class="body-1">{{ game.type }}</div>
    </v-layout>
    <v-layout
      v-if="game.created"
      row
      mx-3
      mb-3>
      <v-flex
        class="body-2 mr-3"
        xs3>Created</v-flex>
      <div class="body-1">{{ game.created | era }}</div>
    </v-layout>
    <v-layout
      v-if="game.location"
      row
      mx-3
      mb-3>
      <v-flex
        class="body-2 mr-3"
        xs3>Location</v-flex>
      <div class="body-1">{{ game.location }}</div>
    </v-layout>
    <v-layout
      v-if="game.authors"
      row
      mx-3
      mb-3>
      <v-flex
        class="body-2 mr-3"
        xs3>{{ game.authors.length > 1 ? 'Authors' : 'Author' }}</v-flex>
      <div
        class="body-1"
        v-html="game.authors.join(', <br/>')"/>
    </v-layout>
    <v-layout
      v-if="game.aliases"
      row
      mx-3
      mb-3>
      <v-flex
        class="body-2 mr-3"
        xs3>{{ game.aliases.length > 1 ? 'Aliases' : 'Alias' }}</v-flex>
      <div
        class="body-1"
        v-html="game.aliases.join(', <br />')"/>
    </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    game: {
      type: Function,
      default: null
    }
  }
}
</script>
