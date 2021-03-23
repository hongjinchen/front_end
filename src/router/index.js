import Vue from 'vue'
import VueRouter from 'vue-router'
import Export from "../components/Export.vue"
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import SearchBar from '../components/SearchBar.vue'
<<<<<<< HEAD
import Register from '../components/Register.vue'
=======
import slideshow from '../components/slideshow.vue'

>>>>>>> b2e6452216be3ef1f6109d15c59fabb581d2aa4d
Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "Export",
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
<<<<<<< HEAD
    path: '/Register',
    name: 'Register',
    component: Register,
=======
    path: '/slideshow',
    name: 'slideshow',
    component: slideshow,
>>>>>>> b2e6452216be3ef1f6109d15c59fabb581d2aa4d
  },
  
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router