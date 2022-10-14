<docs>
---
order: 4
title:
  zh-CN: 附加内容
  en-US: Extra Content
---

## zh-CN

可以在页签右边添加附加操作。

## en-US

You can add extra actions to the right of Tabs.

</docs>

<template>
  <bma-tabs v-model:activeKey="activeKey">
    <bma-tab-pane key="1" tab="Tab 1">Content of tab 1</bma-tab-pane>
    <bma-tab-pane key="2" tab="Tab 2">Content of tab 2</bma-tab-pane>
    <bma-tab-pane key="3" tab="Tab 3">Content of tab 3</bma-tab-pane>
    <template #leftExtra>
      <bma-button class="tabs-extra-demo-button">Left Extra Action</bma-button>
    </template>
    <template #rightExtra>
      <bma-button>Right Extra Action</bma-button>
    </template>
  </bma-tabs>
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
<style>
.tabs-extra-demo-button {
  margin-right: 16px;
}

.bmant-row-rtl .tabs-extra-demo-button {
  margin-right: 0;
  margin-left: 16px;
}
</style>
