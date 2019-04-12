import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Home from '@/views/Home'
import ActiveUsers from '@/views/ActiveUsers'
import CreateIndex from '@/views/CreateIndex'
import QueryTerm from '@/views/QueryTerm'
import AllStory from '@/views/AllStory'
Vue.use(Router)
Vue.use(iView);
export default new Router({
  mode:'history',
  routes: [
  	{
  		path:'/',
  		component:Home
  	},
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'createIndex',
          component:CreateIndex
        },
        {
          path:'query',
          component:QueryTerm
        },
        {
          path:'statics',
          component:CreateIndex
        }
      ]
    },
    {
      path:'/story/:id',
      component:AllStory,
      name:'story'
    }

  ]
})
