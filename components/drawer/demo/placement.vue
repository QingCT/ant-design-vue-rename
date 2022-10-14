<docs>
---
order: 1
title:
  zh-CN: 自定义位置
  en-US: Custom Placement
---

## zh-CN

自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭

## en-US

The Drawer can appear from any edge of the screen.

</docs>

<template>
  <bma-radio-group v-model:value="placement" style="margin-right: 8px">
    <bma-radio value="top">top</bma-radio>
    <bma-radio value="right">right</bma-radio>
    <bma-radio value="bottom">bottom</bma-radio>
    <bma-radio value="left">left</bma-radio>
  </bma-radio-group>
  <bma-button type="primary" @click="showDrawer">Open</bma-button>
  <bma-drawer
    title="Basic Drawer"
    :placement="placement"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </bma-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { DrawerProps } from 'bmant-design-vue';
export default defineComponent({
  setup() {
    const placement = ref<DrawerProps['placement']>('left');
    const visible = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      placement,
      visible,
      showDrawer,
      onClose,
    };
  },
});
</script>
