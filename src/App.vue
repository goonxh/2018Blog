<template>
  <div id="app">
    <router-view name="selfIntro" />
    <router-view name="skillChart" />
    <router-view name="program" />
    <router-view name="aboutMe" />
    <router-view name="contactMe" />
    <router-view name="admin" />
    <router-view name="daily" />
    <router-view name="resume" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data:() => ({
        visitNum:""
      }),
  created(){
        this.$http.get('/api/init/getVisitNum').then((data) => {
            //console.log(data.body)
            this.visitNum = data.body;
            this.$http.post('/api/init/sendVisitNum',{visitNum:this.visitNum}).then((data) => {
              //console.log(data.body)
            })
        })
      }
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
