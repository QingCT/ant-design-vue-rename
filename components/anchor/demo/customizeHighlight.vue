<docs>
---
order: 3
title:
  zh-CN: 自定义锚点高亮
  en-US: Customize the anchor highlight
---

## zh-CN

自定义锚点高亮。

## en-US

Customize the anchor highlight.
</docs>

<template>
  <bma-anchor :affix="false" :get-current-anchor="getCurrentAnchor">
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
    const getCurrentAnchor = () => {
      return '#components-anchor-demo-static';
    };
    return {
      getCurrentAnchor,
    };
  },
});
</script>
