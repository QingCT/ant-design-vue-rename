<docs>
---
order: 1
title:
  zh-CN: 带输入框的滑块
  en-US: Slider with InputNumber
---

## zh-CN

和 [数字输入框](/components/input-number/) 组件保持同步。

## en-US

Synchronize with [InputNumber](/components/input-number/) component.
</docs>

<template>
  <div>
    <bma-row>
      <bma-col :span="12">
        <bma-slider v-model:value="inputValue1" :min="1" :max="20" />
      </bma-col>
      <bma-col :span="4">
        <bma-input-number
          v-model:value="inputValue1"
          :min="1"
          :max="20"
          style="margin-left: 16px"
        />
      </bma-col>
    </bma-row>
    <bma-row>
      <bma-col :span="12">
        <bma-slider v-model:value="inputValue" :min="0" :max="1" :step="0.01" />
      </bma-col>
      <bma-col :span="4">
        <bma-input-number
          v-model:value="inputValue"
          :min="0"
          :max="1"
          :step="0.01"
          style="margin-left: 16px"
        />
      </bma-col>
    </bma-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const inputValue = ref<number>(0);
    const inputValue1 = ref<number>(1);
    return {
      inputValue,
      inputValue1,
    };
  },
});
</script>
<style scoped>
.code-box-demo .bmant-slider {
  margin-bottom: 16px;
}
</style>
