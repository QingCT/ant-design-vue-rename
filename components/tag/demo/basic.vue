<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

基本标签的用法，可以通过添加 `closable` 变为可关闭标签。可关闭标签具有 `close` 两个事件。

## en-US
Usage of basic Tag, and it could be closable by set `closable` property. Closable Tag supports `close` events.

</docs>

<template>
  <div>
    <bma-tag>Tag 1</bma-tag>
    <bma-tag><a href="https://github.com/vueComponent/ant-design">Link</a></bma-tag>
    <bma-tag closable @close="log">Tag 2</bma-tag>
    <bma-tag closable @close.prevent>Prevent Default</bma-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const log = (e: MouseEvent) => {
      console.log(e);
    };

    return {
      log,
    };
  },
});
</script>
