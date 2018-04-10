import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export function analytics (id, router, isProd) {
  Vue.use(VueAnalytics, {
    id,
    router,
    debug: {
      enabled: !isProd,
      sendHitTask: isProd
    }
  })
}
