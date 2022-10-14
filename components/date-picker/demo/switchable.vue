<docs>
---
order: 1.1
title:
  zh-CN: 切换不同的选择器
  en-US: Switchable picker
---

## zh-CN

提供选择器，自由切换不同类型的日期选择器，常用于日期筛选场合。

## en-US

Switch in different types of pickers by Select.
</docs>
<template>
  <bma-space direction="vertical" :size="12">
    <bma-select v-model:value="type">
      <bma-select-option value="time">Time</bma-select-option>
      <bma-select-option value="date">Date</bma-select-option>
      <bma-select-option value="week">Week</bma-select-option>
      <bma-select-option value="month">Month</bma-select-option>
      <bma-select-option value="quarter">Quarter</bma-select-option>
      <bma-select-option value="year">Year</bma-select-option>
    </bma-select>
    <template v-if="type === 'time'">
      <bma-time-picker />
    </template>
    <template v-else>
      <bma-date-picker :picker="type" />
    </template>
  </bma-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      type: ref<any>('time'),
    };
  },
});
</script>
