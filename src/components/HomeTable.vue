<template>
  <div>
    <v-data-table
      v-show="show"
      :headers="headers"
      :loading="Shared.loading"
      :items="Shared.items"
      hide-actions
      disable-initial-sort
      class="elevation-1 ma-3 table--fixed">
      <template
        slot="items"
        slot-scope="props">
        <td>
          <g-icon
            :game="props.item.instance"
            :type="props.item.grid"
            class="preview preview-md d-block" />
        </td>
        <td class="py-3">
          <router-link
            :to="{name: 'game', params: {id: props.item.id}}"
            :class="props.item.wip ? 'red--text' : 'light-blue--text'"
            class="nowrap">{{ props.item.title | titled }}</router-link>
          <span v-if="!props.item.originals.aliases">
            <span
              v-for="(a, k) in props.item.aliasesArray"
              :key="k"
              class="nowrap"><br >{{ a }}</span>
          </span>
        </td>
        <td :class="{'grey--text': props.item.originals.original}">{{ props.item.original }}</td>
        <td class="nowrap">{{ props.item.group }}</td>
        <td
          :class="{'grey--text': props.item.originals.created}"
          class="nowrap">{{ props.item.created | era }}</td>
        <td
          :class="{'grey--text': props.item.originals.loaction}"
          class="nowrap">{{ props.item.location }}</td>
        <td
          :class="{'grey--text': props.item.originals.authors}"
          class="py-3">
          <span v-if="!props.item.originals.authors">
            <span
              v-for="(a, k) in props.item.authorsArray"
              :key="k"
              class="nowrap"><br v-if="k">{{ a }}</span>
          </span>
        </td>
        <td>{{ props.item.tiles }}</td>
        <td>
          <a
            :href="props.item.link"
            class="light-blue--text"
            target="_blank"
            rel="noopener">{{ props.item.link | link }}</a>
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
    VProgressCircular: () => import('vuetify/es5/components/VProgressCircular'),
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
        { text: 'Type', value: 'group', width: '120px' },
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
    }, 400)
  }
}
</script>

<style scoped>
.table--fixed >>> .table {
  table-layout: fixed !important;
}

.nowrap {
  white-space: nowrap;
}
</style>
