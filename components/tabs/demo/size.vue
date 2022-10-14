<docs>
---
order: 5
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

## en-US
Large size tabs are usally used in page header, and small size could be used in Modal.

</docs>

<template>
  <div>
    <bma-radio-group v-model:value="size" style="margin-bottom: 16px">
      <bma-radio-button value="small">Small</bma-radio-button>
      <bma-radio-button value="default">Default</bma-radio-button>
      <bma-radio-button value="large">Large</bma-radio-button>
    </bma-radio-group>
    <bma-tabs v-model:activeKey="activeKey" :size="size">
      <bma-tab-pane key="1" tab="Tab 1">Content of tab 1</bma-tab-pane>
      <bma-tab-pane key="2" tab="Tab 2">Content of tab 2</bma-tab-pane>
      <bma-tab-pane key="3" tab="Tab 3">Content of tab 3</bma-tab-pane>
    </bma-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TabsProps } from 'bmant-design-vue';

export default defineComponent({
  setup() {
    const size = ref<TabsProps['size']>('small');
    const activeKey = ref('1');
    return {
      size,
      activeKey,
    };
  },
});
</script>
