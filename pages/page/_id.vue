<template>
  <div class="main">
    <!-- 文章页面 -->
    <div class="article">
      <h3 class="title">{{ pageData.title }}</h3>
      <div class="content" v-html="pageData.content"></div>
    </div>
  </div>
</template>
<script>
import { getEssayById } from "../../plugins/request";
export default {
  data() {
    return {};
  },
  mounted() {},
  asyncData(context) {
    return getEssayById({
      id: context.route.query.id
    }).then(res => {
      if (res.status == "200") {
        return {
          pageData: { ...res.data }
        };
      } else {
      }
    });
  }
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: cnter;
  width: 100%;
  padding: 40px 40px;
}
.article {
  width: 100%;
}
.content {
  font-size: 16px;
  text-align: justify;
}
/deep/ pre {
  display: block;
  background-color: #424242;
  color: antiquewhite;
  padding: 10px;
  white-space: pre-wrap !important;
  word-wrap: break-word !important;
  *white-space: normal !important;
}
.title {
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
}
@media (max-width: 1200px) {
  .main {
    width: 100%;
    padding: 0;
  }
}
</style>
