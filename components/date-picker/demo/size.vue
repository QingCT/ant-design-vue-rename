<docs>
---
order: 8
title:
  zh-CN: 三种大小
  en-US: Three Sizes
---

## zh-CN

三种大小的输入框，若不设置，则为 `default`。

## en-US

The input box comes in three sizes. `default` will be used if `size` is omitted.

</docs>

<template>
  <bma-space direction="vertical" :size="12">
    <bma-radio-group v-model:value="size">
      <bma-radio-button value="large">Large</bma-radio-button>
      <bma-radio-button value="default">Default</bma-radio-button>
      <bma-radio-button value="small">Small</bma-radio-button>
    </bma-radio-group>
    <bma-date-picker :size="size" />
    <bma-date-picker :size="size" placeholder="Select Month" picker="month" />
    <bma-range-picker :size="size" />
    <bma-date-picker :size="size" placeholder="Select Week" picker="week" />
  </bma-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref<any>('default'),
    };
  },
});
</script>
