import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/components/Main'),
    meta: {
      title: 'Gridy Games',
      home: true
    }
  },
  {
    path: '/game/:id',
    name: 'game',
    component: () => import('@/components/Game')
  }
  ]
})
