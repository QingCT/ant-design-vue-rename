<docs>
---
order: 0
title:
  zh-CN: 顶部导航
  en-US: Top Navigation
---

## zh-CN

水平的顶部导航菜单。

## en-US

Horizontal top navigation menu.

</docs>

<template>
  <bma-menu v-model:selectedKeys="current" mode="horizontal">
    <bma-menu-item key="mail">
      <template #icon>
        <mail-outlined />
      </template>
      Navigation One
    </bma-menu-item>
    <bma-menu-item key="app" disabled>
      <template #icon>
        <appstore-outlined />
      </template>
      Navigation Two
    </bma-menu-item>
    <bma-sub-menu key="sub1">
      <template #icon>
        <setting-outlined />
      </template>
      <template #title>Navigation Three - Submenu</template>
      <bma-menu-item-group title="Item 1">
        <bma-menu-item key="setting:1">Option 1</bma-menu-item>
        <bma-menu-item key="setting:2">Option 2</bma-menu-item>
      </bma-menu-item-group>
      <bma-menu-item-group title="Item 2">
        <bma-menu-item key="setting:3">Option 3</bma-menu-item>
        <bma-menu-item key="setting:4">Option 4</bma-menu-item>
      </bma-menu-item-group>
    </bma-sub-menu>
    <bma-menu-item key="alipay">
      <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    </bma-menu-item>
  </bma-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const current = ref<string[]>(['mail']);
    return {
      current,
    };
  },
});
</script>
