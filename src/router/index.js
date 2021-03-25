import Vue from 'vue'
import VueRouter from 'vue-router'
import Export from "../components/Export.vue"
import Page1 from '../components/Page1.vue'
import Test from '../components/Test.vue'
import Page2 from '../components/Page2.vue'
import SearchBar from '../components/SearchBar.vue'
import slideshow from '../components/slideshow.vue'
import Search from '../components/Search.vue';
Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "Export",
  },
  {
    path: "/test",
    component: Test,
  },
  {
    path: '/Export',
    name: 'Export',
    component: Export,
  },
  {
    path: '/Page1',
    name: 'Page1',
    component: Page1,
  },
  {
    path: '/Page2',
    name: 'Page2',
    component: Page2,
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
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router