<docs>
---
order: 9
title:
  zh-CN: 可点击
  en-US: Clickable
---

## zh-CN

设置 `v-model` 后，Steps 变为可点击状态。

## en-US

Setting `v-model` makes Steps clickable.
</docs>

<template>
  <div>
    <bma-steps v-model:current="current">
      <bma-step title="Step 1" description="This is a description." />
      <bma-step title="Step 2" description="This is a description." />
      <bma-step title="Step 3" description="This is a description." />
    </bma-steps>
    <bma-divider />
    <bma-steps v-model:current="current" direction="vertical">
      <bma-step title="Step 1" description="This is a description." />
      <bma-step title="Step 2" description="This is a description." />
      <bma-step title="Step 3" description="This is a description." />
    </bma-steps>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const current = ref<number>(0);

    return {
      current,
    };
  },
});
</script>
