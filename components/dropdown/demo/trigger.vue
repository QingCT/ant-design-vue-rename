<docs>
---
order: 3
title:
  zh-CN: 触发方式
  en-US: Trigger mode
---

## zh-CN

默认是移入触发菜单，可以点击触发。

## en-US

The default trigger mode is `hover`, you can change it to `click`.
</docs>

<template>
  <bma-dropdown :trigger="['click']">
    <a class="ant-dropdown-link" @click.prevent>
      Click me
      <DownOutlined />
    </a>
    <template #overlay>
      <bma-menu>
        <bma-menu-item key="0">
          <a href="http://www.alipay.com/">1st menu item</a>
        </bma-menu-item>
        <bma-menu-item key="1">
          <a href="http://www.taobao.com/">2nd menu item</a>
        </bma-menu-item>
        <bma-menu-divider />
        <bma-menu-item key="3">3rd menu item</bma-menu-item>
      </bma-menu>
    </template>
  </bma-dropdown>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
</script>
