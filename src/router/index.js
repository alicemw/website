import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import contact from '@/components/contact'
import listDoc from '@/components/listDoc'
import listEqp from '@/components/listEqp'
import list from '@/components/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: about
    },
    {
      path: '/list',
      name: 'list',
      component: list,
    	children:[{
    		path:'/list/:item',
    		component:list
    	}]
    },
    {
    	path:'/about',
    	name:'about',
    	component:about
    },{
    	path:'/listDoc',
    	name:'listDoc',
    	component:listDoc
    },
    {
    	path:'/listEqp',
    	name:'listEqp',
    	component:listEqp
    },
    {
    	path:'/contact',
    	name:'contact',
    	component:contact
    },
    {
    	//路由重定向规则
    	path:'*',
    	redirect:'/'
    }
  ]
})
