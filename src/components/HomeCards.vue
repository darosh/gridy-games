<template>
  <v-container
    grid-list-lg
    fluid>
    <v-layout
      row
      wrap>
      <v-flex
        v-for="game in items"
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
              <div class="headline">{{ game.title | titled }}</div>
              <span class="grey--text">{{ game.type }}</span>
            </div>
            <v-flex
              v-if="game.created"
              class="body-2 text-xs-right">{{ game.created | era }}
            </v-flex>
          </v-card-title>
          <div
            class="text-xs-center"
            style="min-height: 112px">
            <g-board
              v-if="game.show"
              :game="game.instance"
              :frame="[164,96]"
              :margin="4"
              class="preview d-inline-block" />
            <v-progress-circular
              v-else
              :width="2"
              size="64"
              color="light-blue"
              indeterminate
              style="margin-top: 18px"/>
          </div>
          <v-card-text>
            <div
              v-if="game.authors"
              class="body-1">{{ game.authors }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import games from '../mixins/games'

export default {
  components: {
    GBoard: () => import('./Board')
  },
  mixins: [games],
  watch: {
    items: {
      immediate: true,
      handler: function () {
        const items = Math.ceil(
          window.innerWidth * window.innerHeight / (250 * 250)
        )

        for (const item of this.items) {
          item.show = false
        }

        let i = 0
        const iter = () => {
          if (!this.$route.meta.cards) {
            return
          }

          if (i < this.items.length) {
            for (let j = 0; j < items && i < this.items.length; j++) {
              this.items[i++].show = true
            }

            requestAnimationFrame(iter)
          }
        }

        setTimeout(() => {
          requestAnimationFrame(iter)
        }, 300)
      }
    }
  }
}
</script>
