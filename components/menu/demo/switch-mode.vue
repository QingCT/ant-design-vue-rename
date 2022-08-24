<docs>
---
order: 5
title:
  zh-CN: 切换菜单类型
  en-US: Switch the menu type
---

## zh-CN

展示动态切换模式。

## en-US

Show the dynamic switching mode (between `inline` and `vertical`).

</docs>

<template>
  <div>
    <bma-switch :checked="mode === 'vertical'" @change="changeMode" />
    Change Mode
    <span class="bmant-divider" style="margin: 0 1em" />
    <bma-switch :checked="theme === 'dark'" @change="changeTheme" />
    Change Theme
    <br />
    <br />
    <bma-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      :mode="mode"
      :theme="theme"
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
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue';
import type { MenuMode, MenuTheme } from 'bmant-design-vue';
export default defineComponent({
  components: {
    MailOutlined,
    CalendarOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      mode: 'inline' as MenuMode,
      theme: 'light' as MenuTheme,
      selectedKeys: ['1'],
      openKeys: ['sub1'],
    });
    const changeMode = (checked: boolean) => {
      state.mode = checked ? 'vertical' : 'inline';
    };
    const changeTheme = (checked: boolean) => {
      state.theme = checked ? 'dark' : 'light';
    };
    return {
      ...toRefs(state),
      changeMode,
      changeTheme,
    };
  },
});
</script>
