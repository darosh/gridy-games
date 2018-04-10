import Vue from 'vue'
import VueAnalytics, { onAnalyticsReady } from 'vue-analytics'

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

window.addEventListener('beforeinstallprompt', e => {
  e.userChoice.then(choiceResult => {
    onAnalyticsReady().then(() => {
      if (window.ga) {
        window.ga('send', 'event', 'install', choiceResult.outcome)
      }
    })
  })
})
