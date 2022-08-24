<docs>
---
order: 1
title:
  zh-CN: 内嵌菜单
  en-US: Inline menu
---

## zh-CN

垂直菜单，子菜单内嵌在菜单区域。

## en-US

Vertical menu with inline submenus.

</docs>
<template>
  <bma-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    @click="handleClick"
  >
    <bma-sub-menu key="sub1" @titleClick="titleClick">
      <template #icon>
        <MailOutlined />
      </template>
      <template #title>Navigation One</template>
      <bma-menu-item-group key="g1">
        <template #icon>
          <QqOutlined />
        </template>
        <template #title>Item 1</template>
        <bma-menu-item key="1">Option 1</bma-menu-item>
        <bma-menu-item key="2">Option 2</bma-menu-item>
      </bma-menu-item-group>
      <bma-menu-item-group key="g2" title="Item 2">
        <bma-menu-item key="3">Option 3</bma-menu-item>
        <bma-menu-item key="4">Option 4</bma-menu-item>
      </bma-menu-item-group>
    </bma-sub-menu>
    <bma-sub-menu key="sub2" @titleClick="titleClick">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>Navigation Two</template>
      <bma-menu-item key="5">Option 5</bma-menu-item>
      <bma-menu-item key="6">Option 6</bma-menu-item>
      <bma-sub-menu key="sub3" title="Submenu">
        <bma-menu-item key="7">Option 7</bma-menu-item>
        <bma-menu-item key="8">Option 8</bma-menu-item>
      </bma-sub-menu>
    </bma-sub-menu>
    <bma-sub-menu key="sub4">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>Navigation Three</template>
      <bma-menu-item key="9">Option 9</bma-menu-item>
      <bma-menu-item key="10">Option 10</bma-menu-item>
      <bma-menu-item key="11">Option 11</bma-menu-item>
      <bma-menu-item key="12">Option 12</bma-menu-item>
    </bma-sub-menu>
  </bma-menu>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { MailOutlined, QqOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'bmant-design-vue';
export default defineComponent({
  components: {
    MailOutlined,
    QqOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const selectedKeys = ref<string[]>(['1']);
    const openKeys = ref<string[]>(['sub1']);
    const handleClick: MenuProps['onClick'] = e => {
      console.log('click', e);
    };
    const titleClick = (e: Event) => {
      console.log('titleClick', e);
    };
    watch(
      () => openKeys,
      val => {
        console.log('openKeys', val);
      },
    );
    return {
      selectedKeys,
      openKeys,

      handleClick,
      titleClick,
    };
  },
});
</script>
