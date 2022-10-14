<docs>
---
order: 4
title:
  zh-CN: 自定义分页
  en-US: Custom Paging
---

## zh-CN

自定义分页展示。

## en-US

Custom paging display

</docs>

<template>
  <bma-carousel arrows dots-class="slick-dots slick-thumb">
    <template #customPaging="props">
      <a>
        <img :src="getImgUrl(props.i)" />
      </a>
    </template>
    <div v-for="item in 4" :key="item">
      <img :src="getImgUrl(item - 1)" />
    </div>
  </bma-carousel>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

const baseUrl =
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/main/components/carousel/demo/';
export default defineComponent({
  setup() {
    const getImgUrl = (i: number) => {
      return `${baseUrl}abstract0${i + 1}.jpg`;
    };
    return {
      getImgUrl,
    };
  },
});
</script>
<style scoped>
/* For demo */
.bmant-carousel :deep(.slick-dots) {
  position: relative;
  height: auto;
}
.bmant-carousel :deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.bmant-carousel :deep(.slick-arrow) {
  display: none !important;
}
.bmant-carousel :deep(.slick-thumb) {
  bottom: 0px;
}
.bmant-carousel :deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
.bmant-carousel :deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
.bmant-carousel :deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}
</style>
