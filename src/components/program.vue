<template>
  <div class="wrapper">
    <div id="proIntro">
        <h3 class="proText">生产力</h3>
        <p class="proText">我也不知道为什么要用“生产力”这个词描述自己做了什么，就感觉好像很酷。</p>
    </div>
    <div class="proContent">
    <div class="proWrapper">
      <a href="http://www.showinfo.com.cn" target="_blank"><img src="../assets/showinfoWeb.jpg" alt="" width="280" class="pro">
      <div class="cover"><p>视尔<br>点击进入</p></div></a>
    </div>
    <div class="proWrapper">
      <a href="http://blog.xiehao.online" target="_blank"><img src="../assets/blogWeb.jpg" alt="" width="280" class="pro">
      <div class="cover"><p>博客<br>点击进入</p></div></a>
    </div>
    <div class="proWrapper">
      <a href="#nogo"><img src="../assets/xcx.jpg" alt="" width="280" class="pro">
      <div class="cover"><p>小程序<br>扫码体验</p></div></a>
    </div>
    <div class="clear"></div>
    </div>
    <transition name="el-zoom-in-center">
    <ul class="textList" v-show="showText">
      <li v-for="text in fiveArr">
        <a :href="text.article_href">{{ text.article_title }}<span>{{ text.article_time }}</span></a>
      </li>
    </ul>
    </transition>
    <div id="refresh" v-on:click="refreshText"><img id="refreshIcon" src="../assets/circular-arrow.png" alt="" width="25"><span>换一批阅读</span></div>
  </div>

</template>

<script>
  import {baseUrl} from "../config/utils";
  export default {
      data:() => ({
        showText:true,
        textArr:[],
        fiveArr:[]
      }),
      beforeCreate(){

      },
      created(){
        this.$http.get(`${baseUrl}/article/getArticle`).then((data) => {
            this.textArr = data.body;
            this.fiveArr = this.getArrItems(this.textArr,5)
        })
      },
      mounted(){

          /*this.fiveArr = this.getArrItems(this.textArr,5)*/
      },
      methods: {
        getArrItems:function(arr,num){
          //新建一个数组,将传入的数组复制过来,用于运算,而不要直接操作传入的数组;
          var temp_array = new Array();
          for (var index in arr) {
              temp_array.push(arr[index]);
          }
          //取出的数值项,保存在此数组
          var return_array = new Array();
          for (var i = 0; i<num; i++) {
              //判断如果数组还有可以取出的元素,以防下标越界
              if (temp_array.length>0) {
                  //在数组中产生一个随机索引
                  var arrIndex = Math.floor(Math.random()*temp_array.length);
                  //将此随机索引的对应的数组元素值复制出来
                  return_array[i] = temp_array[arrIndex];
                  //然后删掉此索引的数组元素,这时候temp_array变为新的数组
                  temp_array.splice(arrIndex, 1);
              } else {
                  //数组中数据项取完后,退出循环,比如数组本来只有10项,但要求取出20项.
                  break;
              }
          }
          return return_array;
        },
        refreshText(){
          this.showText = false;
          this.fiveArr = this.getArrItems(this.textArr,5);
          setTimeout(function(){
            this.showText = true;
          },500)
        }
     }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper{
    position: relative;
    height: 550px;
  }
  #proIntro{
      width: 900px;
      margin: 0 auto;
  }
  .proText{
    padding:15px;
    color: rgb(105,96,107);
    font-size: 24px;
    text-align: left;
    font-family: Helvetica,SimSun;
  }

  h3.proText{
    font-size: 36px;
  }

  .proContent{
    width: 906px;
    margin:0 auto;
  }
  .proWrapper{
    float: left;
    position: relative;
  }
  .cover{
    width: 282px;
    height: 140px;
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px 10px;
    border-radius: 10px;
    background-color: rgba(55,55,55,.6);
    display: none;
  }
  .cover p{
    color: #fff;
    margin-top: 25px;
  }
  .clear{
    clear: both;
  }
  .proWrapper:hover .cover{
    display: block;
  }
  .pro{
    margin: 10px 10px;
    border: 1px #eef solid;
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(200,200,200,.6);
  }
  .textList{
    width: 900px;
    margin: 0 auto;
    list-style: none;
    text-align: left;
  }
  .textList li{
    margin: 10px 15px;
    font-size: 18px;
  }
  .textList li a{
    color: #555;
    text-decoration: none;
  }
  .textList li a:hover{
    color: #109876;
  }
  .textList li a span{
    float: right;
  }
  #refreshIcon{
    margin-bottom: -5px;
    transition:1s;
  }
  #refresh{
    width: 105px;
    cursor: pointer;
    margin: 10px auto;
    position: absolute;
    top:480px;
    left: 50%;
    margin-left: -53px;
  }
  #refresh:hover #refreshIcon{
    transform:rotate(360deg);
  }
  @media (max-width: 500px) {
   .wrapper{
    height: 880px;
   }
   .proText{
    line-height: 24px;
  }
   #proIntro{
    width: 302px;
    margin: 0 auto;
    margin-top: 40px;
   }
   .proText{
    color: rgb(105,96,107);
    font-size: 16px;
   }
   h3.proText{
    font-size: 24px;
   }
   .proContent{
      width: 350px;
    }
  .proWrapper{
    float: none;
  }
  .pro{
    width: 282px;
    margin: 10px auto;
    display: block;
  }
  #refresh{
    top:810px;
  }
  .cover{
    margin: 0px 34px;
  }
  .textList{
    width: 320px;
    margin: 0 auto;
    list-style: none;
    text-align: left;
  }
  .textList li{
    margin: 10px 15px;
    font-size: 18px;
  }
  .textList li a{
    width: 310px;
    text-overflow:ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
  }
  .textList li a span{
    display: none;
  }
  }
</style>

