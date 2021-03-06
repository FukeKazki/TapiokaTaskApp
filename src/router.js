import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('./views/Form.vue')
    },
    {
      path: '/task-sort',
      name: 'task-sort',
      component: () => import('./views/TaskSort.vue')
    },
    {
      path: '/task-table',
      name: 'task-table',
      component: () => import('./views/TaskTable.vue')
    },
  ]
})
