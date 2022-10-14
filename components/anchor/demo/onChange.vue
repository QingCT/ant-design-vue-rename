<docs>
---
order: 5
title:
  zh-CN: 监听锚点链接改变
  en-US: Listening for anchor link change
---

## zh-CN

监听锚点链接改变。

## en-US

Listening for anchor link change.
</docs>

<template>
  <bma-anchor :affix="false" @change="onChange">
    <bma-anchor-link href="#components-anchor-demo-basic" title="Basic demo" />
    <bma-anchor-link href="#components-anchor-demo-static" title="Static demo" />
    <bma-anchor-link href="#API" title="API">
      <bma-anchor-link href="#Anchor-Props" title="Anchor Props" />
      <bma-anchor-link href="#Link-Props" title="Link Props" />
    </bma-anchor-link>
  </bma-anchor>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const onChange = (link: string) => {
      console.log('Anchor:OnChange', link);
    };
    return {
      onChange,
    };
  },
});
</script>
