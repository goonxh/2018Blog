<template>
  <div class="wrapper" >
    <div class="titleWrapper">
      <h3 class="title">联系我</h3>
    </div>
    <div class="selfContent">
      <div class="selfIntro">
        <p>93年，天秤座</p>
        <p>本科毕业</p>
        <p>从事前端开发工作两年</p>
        <p>三观明确</p>
        <p>会装机、修电脑，但不接受永久售后</p>
        <p>会打篮球，但篮子很差</p>
        <p>不喜欢嘴炮</p>
        <p>不讨论政治</p>
        <p>不玩快手、抖音、内涵段子等</p>
        <p>谦虚</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      data:() => ({

      }),
      beforeCreate(){
        
      },
      created(){
       
      },
      mounted(){
        
      },
      methods: {
        
      }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .titleWrapper{
    width: 900px;
    margin: 0 auto;
  }
  .selfContent{
    position: relative;
    width: 900px;
    height: 505px;
    margin-top: 10px;
    background:url(../assets/xh222.jpg);
    background-size: cover;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 0 5px rgb(200,200,200,.6);
  }
  h3.title{
    padding:15px;
    color: rgb(105,96,107);
    font-size: 24px;
    text-align: left;
    font-family: Helvetica,SimSun;
    font-size: 36px;
    margin-bottom: 20px;
  }
  .selfIntro{
    position: absolute;
    text-align: left;
    top:15px;
    left:500px;
    font-size: 20px;
    line-height: 36px;
    font-family: "KaiTi";
  }
  @media (max-width: 500px) { 
   .titleWrapper{
     width: 300px;
    }
    h3.title{
    font-size: 24px;
  }
   .selfContent{
    width: 100%; 
    height: 505px;
    background:url(../assets/xh333.jpg);
    border-radius: 0px;
    transition-property: transform;
   }
   .selfContent:after{
    content:"";
    position:absolute;
    width:100%;
    height:101%;
    top:0;
    left:0;
    opacity:1;
    pointer-events:none;
    background:-webkit-linear-gradient(top,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);
    background:linear-gradient(to bottom,rgba(255,255,255,0.3) 0,rgba(255,255,255,1) 100%);
   }
   .selfIntro{
    z-index: 9;
    left:50px;
  }
  }
</style>

