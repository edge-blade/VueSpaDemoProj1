import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import TimeEntries from './components/TimeEntries.vue'
import LogTime from './components/LogTime.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// We want to apply VueResource and VueRouter
// to our Vue instance
Vue.use(VueResource)
Vue.use(VueRouter)


// define the routes using vue-router 2.x
const routes = [
  { 
    path: '/',
    component: Home
  },
  { 
    path: '/Home', 
    component: Home 
  },
  {
    path: '/TimeEntries',
    component: TimeEntries,
    children: [
      {
        path: 'LogTime',
        component: LogTime
      }
    ]
  },
  // catch all redirect
  { path: '*', redirect: '/Home' }
]

// create an instance of router with the routes
const router = new VueRouter({
  routes: routes,
  mode: 'history',
  linkActiveClass: 'active'
})

// Wire up Event Hun
const eventHub = new Vue()
Vue.mixin({
  data: function () {
    return {
      eventHub: eventHub
    }
  }
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const app = new Vue({
  el: '#app',
  router,
  components: { App }
});

