<docs>
---
order: 2
title:
  zh-CN: 额外操作
  en-US: Extra Actions
---

## zh-CN

在 Ant Design 规范中，操作按钮建议放在抽屉的右上角，可以使用 extra 属性来实现。

## en-US

Extra actions should be placed at corner of drawer in Ant Design, you can using `extra` prop for that.

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
    :width="500"
    title="Basic Drawer"
    :placement="placement"
    :visible="visible"
    @close="onClose"
  >
    <template #extra>
      <bma-button style="margin-right: 8px" @click="onClose">Cancel</bma-button>
      <bma-button type="primary" @click="onClose">Submit</bma-button>
    </template>
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
