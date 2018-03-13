<template>
  <div>
    <v-data-table
      :headers="headers"
      :loading="loading"
      :items="items"
      disable-initial-sort
      hide-actions
      class="elevation-1 ma-3">
      <template
        slot="items"
        slot-scope="props">
        <td>
          <g-icon :game="props.item.instance" />
        </td>
        <td>
          <router-link
            :to="{name: 'game', params: {id: props.item.id}}"
            class="light-blue--text">{{ props.item.title | titled }}</router-link>
        </td>
        <td :class="{'grey--text': props.item.originals.original}">{{ props.item.original }}</td>
        <td>{{ props.item.type }}</td>
        <td :class="{'grey--text': props.item.originals.created}">{{ props.item.created | era }}</td>
        <td :class="{'grey--text': props.item.originals.loaction}">{{ props.item.location }}</td>
        <td :class="{'grey--text': props.item.originals.authors}">{{ props.item.authors }}</td>
        <td>{{ props.item.tiles }}</td>
        <td>
          <a
            :href="props.item.link"
            class="light-blue--text"
            target="_blank"
            rel="noopener">{{ props.item.linkText }}</a>
        </td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import games from '../mixins/games'

export default {
  components: {
    VDataTable: () => import('vuetify/es5/components/VDataTable'),
    GBoard: () => import('./Board'),
    GIcon: () => import('./Icon')
  },
  mixins: [games],
  data () {
    return {
      headers: [
        { text: '', value: null, sortable: false },
        { text: 'Title', value: 'title' },
        { text: 'Original', value: 'original' },
        { text: 'Type', value: 'type' },
        { text: 'Created', value: 'created' },
        { text: 'Location', value: 'location' },
        { text: 'Authors', value: 'authors' },
        { text: 'Tiles', value: 'tiles' },
        { text: 'Info', value: 'link' }
      ]
    }
  }
}
</script>
