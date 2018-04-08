import Vue from 'vue'
import Router from 'vue-router'
import { Games } from '../../plugins/lib'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '*', redirect: '/' },
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('../components/HomeCards'),
        toolbar: () => import('../components/HomeToolbar')
      },
      meta: {
        title: 'Gridy Games',
        home: true,
        cards: true,
        overflow: 'scroll',
        theme: {
          true: '#212121',
          false: '#f5f5f5'
        }
      }
    },
    {
      path: '/table',
      name: 'table',
      components: {
        default: () => import('../components/HomeTable'),
        toolbar: () => import('../components/HomeToolbar')
      },
      meta: {
        title: 'Gridy Games',
        home: true,
        table: true,
        overflow: 'scroll',
        theme: {
          true: '#212121',
          false: '#f5f5f5'
        }
      }
    },
    {
      path: '/game/:id',
      name: 'game',
      components: {
        default: () => import('../components/Game'),
        toolbar: () => import('../components/GameToolbar')
      },
      meta: {
        title () {
          return Games[this.$route.params.id + 'Game'].title + ' | Gridy Games'
        },
        overflow: 'auto',
        theme: {
          true: '#303030',
          false: '#fafafa'
        }
      }
    },
    ...(!process.APP_FIREBASE ? [] : [
      {
        path: '/login',
        name: 'login',
        components: {
          default: () => import('../components/Login'),
          toolbar: () => import('../components/OnlineToolbar')
        },
        meta: {
          title: 'Gridy Games',
          login: true,
          overflow: 'auto',
          theme: {
            true: '#303030',
            false: '#fafafa'
          }
        }
      },
      {
        path: '/online',
        name: 'online',
        components: {
          default: () => import('../components/Online'),
          toolbar: () => import('../components/OnlineToolbar')
        },
        meta: {
          title: 'Gridy Games',
          online: true,
          overflow: 'auto',
          theme: {
            true: '#303030',
            false: '#fafafa'
          }
        }
      },
      {
        path: '/player/:id',
        name: 'player',
        components: {
          default: () => import('../components/Player'),
          toolbar: () => import('../components/OnlineToolbar')
        },
        meta: {
          title: 'Gridy Games',
          online: true,
          overflow: 'auto',
          theme: {
            true: '#303030',
            false: '#fafafa'
          }
        }
      }
    ])
  ]
})

if (process.APP_FIREBASE) {
  router.beforeEach((to, from, next) => {
    let isOnlineOrLogin = to.matched.some(record => record.meta.online || record.meta.login)

    if (!isOnlineOrLogin) {
      return next()
    }

    let isOnline = to.matched.some(record => record.meta.online)

    if (isOnline) {
      import('../services/online').then(({ state }) => {
        if (!state.user) {
          next('login')
        } else {
          next()
        }
      })
    } else {
      next()
    }
  })
}

export default router
