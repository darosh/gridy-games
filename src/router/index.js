import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Game from '@/components/Game'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: Main,
    meta: {
      title: 'Gridy Games',
      home: true
    }
  },
  {
    path: '/game/:id',
    name: 'game',
    component: Game
  }
  ]
})
