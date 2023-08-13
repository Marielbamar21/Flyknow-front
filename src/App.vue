<template>
<div id="app">
  <router-view/>
</div>  
</template>

<script>


import Inicio from './components/Inicio.vue'

export default {
  name: 'App',
 
}
</script>

<style>
#app {
  
  background-size: inherit;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
body {
  background-image: url("../public/background.png");
  background-size: 100vmax;
}
</style>
