import Vue from 'vue'
import Router from 'vue-router'
//@代表src目录
import IndexView from '../components/index/content.vue'
import InformationView from '../components/Information/content.vue'

// import Ticket from '../components/ticket/content'
// import Scenery from '../components/scenery/content'
// import About from '../components/about/content'

Vue.use(Router);
console.log(IndexView);
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'IndexView',
      component: IndexView
    },
    {
      path: '/information',
      name: 'Information',
      component: InformationView
    },
    // {
    //   path: '/ticket',
    //   name: 'Ticket',
    //   component: Ticket
    // },
    // {
    //   path: '/scenery',
    //   name: 'Scenery',
    //   component: Scenery
    // },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // },
    {
      path:'*', redirect:'/index'
    }
  ]
})
