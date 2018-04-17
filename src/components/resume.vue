<template>
  <div class="wrapper" >
    <div class="leftContent">
      <div class="headPhoto"></div>
      <h3>谢浩</h3>
      <p>web前端工程师</p>
      <a class="website" href="http://me.xiehao.online">me.xiehao.online</a>
      <ul class="information">
        <li><img src="../assets/birth.png" alt="" width="24">&nbsp; 1993/09/29</li>
        <li><img src="../assets/mobile.png" alt="" width="24">&nbsp; 15255140611</li>
        <li><img src="../assets/email.png" alt="" width="24">&nbsp; xh011234@163.com</li>
        <li><img src="../assets/address.png" alt="" width="24">&nbsp; 杭州</li>
      </ul>
      <div class="skillBox">
         <p>html/html5、css/css3、javascript、jquery、easyui、layui、bootstrap、vue.js、elementui、node.js、mongodb、mysql、小程序、微信公众号</p>
      </div>
    </div>
    <div class="rightContent">
      <div class="education objects">
        <div class="title"><img src="../assets/education.png" alt="" width="36"><h3> &nbsp;&nbsp;教育经历</h3></div>
        <p class="eduDate">2012/09 - 2016/06</p> 
        <p class="eduName">皖西学院</p> 
        <p class="eduMajor">电子信息科学与技术</p>
        <p style="text-indent:2em;margin-top:5px;">在大学四年的学习生涯中，除了学习了课程安排的c语言和微机原理，还借阅过算法和数据结构等课程。这对我毕业后的工作有一定的影响和引导意义。我觉得大学对我受益最深的是每一次的课程设计与毕业设计，它让我感受到了主动学习以及解决问题的乐趣。</p>
      </div>
      <div class="career objects">
        <div class="title"><img src="../assets/career.png" alt="" width="36"><h3> &nbsp;&nbsp;工作经历</h3></div>
        <p class="eduDate">2016/09 - 2018/04</p> 
        <p class="eduName">视尔信息科技有限公司</p> 
        <p class="eduMajor">web前端工程师</p>
        <p style="margin-top:5px;">1.公司官网的设计，开发，更新与维护。</p>
        <p>2.公司软件后台管理页面的设计与开发。</p>
        <p>3.公司移动端h5产品的开发。</p>
        <p>4.公司小程序产品的开发。</p>
      </div>
      <div class="obj objects">
        <div class="title"><img src="../assets/object.png" alt="" width="36"><h3> &nbsp;&nbsp;项目经历</h3></div>
        <div class="objList">
          <p class="eduDate">2017/06 - 2017/09</p> 
          <p class="eduName">视尔信息科技有限公司官网</p> 
          <a class="eduMajor" href="http://www.showinfo.com.cn">www.showinfo.com.cn</a>
          <p style="margin-top:5px;">1.还原设计师提供的效果图以及动态效果。</p>
          <p>2.提供必要的接口格式给后端开发。</p>
          <p>3.开发后台管理页面以实现新闻产品等动态处理。</p>
          <p>4.后期的更新与维护。</p>
        </div>
        <div class="objList xcx">
          <p class="eduDate">2018/02 - 2018/03</p> 
          <p class="eduName">视尔智能留言小程序</p> 
          <p class="eduMajor"> &nbsp;</p>
          <p style="margin-top:5px;">1.小程序的开发，实现语音，视频的实时录制与上传。</p>
          <p>2.小程序后台管理页面的编写。</p>
          <p>3.小程序的发布。</p>
          <img src="../assets/znly.jpg" alt="" width="90">
        </div>
        <div class="objList">
          <p class="eduDate">2018/03 - 2018/04</p> 
          <p class="eduName" style="margin-left:100px;">个人主页</p> 
          <a class="eduMajor" href="http://me.xiehao.online">me.xiehao.online</a>
          <p style="margin-top:5px;">1.个人主页的设计。</p>
          <p>2.使用vue.js实现前台页面，node.js处理数据并编写接口，mongodb储存数据。</p>
          <p>3.使用node.js爬取自己部署在github上的hexo博客文章数据，并作为接口传递给前台展示。</p>
          <p>4.将个人主页分别部署到国外linux服务器以及阿里云windows服务器。</p>
        </div>
      </div>
      <div class="myself objects">
        <div class="title"><img src="../assets/myself.png" alt="" width="36"><h3> &nbsp;&nbsp;自我评价</h3></div>
        <p class="eduDate">自由、谦虚、从容、感恩和善良</p> 
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
  body{
    height: auto;
  }
  .wrapper{
    width: 800px;
    border: 1px #eef solid;
    border-radius: 10px;
    box-shadow: 0 0 5px rgb(200,200,200,.6);
    margin:30px auto;
  }
  .leftContent{
    width: 200px;
    height: 1000px;
    background-color: #000;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    float: left;
    color: #eee;
    font-family: Helvetica,SimSun;
    text-decoration: none;
    line-height: 36px;
  }
  .leftContent h3{
    margin-top: 20px;
    font-size: 36px;
  }
  .leftContent p{
    font-size: 18px;
  }
  .website{
    text-decoration: none;
    color: #fff;
    font-size: 12px;
    font-family: Helvetica,SimSun;
    margin-top: -10px;
    display: block;
  }
  .skillBox{
    width: 160px;
    height: 200px;
    margin:0 auto;
    margin-top:50px; 
    border: 1px solid rgba(255,255,255,.6);
    border-radius: 10px;
  }
  .skillBox p{
    font-size: 16px;
    line-height: 20px;
    padding: 10px 5px;
    color:rgba(18,150,219,.8);
  }
  .rightContent{
    width: 600px;
    height: 1000px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 200px;
  }
  .headPhoto{
    width: 100px;
    height: 100px;
    border-radius:100%;
    border: 1px solid #fff;
    background:url(../assets/headPhoto.jpg);
    background-size: cover;
    margin: 0px auto;
    margin-top:100px;
  }
  .headPhoto:hover{
    border: 1px solid rgb(51,103,214);
  }
  .information{
    margin:50px 0 0 15px;
  }
  .information li{
    list-style: none;
    text-align: left;
  }
  .information li img{
    margin-bottom: -5px;
  }
  .objects img{
    float: left;
  }
  .title{
    text-align: left;
    line-height: 36px;
    margin-bottom: 10px;
  }
  .objects{
    padding:15px;
  }
  .education p{
    text-align: left;
    line-height: 24px;
    color: rgb(105,96,107);
    font-size: 16px;
    font-family: Helvetica,SimSun;
  }
  .education p.eduDate,.education p.eduName{
    float: left;
    color: #1296db;
  }
  .education p.eduName{
    margin-left: 100px;
    margin-right: 100px;
    color: #1296db;
  }
  .education p.eduMajor{
    color: #1296db;
  }
  .career p{
    text-align: left;
    line-height: 24px;
    color: rgb(105,96,107);
    font-size: 16px;
    font-family: Helvetica,SimSun;
  }
  .career p.eduDate,.career p.eduName{
    float: left;
    color: #1296db;
  }
  .career p.eduName{
    margin-left: 80px;
    margin-right: 80px;
    color: #1296db;
  }
  .career p.eduMajor{
    color: #1296db;
  }
  .obj p{
    text-align: left;
    line-height: 24px;
    color: rgb(105,96,107);
    font-size: 16px;
    font-family: Helvetica,SimSun;
  }
  .obj a{
    text-align: left;
    line-height: 24px;
    color: rgb(105,96,107);
    font-size: 16px;
    font-family: Helvetica,SimSun;
  }
  .obj p.eduDate,.obj p.eduName{
    float: left;
    color: #1296db;
  }
  .obj p.eduName{
    margin-left: 30px;
    margin-right: 30px;
    color: #1296db;
  }
  .obj a.eduMajor{
    text-decoration: none;
    color: #1296db;
  }
  .objList{
    margin-top: 10px;
  }
  .xcx{
    position: relative;
  }
  .xcx img{
    position: absolute;
    right: 10px;
    top: 0;
  }
  .myself p{
    text-align: left;
    line-height: 24px;
    color: rgb(105,96,107);
    font-size: 16px;
    font-family: Helvetica,SimSun;
  }


</style>

