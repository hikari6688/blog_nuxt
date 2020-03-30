<template>
  <div>
    <div class="container">
      <Menu mode="horizontal" theme="dark" active-key="1">
        <div class="layout-logo">
          <!-- <img src="" alt="" /> -->
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
      </Menu>
      <div class="layout-content">
        <nuxt />
      </div>
      <div class="layout-copy">
        <div class="git_link"></div>
        <div class="power_info">
          <span>Powered by Nuxt | Bulid By Azuna </span>
        </div>
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
  background-color: #f1f1f1;
  border-radius: 4px;
  overflow-y: auto;
  padding:20px 120px ;
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
.ivu-menu-item{
   display: flex;
  align-items: center;
}
</style>
