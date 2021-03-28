import Vue from 'vue'
import VueRouter from 'vue-router'
import page_export from "../components/page_export.vue";
import page_contact from '../components/page_contact.vue'
import page_personal from '../components/page_personal.vue'
import SearchBar from '../components/SearchBar.vue'
import slideshow from '../components/slideshow.vue'
import Search from '../components/Search.vue';
import Register from '../components/Register.vue';
import login from '../components/login.vue';
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
  {
    path: '/Search',
    name: 'Search',
    component: Search,
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router