<template>
  <div class="wrapper">
   <nav>
     <p class="fullScreen" @click="clickToFullS"><img src="../assets/fullscreen.png" alt="" width="14">全屏浏览</p>
   </nav>
   <div class="headerBackground" v-bind:class="{scroll:isScroll, goTop:isGoTop}"></div>
   <div class="title">
       <p id="imxiehao" v-bind:style="{color:changeColor}">你好，我是谢浩</p>
       <transition name="el-fade-in-linear">
        <p id="welcome" v-show="show">欢迎来的我的网站</p>
       </transition>
    </div>
    <transition name="el-fade-in">
      <div class="clickStart" @click="clickStart" v-show="showBtn">
         <p>点此开始</p>
         <i class="el-icon-arrow-down"></i>
         <i class="el-icon-arrow-down"></i>
      </div>
   </transition>
   <div class="intro">
    <transition name="el-fade-in">
      <p v-show="show"><a href="/daily" title="点击查看更多日常" class="daily">日常</a>：“<!-- 此刻正在用QQ音乐听草东没有派对的《情歌》，从华晨宇翻唱的《山海》，找到了草东没有派对乐队的专辑《丑奴儿》，很不错的一张专辑，至少能让我不被楼上的嬉笑喧闹所打扰。<br><br>对，我讨厌吵闹，更讨厌人为的吵闹，在家都安安静静的不好吗，一定能提高不少生产力呢。希望晚上能好好睡个觉，希望多挣点钱早点买起别墅。 -->{{dailyText}}”</p>
     </transition>
   </div>
  </div> 

</template>

<script>
  export default {
      data: () => ({
        show: false,
        isScroll:false,
        isGoTop:false,
        showBtn:true,
        changeColor:'#fff',
        scroll:'',
        dailyText:"更新中..."
      }),
      beforeCreate(){
        this.$http.get('/api/daily/getDaily').then((data) => {
            /*console.log(data.body)*/
            this.dailyText = data.body;
        })
      },
      methods:{
        clickToFullS(){ //浏览器全屏
           var de = document.documentElement;
           if (de.requestFullscreen) {
               de.requestFullscreen();
           } else if (de.mozRequestFullScreen) {
               de.mozRequestFullScreen();
           } else if (de.webkitRequestFullScreen) {
               de.webkitRequestFullScreen();
           }
        },
        clickStart(){ //点击开始事件
          this.show = true;
          this.isScroll = true;
          this.showBtn = false;
          this.changeColor = "rgb(105,96,107)";
        },
        scrollFn() { //滚动条变化事件
          this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
          if(this.scroll == "0"){
            this.show = false;
            this.isScroll = false;
            this.showBtn = true;
            this.isGoTop = true;
            this.changeColor = "rgb(255,255,255)";
          }else if(this.scroll > "10"){
            this.show = true;
            this.isScroll = true;
            this.showBtn = false; 
            this.changeColor = "rgb(105,96,107)";
          }
        },
        mouseWheelFn(e){
          /*console.log(e)*/
          if(this.scroll == 0 && this.isScroll == false){
            e = e || window.event;
            var deltaY = e.deltaY/100 || e.detail/3 
            console.log(deltaY)
            if (e.stopPropagation) {
              e.stopPropagation();
              if (deltaY > 0) {
                this.show = true;
                this.isScroll = true;
                this.showBtn = false; 
                this.changeColor = "rgb(105,96,107)";
              }
            }else {
              e.cancelBubble = true;
              if (deltaY > 0) {
                this.show = true;
                this.isScroll = true;
                this.showBtn = false; 
                this.changeColor = "rgb(105,96,107)";
              }
            }
            if (e.preventDefault) {
              e.preventDefault();
              if (deltaY > 0) {
                this.show = true;
                this.isScroll = true;
                this.showBtn = false; 
                this.changeColor = "rgb(105,96,107)";
              }
            }else{
              e.returnValue = false;
              if (deltaY > 0) {
                this.show = true;
                this.isScroll = true;
                this.showBtn = false; 
                this.changeColor = "rgb(105,96,107)";
              }
            } 
          }
          /*console.log(e.detail);*/
          /*console.log(e.deltaY);*/
        }
      },
      mounted() {
        window.addEventListener('scroll', this.scrollFn);

        if (document.addEventListener) {  
          document.addEventListener('DOMMouseScroll', this.mouseWheelFn, false);  
        }//W3C    
        window.onmousewheel = document.onmousewheel = this.mouseWheelFn; //IE/Opera/Chrome/Safari    
      }
    }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.daily{
  color: rgb(105,96,1);
  font-size: 24px;
  text-align: left;
  font-family: Helvetica,SimSun;
  text-decoration: none;
}
.daily:hover{
  color: rgb(105,96,155);
}
.wrapper{
  width: 100%;
  height: 100%;
}
.goTop{
  transform: translateY(0%);
  transition-duration: .5s;
  transition-property: transform;
}
.scroll{
  transform: translateY(-25%);
  transition-duration: .5s;
  transition-property: transform;
}
.scroll:after{
  content:"";
  position:absolute;
  width:100%;
  height:101%;
  top:0;
  left:0;
  opacity:1;
  pointer-events:none;
  background:-webkit-linear-gradient(top,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);
  background:linear-gradient(to bottom,rgba(255,255,255,0) 0,rgba(255,255,255,1) 100%);
}
.clickStart{
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
.clickStart p{
  color: #fff;
  font-size: 14px;
}
.el-icon-arrow-down{
  color:#fff;
  font-size: 16px;
  display: block;
}
.el-icon-arrow-down:last-child{
  margin-top: -8px;
}
.fullScreen{
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
  cursor: pointer;
  z-index: 99;
}
.fullScreen img{
  margin-bottom: -1px;
  margin-right: 5px;
}
.headerBackground{
  width: 100%;
  height: 100%;
  background-image: url(../assets/bingPic.jpg);
  background-position-x: 50%; 
}
#imxiehao{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  /* color: #fff; */
  font-size: 46px;
}
#welcome{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin-top: 55px;
  color: rgb(105,96,107);
  font-size: 26px;
}
.intro{
  position: relative;
  width: 900px;
  margin: 0 auto;
  margin-top: -200px;
}
.intro p{
  padding:15px;
  color: rgb(105,96,107);
  font-size: 24px;
  text-align: left;
  font-family: Helvetica,SimSun;
  line-height: 32px;
}

@media (max-width: 500px) { 
  #imxiehao{
    width: 208px;
    font-size: 26px;
  }
  #welcome{
    width: 208px;
    font-size: 18px;
  }
  .intro{
  width: 310px;
  margin: 0 auto;
  margin-top: -200px;
  z-index: 9999;
  }
  .intro p{
    font-size: 16px;
    line-height: 24px;
  }
}
</style>

