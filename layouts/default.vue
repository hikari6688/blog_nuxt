<template>
  
  <div>
    <div class="container">
         <div class="animals">
          <div class="ani_item" @click="back">
            <img src="../static/20200403204514_4ePLm.jpeg" alt="" />
          </div>
          <div class="ani_item">
            <img src="../static/20200403204520_H2cti.jpeg" alt="" />
          </div>
          <div class="ani_item">
            <img src="../static/20200403204526_ESVUY.jpeg" alt="" />
          </div>
        </div>
      <div class="left">
        <div class="avatar">
          <img src="../static/avatar.jpg" alt="" />
        </div>
        <p class="username">Azuna</p>
        <p class="intro">助けなどいない&nbsp;&nbsp;强くなった</p>
        <div class="stat">
          <div>
            <span>14</span>
            <span>日志</span>
          </div>
          <div class="bd_line">
            <span>5</span>
            <span>分类</span>
          </div>
          <div>
            <span>6</span>
            <span>标签</span>
          </div>
        </div>
        <div class="link">
          <Icon type="logo-snapchat" style="color:white;margin-right:6px;" />
          <a href="https://github.com/hikari6688" target="_blank">GitHub</a>
        </div>
      </div>
      <div class="right">
        <transition name="slide-fade">
          <nuxt />
        </transition>
      </div>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    back(){
      if(this.$route.fullPath!='/'){
        this.$router.go(-1);
      }
    }
  }
}
</script>

<style scoped>

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
a {
  color: #f5f7f9;
}
.container {
  display: flex;
  position: relative;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
}
html,
body {
  min-height: 100vh;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  color: white;
  text-align: center;
  line-height: 30px;
  font-size: 12px;
  display: flex;
  justify-content: center;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
}
.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}
.layout-breadcrumb {
  padding: 10px 15px 0;
}
.layout-content {
  /* min-height: 200px; */
  position: absolute;
  top: 60px;
  bottom: 40px;
  left: 0;
  right: 0;
  overflow: hidden;
  /* background-color: #f1f1f1; */
  border-radius: 4px;
  overflow-y: auto;
  padding: 20px 120px;
}
.layout-content-main {
  padding: 10px;
}
.layout-copy {
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  height: 40px;
  background-color: #545a6d;
  display: flex;
  padding: 15px 32px;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-size: 12px;
}
.layout-nav > ivu-menu-item i,
.icon_set {
  font-size: 16px;
  color: white;
}
.ivu-menu-item {
  display: flex;
  align-items: center;
}
.left {
  position: fixed;
  top: 0;
  left: 0;
  width: 20%;
  max-width: 300px;
  background-color: #222222;
  height: 100vh;
  display: flex;
  padding: 50px 0;
  flex-direction: column;
  align-items: center;
}

.right {
  width: 80%;
  position: absolute;
  padding: 0 10%;
  right: 0;
  /* padding-left: 0 50px; */
  flex: 1;
}
.avatar {
  height: 100px;
  width: 100px;
  overflow: hidden;
}
.avatar img {
  height: 100px;
  width: 100px;
  border-radius: 50px;
}
.username {
  padding: 5px 0;
  font-size: 20px;
  font-weight: 600;
  color: white;
}
.intro {
  padding: 5px 0;
  font-size: 16px;
  color: rgb(221, 219, 219);
  font-weight: 500;
}
.stat {
  display: flex;
}
.stat span {
  color: #d7dde4;
  font-size: 16px;
  font-weight:500 ;
}
.stat > div {
  display: flex;
  flex-direction: column;
  padding: 0 5px;
  text-align: center;
}
.bd_line {
  border-left: 1px solid gray;
  border-right: 1px solid gray;
}
.link {
  display: flex;
  align-items: center;
  padding: 10px 0 2px 0;
  font-size: 16px;
}

.link:hover {
  transition: linear all 0.3;
  border-bottom: 3px solid rgb(255, 254, 242);
}
.ani_item img {
  display: block;
  width: 100px;
  height: 100px;
}
.animals {
  position: fixed;
  left:20%;
  top: 20px;
  height: 100vh;
  z-index: 999;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
