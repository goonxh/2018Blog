<template>
  <div class="qrcode-page" style="text-align:left;padding:20px;">
    <div style="padding:50px 0;"> 
      <p>请输入任意字符串（网址，名称等）: </p>
      <el-input v-model="stringValue" type="textarea" style="width:300px;margin-top:25px;"></el-input> 
      <el-button type="primary" size="small" @click="sendString">发送</el-button>
    </div>
    <p> QRcode: </p>
    <img :src="QRcodeUrl" style="margin:5px 0 0 55px;" />
    <p> imgUrl: </p>
    <p style="margin-top:15px; width:90%;overflow: hidden; word-break:normal; white-space:pre-warp; word-wrap:break-word;"> {{imgUrl}}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
       stringValue: '',
       QRcodeUrl: '',
       imgUrl: '',
      }
    },
    created() {
   
    },
    methods:{
     sendString() {
       this.$http.post('https://api.xiehao.xin/string2qrcode',{stringVal:this.stringValue}).then((res) =>{
        this.QRcodeUrl = res.body.imgUrl;
        this.imgUrl = res.body.imgUrl;
       })
     }
    }
  }
</script>

<style scoped>
  .ooxx-wrapper{
    column-count: 6;
    column-gap: 0;
  }
  .item{
    break-inside: avoid;
    padding: 10px;
  }
  .item-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    cursor: pointer;
  }
  @media (max-width: 1367px) {
    .ooxx-wrapper{
      column-count: 4;
    }
  }
  @media (max-width: 1025px) {
    .ooxx-wrapper{
      column-count: 3;
    }
  }
  @media (max-width: 720px) {
    .ooxx-wrapper{
      column-count: 2;
    }
  }
  @media (max-width: 560px) {
    .ooxx-wrapper{
      column-count: 1;
    }
  }
</style>
