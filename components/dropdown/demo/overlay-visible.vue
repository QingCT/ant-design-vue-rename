<docs>
---
order: 7
title:
  zh-CN: 菜单隐藏方式
  en-US: The way of hiding menu.
---

## zh-CN

默认是点击关闭菜单，可以关闭此功能。

## en-US

The default is to close the menu when you click on menu items, this feature can be turned off.

</docs>

<template>
  <bma-dropdown v-model:visible="visible">
    <a class="bmant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <bma-menu @click="handleMenuClick">
        <bma-menu-item key="1">Clicking me will not close the menu.</bma-menu-item>
        <bma-menu-item key="2">Clicking me will not close the menu also.</bma-menu-item>
        <bma-menu-item key="3">Clicking me will close the menu</bma-menu-item>
      </bma-menu>
    </template>
  </bma-dropdown>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'bmant-design-vue';

export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const visible = ref(false);
    const handleMenuClick: MenuProps['onClick'] = e => {
      if (e.key === '3') {
        visible.value = false;
      }
    };
    return {
      visible,
      handleMenuClick,
    };
  },
});
</script>
