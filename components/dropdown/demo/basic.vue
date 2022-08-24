<docs>
---
order: 0
title:
  zh-CN: 基本
  en-US: Basic Usage
---

## zh-CN

最简单的下拉菜单。

## en-US

The most basic dropdown menu.

</docs>

<template>
  <bma-dropdown>
    <a class="ant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <bma-menu>
        <bma-menu-item>
          <a href="javascript:;">1st menu item</a>
        </bma-menu-item>
        <bma-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </bma-menu-item>
        <bma-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </bma-menu-item>
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
