import { search } from '../worker/search'
import { Shared } from '../services/shared'

export default {
  data () {
    return {
      Shared,
      items: [],
      loading: true
    }
  },
  watch: {
    'Shared.search': function () {
      this.update()
    },
    'Shared.searching': function () {
      this.update()
    }
  },
  mounted () {
    this.update()
  },
  methods: {
    update () {
      this.loading = true
      search(Shared.searching ? Shared.search : '').then(items => {
        for (const item of items) {
          if (item.show === undefined) {
            item.show = false
          }
        }

        this.items = items
        this.loading = false
      })
    }
  }
}
