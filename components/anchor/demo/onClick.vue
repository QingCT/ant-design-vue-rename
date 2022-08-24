<docs>
---
order: 2
title:
  zh-CN: 自定义 click 事件
  en-US: Customize the click event
---

## zh-CN

点击锚点不记录历史。

## en-US

Clicking on an anchor does not record history.
</docs>

<template>
  <bma-anchor :affix="false" @click="handleClick">
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
import type { AnchorProps } from 'bmant-design-vue';

export default defineComponent({
  setup() {
    const handleClick: AnchorProps['onClick'] = (e, link) => {
      e.preventDefault();
      console.log(link);
    };
    return {
      handleClick,
    };
  },
});
</script>
