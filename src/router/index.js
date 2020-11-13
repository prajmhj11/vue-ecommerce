import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin/Admin.vue'
import {fb} from '../firebase/firebase'

import $ from 'jquery'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/todo',
        name: 'Todo',
        component: () => import('../views/Todo.vue'),
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: { requiresAuth: true},
    component: Admin,
    children:[
      {
        path: "overview",
        name: 'Overview',
        component: () => import('../views/Admin/Overview.vue'),
      },
      {
        path: "products",
        name: 'Products',
        component: () => import('../views/Admin/Products.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const currentUser = fb.auth().currentUser;

  if(requiresAuth && !currentUser){
    $('#loginModal').modal('show');
    next('/');
  }else if(requiresAuth && currentUser){
    next()
  }else{
    next()
  }
})

export default router
