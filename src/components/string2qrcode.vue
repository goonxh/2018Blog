<template>
  <div class="qrcode-page" style="text-align:left;padding:20px;">
    <h3 style="text-align: center">二维码自动生成工具</h3>
    <div class="container">
      <div class="left-content">
        <p>请输入任意字符串（网址，名称等）: </p>
        <el-input v-model="stringValue" type="textarea" style="width:300px;"></el-input>
        <p>请选择二维码颜色：（不选默认黑色）</p>
        <el-color-picker
          v-model="darkColor"
          color-format="hex">
        </el-color-picker>
        <p>请选择背景颜色：（不选默认白色）</p>
        <el-color-picker
          v-model="lightColor"
          color-format="hex">
        </el-color-picker>
        <p>请输入二维码大小：(像素)</p>
        <el-input-number controls-position="right" v-model="codeSize" size="small" :min="1" :max="1000" :step="16" style="width: 250px;"></el-input-number>
        <br>
        <el-button type="primary" size="small" @click="sendString" style="margin-top: 20px">生成</el-button>
      </div>
      <div class="right-content">
        <p> QRcode: </p>
        <img :src="QRcodeUrl" style="margin:5px 0 0 55px;" />
        <p> imgUrl: </p>
        <el-input id="imgUrl" v-model="imgUrl" type="textarea" style="width:320px;" resize="both" :autosize="{minRows: 2,maxRows: 4}"></el-input>
        <el-button @click="copy" size="mini">copy</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        stringValue: '',
        QRcodeUrl: '',
        imgUrl: '',
        darkColor: '#000000',
        lightColor: '#ffffff',
        codeSize: 116,
      }
    },
    created() {

    },
    methods: {
      sendString() {
        let url = 'https://api.xiehao.xin/string2qrcode';
        //let url = 'http://localhost:8989/string2qrcode';
        let params = {
          stringVal: this.stringValue,
          codeSize: this.codeSize,
          darkColor: this.darkColor?`${this.darkColor}ff`:undefined,
          lightColor: this.lightColor?`${this.lightColor}ff`:undefined,
        }
        this.$http.post(url, params).then((res) => {
          this.QRcodeUrl = res.body.imgUrl;
          this.imgUrl = res.body.imgUrl;
        })
      },
      copy() {
        const imgUrl = document.querySelector('#imgUrl');
        imgUrl.select();
        if (document.execCommand('copy')) {
          document.execCommand('copy');
          this.$message.success('复制成功');
        }
      }
    }
  }
</script>

<style scoped>
  .container{
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap
  }
  p{
    margin: 20px 0;
  }
</style>
