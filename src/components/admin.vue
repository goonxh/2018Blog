<template>
  <div class="wrapper" >
    <div class="dailySet">
      <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 6}" placeholder="请输入日常内容" v-model="dailyContent" class="dailyContent"></el-input>
       <el-button @click="sendDaily">更新日常</el-button>
    </div>
    <p class="visit">网站一共被访问了{{visitNum}}次。</p>
    <div class="mesBox">
      <p class="mesNum">共{{mesNum}}条留言</p>
      <ul class="mesList">
      <li v-for="mes in message">
        <p>称呼：{{mes.name}}<span>日期：{{mes.time}}</span></p>
        <p>邮箱：{{mes.email}}</p>
        <p>内容：{{mes.content}}</p>
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
  import {baseUrl} from "../config/utils";
  export default {
      data:() => ({
        dailyContent:"",
        message:[],
        mesNum:"",
        visitNum:"0"
      }),
      beforeCreate(){

      },
      created(){
        this.$http.get(`${baseUrl}/message/getMes`).then((data) => {
            this.message = data.body;
            this.mesNum = this.message.length;
        })
         this.$http.get('/api/init/getVisitNum').then((data) => {
            //console.log(data.body)
            this.visitNum = data.body;
        })
      },
      mounted(){

      },
      methods: {
        sendDaily() {
          let params = {
              content : this.dailyContent
          };

          this.$http.post(`${baseUrl}/daily/sendDaily`,params).then((data) => {
            if(data.body === "successed"){
              this.$message({
                message: '日常更新成功！',
                type: 'success'
              });
              this.dailyContent = "";
            }
          })
        }
      }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    width: 1000px;
    margin:0 auto;
  }
  .visit{
    text-align: left;
    margin-bottom: 15px;
    margin-top: 15px;
  }
  .dailySet{
    /* margin-top: 20px; */
    padding: 30px;
    border: 1px #eef solid;
    border-radius: 10px;
    box-shadow: 0 0 5px rgb(200,200,200,.6);
  }
  .dailyContent{
    width: 800px;
  }
  .mesBox{
    margin-top: 20px;
    padding: 30px;
    border: 1px #eef solid;
    border-radius: 10px;
    box-shadow: 0 0 5px rgb(200,200,200,.6);
  }
  .mesList li p{
    text-align: left;
    font-size: 16px;
    line-height: 32px;
  }
  .mesList li p span{
    margin-left: 50px;
  }
  .mesList li{
    border-bottom: 1px dashed #555555;
    padding: 20px 10px;
    list-style: none;
  }
  .mesNum{
    text-align: right;
    margin-right: 15px;
  }
</style>

