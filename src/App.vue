<template>
  <div id="app">
   	<header class="head">
          <img style="width:100%" src="./assets/images/logo.png" alt="内江和润皮肤病医院"/>
    </header>
    <div class="banner">
    	<div class="flexslider">
    		<ul class="slides">
    			<li>
    				<a href="#"><img style="width:100%" src="./assets/images/banner.png" alt="banner" /></a>
    			</li>
    		</ul>
    	</div>
    </div>
    <!--nav开始-->
    <nav class="nav">
        <ul>
           <li><router-link to="/about"><img src="./assets/images/nav1.png" /><p>和润品牌</p></router-link></li>
           <li><router-link to="/listEqp"><img src="./assets/images/nav2.png" /><p>诊疗项目</p></router-link></li>
           <li><router-link to="/listDoc"><img src="./assets/images/nav3.png" /><p>专家团队</p></router-link></li>
           <li><router-link to="/contact"><img src="./assets/images/nav4.png" /><p>来院路线</p></router-link></li>
           <div class="clear"></div>
        </ul>
    </nav>
   
    <!--nav结束-->
    <router-view/>
   
  </div>
</template>

<script>
import "../static/css/herun.css"

export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0 auto;
  width: 100%;
  max-width: 640px;
}
</style>
