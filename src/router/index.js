import Vue from 'vue'
import VueRouter from 'vue-router'
import page_export from "../components/page_export";
import page_contact from '../components/page_contact.vue'
import page_personal from '../components/page_personal.vue'
import SearchBar from '../components/SearchBar.vue'
import slideshow from '../components/slideshow.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "Export",
  },
  {
    path: '/Export',
    name: 'Export',
    component: page_export,
  },
  {
    path: '/contact',
    name: 'contact',
    component: page_contact,
  },
  {
    path: '/personal',
    name: 'personal',
    component: page_personal,
  },
  {
    path: '/SearchBar',
    name: 'SearchBar',
    component: SearchBar,
  },
  {
    path: '/slideshow',
    name: 'slideshow',
    component: slideshow,
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router