import Vue from 'vue'
import VueAnalytics, { onAnalyticsReady } from 'vue-analytics'

export function analytics (id, router, isProd, debug) {
  Vue.use(VueAnalytics, {
    id,
    router,
    debug: {
      enabled: !isProd && debug,
      sendHitTask: isProd
    }
  })
}

window.addEventListener('beforeinstallprompt', e => {
  e.userChoice.then(choiceResult => {
    onAnalyticsReady().then(() => {
      if (window.ga) {
        window.ga('send', 'event', 'install', choiceResult.outcome)
      }
    })
  })
})
