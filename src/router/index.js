import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    components: {
      default: () => import('@/components/HomeCards'),
      toolbar: () => import('@/components/HomeToolbar')
    },
    meta: {
      title: 'Gridy Games',
      home: true,
      cards: true,
      overflow: 'scroll'
    }
  },
  {
    path: '/table',
    name: 'table',
    components: {
      default: () => import('@/components/HomeTable'),
      toolbar: () => import('@/components/HomeToolbar')
    },
    meta: {
      title: 'Gridy Games',
      home: true,
      table: true,
      overflow: 'scroll'
    }
  },
  {
    path: '/game/:id',
    name: 'game',
    components: {
      default: () => import('@/components/Game'),
      toolbar: () => import('@/components/GameToolbar')
    },
    meta: {
      overflow: 'auto'
    }
  }]
})
