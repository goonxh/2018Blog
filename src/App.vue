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
    <router-view name="ooxxpic" />
    <router-view name="hupupic" />
    <router-view name="string2qrcode" />
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
            this.visitNum = data.body;
            this.$http.post('/api/init/sendVisitNum',{visitNum:this.visitNum}).then((data) => {
            })
        })
      },
  mounted(){
     document.body.removeChild(document.getElementById("system-loading"));
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
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
  background-color: #F5F5F5;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
  border-radius: 10px;
  background-color: #F5F5F5;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(240, 240, 240, .3);
  background-color: #ddd;
}
</style>
