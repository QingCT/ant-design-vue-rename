<docs>
---
order: 11
title:
  zh-CN: 自定义页签头
  en-US: Customized
---

## zh-CN
自定义页签头

## en-US

Customized bar of tab.

</docs>

<template>
  <div>
    <bma-tabs v-model:activeKey="activeKey">
      <bma-tab-pane key="1" tab="Tab 1" style="height: 200px">Content of Tab Pane 1</bma-tab-pane>
      <bma-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</bma-tab-pane>
      <bma-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</bma-tab-pane>
      <template #renderTabBar="{ DefaultTabBar, ...props }">
        <component :is="DefaultTabBar" v-bind="props" :style="{ opacity: 0.5 }" />
      </template>
    </bma-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      activeKey: ref('1'),
    };
  },
});
</script>
