<template>
  <div class="wrapper">
    <div class="temp" v-for="(item, index) in essayData" :key="index">
      <h3>{{ item.title }}</h3>
      <p>{{ item.intro }}</p>
      <div>
        <div class="tagList">
          <Tag
            v-for="(item_t, index_t) in item.tag"
            :key="index_t"
            :color="colorList[index]"
            >{{ item_t }}</Tag
          >
        </div>
        <div class="date">
          <Icon type="md-time" />
          <span>{{ new Date(Date.parse(item.createTime)).toLocaleDateString()}}</span>
        </div>
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
      console.log(res);
      const t = res.data.map(item => {
        item.tag = JSON.parse(item.tag);
        return item;
      });
      return {
        essayData:t
      };
    });
  },
  data() {
    return {
      colorList: ["primary", "success", "warning"]
    };
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
}
.date {
  font-size: 14px;
  padding: 5px 0;
  color: rgb(81, 90, 110);
}
</style>
