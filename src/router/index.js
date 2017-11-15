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
	//用mode history去除路由中的 #/
	mode:'history',
  hashbang: true,
  routes: [
    {
    	//首页路由
      path: '/',
      component: about
    },
    {//列表页路由
      path: '/pifubing',
      name: 'list',
      component: list,
      //列表各种病种分类子路由
    	children:[{
    		path:'/pifubing/:item',
    		component:list
    	}]
    },{//文章页路由
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
