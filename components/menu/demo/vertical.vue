<docs>
---
order: 3
title:
  zh-CN: 垂直菜单
  en-US: Vertical menu
---

## zh-CN

子菜单是弹出的形式。

## en-US

Submenus open as pop-ups.

</docs>

<template>
  <bma-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="vertical"
    @click="handleClick"
  >
    <bma-menu-item key="1">
      <template #icon>
        <MailOutlined />
      </template>
      Navigation One
    </bma-menu-item>
    <bma-menu-item key="2">
      <template #icon>
        <CalendarOutlined />
      </template>
      Navigation Two
    </bma-menu-item>
    <bma-sub-menu key="sub1">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Three</template>
      <bma-menu-item key="3">Option 3</bma-menu-item>
      <bma-menu-item key="4">Option 4</bma-menu-item>
      <bma-sub-menu key="sub1-2" title="Submenu">
        <bma-menu-item key="5">Option 5</bma-menu-item>
        <bma-menu-item key="6">Option 6</bma-menu-item>
      </bma-sub-menu>
    </bma-sub-menu>
    <bma-sub-menu key="sub2">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Four</template>
      <bma-menu-item key="7">Option 7</bma-menu-item>
      <bma-menu-item key="8">Option 8</bma-menu-item>
      <bma-menu-item key="9">Option 9</bma-menu-item>
      <bma-menu-item key="10">Option 10</bma-menu-item>
    </bma-sub-menu>
  </bma-menu>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuProps } from 'bmant-design-vue';

export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      selectedKeys: [],
      openKeys: [],
    });
    const handleClick: MenuProps['onClick'] = menuInfo => {
      console.log('click ', menuInfo);
    };
    return {
      ...toRefs(state),
      handleClick,
    };
  },
});
</script>
