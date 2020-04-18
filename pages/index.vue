<template>
  <div class="wrapper">
    <div v-for="(item, index) in essayData" :key="index">
      <div class="stencil">
        <h3 class="title">{{ item.title }}</h3>
        <div class="date">
          <Icon type="md-calendar" />
          <span
            >Posted on
            {{
              new Date(Date.parse(item.createTime)).toLocaleDateString()
            }}</span
          >
        </div>
        <div class="content">
          <div class="cover">
            <img :src="item.cover ? item.cover : ''" alt="" />
          </div>
          <p>
            {{ item.intro }}
          </p>
        </div>
        <div class="tagList">
          <Tag
            v-for="(item_t, index_t) in item.tag"
            :key="index_t"
            :color="colorList[index]"
            >{{ item_t }}</Tag
          >
        </div>
        <div class="getMore">
          <div class="getMore_btn" @click="toArticle(item._id)">
            Read more »
          </div>
        </div>
        <div class="divison"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { getEssayList } from "../plugins/request";
export default {
  asyncData() {
    return getEssayList({
      each: 10,
      currentPage: 1
    }).then(res => {
      const t = res.data.map(item => {
        try {
          item.tag = JSON.parse(item.tag);
        } catch (error) {}
        return item;
      });
      return {
        essayData: t
      };
    });
  },
  data() {
    return {
      colorList: ["primary", "success", "warning"]
    };
  },
  methods: {
    toArticle(id) {
      this.$router.push({
        path: "/page",
        query: {
          id: id
        }
      });
    }
  }
};
</script>
<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
}
.temp {
  max-width: 800px;
  min-width: 600px;
  padding: 20px 30px 10px 30px;
  box-sizing: border-box;
  color: white;
  box-shadow: 4px 4px 10px #888888;
  border-radius: 6px;
  margin-bottom: 28px;
  background-color: #fff;
}
.temp h3 {
  font-size: 18px;
  color: rgb(81, 90, 110);
}
.temp p {
  font-size: 14px;
  letter-spacing: 0px;
  color: rgb(81, 90, 110);
  padding: 6px 0;
}
.tagList {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
  align-items: center;
}
.date {
  font-size: 12px;
  padding: 5px 0;
  color: #999;
}

/* 首页文章模板 */
.stencil {
  width: 680px;
  padding: 10px 0;
  /* margin-bottom: 20px; */
}
.title {
  position: relative;
  color: #555;
  font-size: 22px;
  font-weight: normal;
}
.content {
  display: flex;
  padding: 20px 0;
}
.content p {
  font-size: 15px;
  color: #555;
  padding-left: 20px;
}
.cover {
  height: 100px;
  width: 100px;
  object-fit: cover;
}
.cover img {
  display: block;
  height: 100px;
  width: 100px;
}
.getMore {
  width: 100%;
  display: flex;
  justify-content: center;
}
.getMore_btn {
  margin-top: 20px;
  cursor: pointer;
  display: inline-block;
  padding: 0 20px;
  font-size: 14px;
  color: #555;
  background: #fff;
  border: 2px solid #555;
  text-decoration: none;
  border-radius: 2px;
  transition-property: background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  line-height: 2;
}
.divison {
  display: block;
  margin: 30px auto 30px;
  width: 10%;
  height: 1px;
  background: #ccc;
  text-align: center;
}
.stencil h3 {
  text-align: center;
}
.stencil .date {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.getMore_btn:hover {
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
}
</style>
