<docs>
---
order: 4
title:
  zh-CN: 设置锚点滚动偏移量
  en-US: Set Anchor scroll offset
---

## zh-CN

锚点目标滚动到屏幕正中间。

## en-US

Anchor target scroll to screen center.
</docs>

<template>
  <bma-anchor :target-offset="targetOffset">
    <bma-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <bma-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <bma-anchor-link href="#API" title="API">
      <bma-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <bma-anchor-link href="#Link-Props" title="Link Props" />
    </bma-anchor-link>
  </bma-anchor>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const targetOffset = ref<number | undefined>(undefined);
    onMounted(() => {
      targetOffset.value = window.innerHeight / 2;
    });
    return {
      targetOffset,
    };
  },
});
</script>
