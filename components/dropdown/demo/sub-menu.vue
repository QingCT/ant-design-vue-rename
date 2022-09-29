<docs>
---
order: 6
title:
  zh-CN: 多级菜单
  en-US: Cascading menu
---

## zh-CN

传入的菜单里有多个层级。

## en-US

The menu has multiple levels.

</docs>

<template>
  <bma-dropdown>
    <a class="bmant-dropdown-link" @click.prevent>
      Cascading menu
      <DownOutlined />
    </a>
    <template #overlay>
      <bma-menu>
        <bma-menu-item>1st menu item</bma-menu-item>
        <bma-menu-item>2nd menu item</bma-menu-item>
        <bma-sub-menu key="sub1" title="sub menu">
          <bma-menu-item>3rd menu item</bma-menu-item>
          <bma-menu-item>4th menu item</bma-menu-item>
        </bma-sub-menu>
        <bma-sub-menu key="sub2" title="disabled sub menu" disabled>
          <bma-menu-item>5d menu item</bma-menu-item>
          <bma-menu-item>6th menu item</bma-menu-item>
        </bma-sub-menu>
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
