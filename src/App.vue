<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view name="selfIntro" />
    <router-view name="skillChart" />
    <router-view name="program" />
    <router-view name="aboutMe" />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
body,html{
 height: 100%;
  background:-webkit-linear-gradient(top,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);
  background:linear-gradient(to bottom,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%)
}
</style>
