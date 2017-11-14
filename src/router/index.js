import Vue from 'vue'
import Router from 'vue-router'
import vueResource from 'vue-resource'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import contact from '@/components/contact'
import listDoc from '@/components/listDoc'
import listEqp from '@/components/listEqp'
import list from '@/components/list'
import article from '@/components/article'

Vue.use(Router)
Vue.use(vueResource)

export default new Router({
	history: false,
  hashbang: true,
  routes: [
    {
      path: '/',
      component: about
    },
    {
      path: '/pifubing',
      name: 'list',
      component: list,
    	children:[{
    		path:'/pifubing/:item',
    		component:list
    	}]
    },{
    	path:'/foo/:num',
    	name:'article',
    	component:article
    	
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
    	redirect:'/',
    	component:about
    }
  ]
})
