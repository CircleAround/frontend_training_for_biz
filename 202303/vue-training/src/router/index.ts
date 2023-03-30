import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Counter from '../views/step5/Counter.vue'
import Todo from '../views/step5/Todo.vue'
import AjaxTodo from '../views/step6/Todo.vue'
import CounterStep7 from '../views/step7/Counter.vue'
import TodoStep7 from '../views/step7/Todo.vue'
import Customer1 from '../views/practice1/Customer.vue'
import TodoStep8 from '../views/step8/Todo.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/counter',
    component: Counter
  },
  {
    path: '/todo',
    component: Todo
  },
  {
    path: '/ajaxTodo',
    component: AjaxTodo
  },
  {
    path: '/counterStep7',
    component: CounterStep7
  },
  {
    path: '/todoStep7',
    component: TodoStep7
  },
  {
    path: '/todoStep8',
    component: TodoStep8
  },
  {
    path: '/customers1',
    component: Customer1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
