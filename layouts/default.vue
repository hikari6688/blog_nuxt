<template>
  <div>
    <div class="container">
      <!-- <Menu mode="horizontal" theme="dark" active-key="1">
        <div class="layout-logo">
          <Icon type="social-snapchat-outline"></Icon>
          <span>Azuna</span>
        </div>
        <div class="layout-nav" >
          <Menu-item key="1">
            <Icon type="logo-javascript" class="icon_set"></Icon>
            <span>前端</span>
          </Menu-item>
          <Menu-item key="2">
            <Icon type="logo-nodejs" class="icon_set"></Icon>
            <span>服务端</span>
          </Menu-item>
          <Menu-item key="3">
            <Icon type="ios-leaf" class="icon_set"></Icon>
            <span>语言</span>
          </Menu-item>
          <Menu-item key="4">
            <Icon type="logo-snapchat" class="icon_set"></Icon>
            <span>记录</span>
          </Menu-item>
        </div>
      </Menu> -->
      <div class="left">
        <div class="avatar">
          <img src="../static/avatar.jpg" alt="" />
        </div>
        <p class="username">Azuna</p>
        <p class="intro">助けなどいない&nbsp;&nbsp;&nbsp;&nbsp;强くなった</p>
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
          <a href="https://github.com/hikari6688" target="_blank">GitHub</a>
        </div>
      </div>
      <div class="right">
        <nuxt />
      </div>
    </div>
  </div>
</template>
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
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
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
  right: 0;
  padding-left: 0 50px;
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
  font-size: 18px;
  color: white;
}
.intro {
  padding: 5px 0;
  font-size: 14px;
  color: rgb(221, 219, 219);
}
.stat {
  display: flex;
}
.stat span {
  color: #d7dde4;
  font-size: 14px;
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
  transition: linear all 0.2;
  border-bottom: 2px solid white;
}
</style>
