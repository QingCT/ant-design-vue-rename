<docs>
---
order: 7
title:
  zh-CN: 单选组合
  en-US: Radio Group
---

## zh-CN

一组互斥的 Radio 配合使用。

## en-US

A group of radio components.

</docs>
<template>
  <div>
    <bma-radio-group v-model:value="value">
      <bma-radio :value="1">A</bma-radio>
      <bma-radio :value="2">B</bma-radio>
      <bma-radio :value="3">C</bma-radio>
      <bma-radio :value="4">D</bma-radio>
    </bma-radio-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<number>(1);
    return {
      value,
    };
  },
});
</script>
