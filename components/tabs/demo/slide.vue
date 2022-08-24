<docs>
---
order: 3
title:
  zh-CN: 滑动
  en-US: Slide
---

## zh-CN

可以左右、上下滑动，容纳更多标签。

## en-US

In order to fit in more tabs, they can slide left and right (or up and down).

</docs>

<template>
  <div>
    <bma-radio-group v-model:value="mode" :style="{ marginBottom: '8px' }">
      <bma-radio-button value="top">Horizontal</bma-radio-button>
      <bma-radio-button value="left">Vertical</bma-radio-button>
    </bma-radio-group>
    <bma-tabs
      v-model:activeKey="activeKey"
      :tab-position="mode"
      :style="{ height: '200px' }"
      @tabScroll="callback"
    >
      <bma-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`">Content of tab {{ i }}</bma-tab-pane>
    </bma-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TabsProps } from 'bmant-design-vue';

export default defineComponent({
  setup() {
    const mode = ref<TabsProps['tabPosition']>('top');
    const activeKey = ref(1);
    const callback: TabsProps['onTabScroll'] = val => {
      console.log(val);
    };
    return {
      mode,
      callback,
      activeKey,
    };
  },
});
</script>
