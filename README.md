# Nuxt_blog

> My sweet Nuxt.js project

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

# Record when i learn to use nuxt and Api for nuxt

> Following Records

## Router

     Nuxt.js 依据 pages 目录结构自动生成 vue-router 模块的路由配置(page下面的vue全是路由，具体使用见下面文档，在打包的时候会生成路由文件)。当你想实现路由跳转时，可以使用<nuxt-link>标签

```javascript
<template>
  <nuxt-link to="/">首页</nuxt-link>
</template>
```

> 动态路由的使用(路由传参)

    在 Nuxt.js 里面定义带参数的动态路由，需要创建对应的以下划线作为前缀的Vue文件或目录。同时下划线后面跟随的名字是传递的参数的名字，比如_id就是传递的queryName是id。脚手架自动生成的路由结构如下

```javascript
 {
     name: 'users-id',
     path: '/users/:id?',
     component: 'pages/users/_id.vue'
 },
```

    nuxt提供路由参数校验的方法,如果校验失败，会进入404或者500页面

```javascript
export default {
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  }
};
```

> 嵌套路由的使用（主视口渲染切换）

```javascript
//显示子组件的视口 类似于router-view
<nuxt-child />
```

    子路由的生成规则：
    需要在父组件的目录下新建一个同名的vue文件，而不是index.vue，在父组件中使用<nuxt-child>创建视口，根据路由渲染子组件填充视口，动态前套路由的规则同前套路由，只是两个规则融合。

> 未知嵌套深度的动态路由前嵌套

    当路由不匹配的时候可以匹配设置的组件，在当前目录新建 _.vue文件，路由识别不到的时候就会加载 _.vue组件

> 头部配置

    在nuxt.config.js中可设置全局的网页头部标签，具体使用细节见官网

```javascript
head: {
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
  ]
}
```

## 异步数据

> asyncData

    asyncData方法会在组件（限于页面组件）每次加载之前被调用。它可以在服务端或路由更新之前被调用。 在这个方法被调用的时候，第一个参数被设定为当前页面的上下文对象，你可以利用 asyncData方法来获取数据，Nuxt.js 会将 asyncData 返回的数据融合组件 data 方法返回的数据一并返回给当前组件。注意：由于asyncData方法是在组件初始化前被调用的，所以在方法内是没有办法通过 this 来引用组件的实例对象。asyncData 可以使用promise或者async await的方式，直接返回对象字面量

> 上下文对象

    作用
    1.使用 req/res(request/response) 对象
    2.获取上下文的组件实例
    3.监听 query 参数改变
    4.错误处理

## 静态资源使用

> 资源文件的引用

        在引用静态资源文件时,要注意引用的语法,从Nuxt 2.0开始，~/alias将无法在CSS文件中正确解析。你必须在url CSS引用中使用~assets（没有斜杠）或@别名，即background:url("~assets/banner.svg"),所有引用在编译后都会被解析成require,可以使用loader来转化图片文件(小文件base64处理),
        nuxt服务器启动的时候,static目录会被映射到项目跟目录下.

```JAVASCRIPT
   <template>
       <img src="~/assets/image.png">
   </template>
```
