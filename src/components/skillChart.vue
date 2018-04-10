<template>
  <div>
    <div id="textIntro">
      <h3 class="skillText">作为前端</h3>
      <p class="skillText">我想画一个饼图来描述一下我的技能点数，从业一年半，很多东西都学得不尽人意...</p>
    </div>
    
    <div class="skillContent">
      <div id="main"></div>
    </div>
  </div>
</template>

<script>
    import echarts from 'echarts'
      export default {
        name: '',
        data () {
            return {
                charts: '',
                opinion:['vue.js','node.js','小程序','HTML5','CSS3','数据库'],
                opinionData:[
                  {value:30, name:'vue.js'},
                  {value:10, name:'node.js'},
                  {value:15, name:'小程序'},
                  {value:20, name:'HTML5'},
                  {value:20, name:'CSS3'},
                  {value:5, name:'数据库'}
                ]
            }
        },
        methods:{
            drawPie(id){
               this.charts = echarts.init(document.getElementById(id))
               this.charts.setOption({
                 tooltip: {
                   trigger: 'item',
                   formatter: ' {a} <br/> {b} : {d}% '
                 },
                 legend: {
                   orient: 'vertical',
                   x: 'left',
                   data:this.opinion
                 },
                 series: [
                   {
                     name:'技能点分配',
                     type:'pie',
                     radius:['50%','70%'],
                     avoidLabelOverlap: false,
                     label: {
                       normal: {
                         show: false,
                         position: 'center'
                       },
                       emphasis: {
                         show: true,
                         textStyle: {
                              fontSize: '24',
                              fontWeight: 'bold'
                         }
                       }
                     },
                     labelLine: {
                       normal: {
                         show: false
                       }
                     },
                     data:this.opinionData
                   }
                 ]
               })
            }
        },
      //调用
        mounted(){
            this.$nextTick(function() {
                this.drawPie('main')
            })
        }
    }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .skillContent{
    margin-top: 30px;
    margin-bottom: 50px;
    padding: 50px;
    background-color: rgba(222,222,222,.5);
  }
  #main{
    width: 700px;
    height: 400px; 
    margin: 0 auto;
  }
  .skillText{
    padding:15px;
    color: rgb(105,96,107);
    font-size: 24px;
    text-align: left;
    font-family: Helvetica,SimSun;
  }
  #textIntro{
    width: 900px;
    margin: 0 auto;
  }
  h3.skillText{
    font-size: 36px;
  }
  @media (max-width: 500px) { 
   #main{
    width: 320px;
    height: 200px;
   }
   #textIntro{
    width: 310px;
    margin: 0 auto;
    margin-top: 80px;
  }
   .skillText{
    color: rgb(105,96,107);
    font-size: 16px;
    line-height: 24px;
  }
  h3.skillText{
    font-size: 24px;
  }
  }
</style>

