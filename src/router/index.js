import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'

Vue.use(VueRouter)

// const routes = [
//   // {
//   //   path: '/',
//   //   redirect: '/app'
//   // },
//   {
//     path: '/',
//     name: 'app',
//     component: App
//   },
// ]
import staticRoute from "./staticRoute";

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: staticRoute
})

export default router
