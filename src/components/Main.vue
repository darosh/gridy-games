<template>
  <v-container
    grid-list-lg
    fluid>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="game in games"
        :key="game.id"
        xs12
        sm6
        md3
        lg2>
        <v-card
          :to="{name: 'game', params: {id: game.id}}"
          height="100%">
          <div
            v-if="game.wip"
            class="px-3 py-2 red lighten-4 red--text text--darken-4 body-1">
            <i>Not implemented yet</i>
          </div>
          <v-card-title>
            <div>
              <div class="headline">{{ game.data.title | titled }}</div>
              <span class="grey--text">{{ game.data.type }}</span>
            </div>
            <v-flex
              v-if="game.data.created"
              class="body-2 text-xs-right">{{ Math.abs(game.data.created) }}
              <span v-if="game.data.created < 0">BCE</span>
            </v-flex>
          </v-card-title>
          <div
            class="text-xs-center"
            style="min-height: 112px">
            <g-board
              :game="game.value"
              :frame="[164,96]"
              :margin="4"
              class="preview"/>
          </div>
          <v-card-text>
            <div
              v-if="game.data.authors"
              class="body-1">{{ game.data.authors.join(', ') }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { Games } from '../lib'
import { titled } from '../filters'

export default {
  components: {
    GBoard: () => import('./Board')
  },
  data () {
    return {
      games: Object.keys(Games).map(g => ({
        name: g,
        value: new Games[g](),
        id: g.replace('Game', ''),
        data: Games[g],
        wip: Games[g].wip,
        show: false
      }))
    }
  },
  mounted () {
    const items = Math.ceil(
      window.innerWidth * window.innerHeight / (250 * 250)
    )

    let i = 0
    const iter = () => {
      if (i < this.games.length) {
        for (let j = 0; j < items && i < this.games.length; j++) {
          this.games[i++].show = true
        }

        requestAnimationFrame(iter)
      }
    }
    requestAnimationFrame(iter)
  }
}
</script>
