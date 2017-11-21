<template>
  <div id="app">
  
   
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
