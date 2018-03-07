import Vue from 'vue'
import Router from 'vue-router'
const Main = () => import('@/components/Main')
const Game = () => import('@/components/Game')

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
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
