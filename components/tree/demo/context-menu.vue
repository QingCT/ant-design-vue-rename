<docs>
---
order: 9
title:
  zh-CN: 右键菜单
  en-US: Context Menu
---

## zh-CN

自定义展示右键菜单

## en-US

Custom display the context menu

</docs>

<template>
  <bma-tree v-model:expandedKeys="expandedKeys" :tree-data="treeData">
    <template #title="{ key: treeKey, title }">
      <bma-dropdown :trigger="['contextmenu']">
        <span>{{ title }}</span>
        <template #overlay>
          <bma-menu @click="({ key: menuKey }) => onContextMenuClick(treeKey, menuKey)">
            <bma-menu-item key="1">1st menu item</bma-menu-item>
            <bma-menu-item key="2">2nd menu item</bma-menu-item>
            <bma-menu-item key="3">3rd menu item</bma-menu-item>
          </bma-menu>
        </template>
      </bma-dropdown>
    </template>
  </bma-tree>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from 'vue';

const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
    ],
  },
];
export default defineComponent({
  setup() {
    const onContextMenuClick = (treeKey: string, menuKey: string | number) => {
      console.log(`treeKey: ${treeKey}, menuKey: ${menuKey}`);
    };
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    return {
      treeData,
      onContextMenuClick,
      expandedKeys,
    };
  },
});
</script>

<style></style>
