import Vue from 'vue'
import { getPathSetter } from '../services/path'

export function dialogLazy (prop, showDelay = 50, hideDelay = 300) {
  return {
    data () {
      return {
        showDialog: false
      }
    },
    watch: {
      [prop]: {
        immediate: true,
        handler (value) {
          if (value) {
            Vue.nextTick(() => {
              setTimeout(() => {
                this.showDialog = true
              }, showDelay)
            })
          }
        }
      },
      showDialog: function (value) {
        if (!value) {
          setTimeout(() => {
            getPathSetter(this, prop)(false)
          }, hideDelay)
        }
      }
    }
  }
}
