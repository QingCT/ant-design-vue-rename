<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

基础列表。

## en-US

Basic list.

</docs>

<template>
  <bma-list item-layout="horizontal" :data-source="data">
    <template #renderItem="{ item }">
      <bma-list-item>
        <bma-list-item-meta
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        >
          <template #title>
            <a href="https://www.antdv.com/">{{ item.title }}</a>
          </template>
          <template #avatar>
            <bma-avatar src="https://joeschmoe.io/api/v1/random" />
          </template>
        </bma-list-item-meta>
      </bma-list-item>
    </template>
  </bma-list>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
interface DataItem {
  title: string;
}
const data: DataItem[] = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
export default defineComponent({
  setup() {
    return {
      data,
    };
  },
});
</script>
