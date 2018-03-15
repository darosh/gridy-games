import Vue from 'vue'
import Router from 'vue-router'
import { Games } from '../../plugins/lib'

Vue.use(Router)

export default new Router({
  routes: [{
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
  }]
})
