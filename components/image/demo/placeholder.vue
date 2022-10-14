<docs>
---
order: 1
title:
  zh-CN: 渐进加载
  en-US: Progressive Loading
---

## zh-CN

大图使用 placeholder 渐进加载。

## en-US

Progressive when large image loading.

</docs>

<template>
  <bma-space :size="12">
    <bma-image
      :width="200"
      :src="`https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?${random}`"
    >
      <template #placeholder>
        <bma-image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
          :width="200"
          :preview="false"
        />
      </template>
    </bma-image>
    <bma-button type="primary" @click="random = Date.now()">reload</bma-button>
  </bma-space>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      random: ref(),
    };
  },
});
</script>
