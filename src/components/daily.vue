<template>
  <div class="wrapper" >
    <div class="dailyBox">
      <p class="dailyNum">共{{dailyNum}}条日常</p> 
      <ul class="dailyList">
      <li v-for="daily in dailyList">
        <p>日期：{{daily.time}}</p>
        <p>日常：{{daily.content}}</p>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
  export default {
      data:() => ({
        content:"",
        dailyList:[],
        dailyNum:""
      }),
      beforeCreate(){
        
      },
      created(){
        this.$http.get('/api/daily/getAllDaily').then((data) => {
            console.log(data.body)
            this.dailyList = data.body;
            this.dailyNum = this.dailyList.length;
        })
      },
      mounted(){
        
          
      },
      methods: {
      }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    width: 1000px;
    margin:0 auto;
  }
  .dailyBox{
    margin-top: 20px;
    padding: 30px;
    border: 1px #eef solid;
    border-radius: 10px;
    box-shadow: 0 0 5px rgb(200,200,200,.6);
  }
  .dailyList li p{
    text-align: left;
    font-size: 16px;
    line-height: 32px;
  }
  .dailyList li p span{
    margin-left: 50px;
  }
  .dailyList li{
    border-bottom: 1px dashed #555555;
    padding: 20px 10px;
    list-style: none;
  }
  .dailyNum{
    text-align: right;
    margin-right: 15px;
  }
</style>

