<template>
  <div class="main">
    <!-- 文章页面 -->
    <div class="article">
      <h3 class="title">{{ pageData.title }}</h3>
      <div class="content" v-html="pageData.content">
      </div>
    </div>
  </div>
</template>
<script>
import { getEssayById } from "../../plugins/request";
export default {
  data() {
    return {
    };
  },
  mounted() {
  },
  asyncData(context) {
    return getEssayById({
      id: context.route.query.id
    }).then(res=>{
      if(res.status=='200'){
        return{
          pageData:{ ...res.data }
        }
      }else{
        
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  justify-content: cnter;
  width: 100%;
  padding: 40px 40px;
  .title {
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  .content {
    font-size: 16px;
  }
  pre {
  display: block;
  background-color: #424242;
  color: antiquewhite;
  padding: 10px;
}
}
</style>
