<template>
  <div>
    <v-data-table
      v-show="show"
      :headers="headers"
      :loading="Shared.loading"
      :items="Shared.items"
      hide-actions
      disable-initial-sort
      class="elevation-1 ma-3">
      <template
        slot="items"
        slot-scope="props">
        <td>
          <g-icon
            :game="props.item.instance"
            :type="props.item.grid"/>
        </td>
        <td>
          <router-link
            :to="{name: 'game', params: {id: props.item.id}}"
            :class="props.item.wip ? 'red--text' : 'light-blue--text'">{{ props.item.title | titled }}</router-link>
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
    <div
      v-if="!show"
      class="text-xs-center mt-3">
      <v-progress-circular
        color="light-blue"
        indeterminate />
    </div>
  </div>
</template>

<script>
import { Shared } from '../services/shared'

export default {
  name: 'HomeTable',
  components: {
    VDataTable: () => import('vuetify/es5/components/VDataTable'),
    GBoard: () => import('./Board'),
    GIcon: () => import('./Icon')
  },
  data () {
    return {
      Shared,
      show: false,
      headers: [
        { text: '', value: null, sortable: false, width: '48px' },
        { text: 'Title', value: 'title', width: '160px' },
        { text: 'Original', value: 'original', width: '160px' },
        { text: 'Type', value: 'type', width: '80px' },
        { text: 'Created', value: 'created', width: '80px' },
        { text: 'Location', value: 'location', width: '80px' },
        { text: 'Authors', value: 'authors', width: '120px' },
        { text: 'Tiles', value: 'tiles', width: '60px' },
        { text: 'Info', value: 'link', width: '120px' }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      this.show = true
    }, 500)
  }
}
</script>

<style>
table {
  table-layout: fixed !important;
}
</style>
