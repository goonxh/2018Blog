<template>
  <div class="wrapper">
    <div class="titleWrapper">
      <h3 class="title">联系我</h3>
      <p class="intro">探讨理想，分享技术，提供工作，均可通过下方给我留言，我会第一时间回复的。其他人不可见。:)</p>
    </div>
    <div class="messageContent">
      <el-input v-model="nameInput" placeholder="请输入您的称呼" class="nameInput"></el-input>
      <el-input type="textarea" :autosize="{ minRows: 4, maxRows: 8}" placeholder="请输入留言内容" v-model="Contextarea" class="Contextarea"></el-input>
      <el-input v-model="emailInput" placeholder="请输入您的邮箱地址" class="emailInput"></el-input>
      <div class="sendMes" @click="sendMes">
        <img src="../assets/sendIcon.png" alt="发送留言" title="发送留言">
      </div>
      <p class="intro">当然，你也可以直接给我发送邮件：xh011234@163.com.</p>
      <p class="intro">或者，通过以下社交网络找到我：</p>
      <a href="https://github.com/goonxh" target="_blank"><img src="../assets/github.png" alt="github" title="github" class="societyIcon githubIcon"></a>
      <a href="https://weibo.com/goonxh" target="_blank"><img src="../assets/weibo.png" alt="weibo" title="weibo" class="societyIcon"></a>
      <img src="../assets/wechat.png" alt="wechat" title="wechat" class="societyIcon" plain @click="openWechat">
      <a href="https://www.zhihu.com/people/xh011234/" target="_blank"><img src="../assets/zhihu.png" alt="zhihu" title="zhihu" class="societyIcon"></a>
    </div>
    <div class="footer">
      <img src="../assets/wechatQR.jpg" alt="wechatQR" title="wechatQR" class="wechatQR">
      <br>
      <img src="../assets/back-to-top2.png" alt="back-to-top" title="回到顶部" class="back-to-top" @click="backtotop">
      <p>皖ICP备2018041123号</p>
      <p>Inspired by <a href="http://www.dandyweng.com/" target="_blank">Dandy Weng</a>'s design.</p>
      <p>Copyright © 2018 xiehao.xin. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
  export default {
      data:() => ({
        nameInput:"",
        Contextarea:"",
        emailInput:""
      }),
      beforeCreate(){
        
      },
      created(){
       
      },
      mounted() { 
      },
      methods: {
        openWechat() {
          this.$notify({
            title: '微信号：ThankU_xh',
            message: '当然，扫描下方二维码即可，斜眼笑',
            duration: 5000
          });
        },

        backtotop() {
          this.backTo(document.documentElement||document.body, 0, 500);
        },

        backTo:function(element, to, duration){
          var that = this;
           if (duration <= 0) return;
            var difference = to - element.scrollTop;
            var perTick = difference / duration * 10;

            setTimeout(function() {
                element.scrollTop = element.scrollTop + perTick;
                if (element.scrollTop === to) return;
                that.backTo(element, to, duration - 10);
            }, 10);
        },

        sendMes(){

          let params = { 
              name : this.nameInput,
              content : this.Contextarea,
              email : this.emailInput
          };

          this.$http.post('/api/message/sendMes',params).then((data) => {
            if(data.body == "successed"){
              this.$message({
                message: '留言发送成功！',
                type: 'success'
              });
            }
          })
        } 
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
    text-align: left;
    font-family: Helvetica,SimSun;
    font-size: 36px;
    margin-top: 60px;
    margin-bottom: 10px;
  }
  .intro{
    padding:15px;
    color: rgb(105,96,107);
    font-size: 24px;
    text-align: left;
    font-family: Helvetica,SimSun;
    margin-bottom: 20px;
  }
  .messageContent{
    width: 900px;
    margin: 0 auto;
  }
  .el-input, .el-textarea{
    margin-top: 20px;
    width: 600px;
    text-align: left;
    box-shadow: 0 0 5px rgb(200,200,200,.6);
  }
  .sendMes{
    width: 70px;
    height: 70px;
    margin:0 auto;
    margin-top: 30px;
    margin-bottom: 30px;
    border-radius: 100%;
    border:1px solid rgba(200,200,200,.8);
    cursor: pointer;
    box-shadow: 0 0 5px rgb(200,200,200,.6);
  }
  .sendMes:hover{
    background: rgba(200,200,200,.8);
    /* border:1px solid rgba(0,0,0,.8); */
  }
  .sendMes img{
    width: 50px;
    margin-top: 12px;
    margin-right: 5px;
    z-index: 9;

  }
  .societyIcon{
    width: 64px;
    margin: 15px 20px;
    cursor: pointer;
  }
  .wechatQR{
    margin-top: 20px;
    width: 200px;
  }
  .societyIcon:hover{
    transform:scale(1.1);
    -webkit-transform:scale(1.1);
    -moz-transform:scale(1.1);
    -o-transform:scale(1.1);
  }
  .footer p{
    padding-top:5px;
    color: rgb(105,96,107);
    font-family: Helvetica,SimSun;
    font-size: 16px;
  }
  .footer p a{
    text-decoration: none;
    color: #555;
  }
  .footer p:last-child{
    padding-bottom:10px;
  }
  .back-to-top{
    width: 64px;
    margin: 30px 0;
    cursor: pointer;
  }
  .back-to-top:hover{
    transform:scale(1.05);
    -webkit-transform:scale(1.05);
    -moz-transform:scale(1.05);
    -o-transform:scale(1.05);
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
  .messageContent{
    width: 320px;
    margin: 0 auto;
  }
  .el-input, .el-textarea{
    margin-top: 20px;
    width: 290px;
    text-align: left;
  }
  .intro{
    font-size: 18px;
    line-height: 32px;
  }
  .societyIcon{
    width: 48px;
    margin: 5px 10px;
  }
  .githubIcon{
    margin-left: 0px;
  } 
  }
</style>

