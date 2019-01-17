<template>
  <div class="ooxxpic-page" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="ooxx-wrapper">
      <div class="item"  v-for="(item,index) in ooxxpicList" :key="index">
        <div class="item-content">
          <viewer class="viewer-img">
            <img :src="item" alt="" width="100%">
          </viewer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {xpppUrl} from "../config/utils";

  export default {
    data() {
      return {
        ooxxpicList:[],
        fullscreenLoading: false,
      }
    },
    created() {
      this.fullscreenLoading = true;
      this.getOoxxPic();
    },
    methods:{
      getOoxxPic() {
        this.$http.get(`${xpppUrl}/ooxxpic`).then((res)=>{
          this.ooxxpicList = res.body.map((item) =>{
            if(item.lastIndexOf('//') !== 0) {
              return item.substring(item.lastIndexOf('//'), item.length);
            }else{
              return item;
            }
          });
        }).catch((err) =>{
          console.log(err)
        }).finally(()=>{
          this.fullscreenLoading = false;
        })
      },
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
  .viewer-img img {
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
