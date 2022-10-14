<docs>
---
order: 3
title:
  zh-CN: 对齐
  en-US: Align
---

## zh-CN

设置对齐模式。

## en-US

Config item align.

</docs>

<template>
  <div class="space-align-container">
    <div class="space-align-block">
      <bma-space align="center">
        center
        <bma-button type="primary">Primary</bma-button>
        <span class="mock-block">Block</span>
      </bma-space>
    </div>
    <div class="space-align-block">
      <bma-space align="start">
        start
        <bma-button type="primary">Primary</bma-button>
        <span class="mock-block">Block</span>
      </bma-space>
    </div>
    <div class="space-align-block">
      <bma-space align="end">
        end
        <bma-button type="primary">Primary</bma-button>
        <span class="mock-block">Block</span>
      </bma-space>
    </div>
    <div class="space-align-block">
      <bma-space align="baseline">
        baseline
        <bma-button type="primary">Primary</bma-button>
        <span class="mock-block">Block</span>
      </bma-space>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({});
</script>

<style scoped>
.space-align-container {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}
.space-align-block {
  margin: 8px 4px;
  border: 1px solid #40a9ff;
  padding: 4px;
  flex: none;
}
.space-align-block .mock-block {
  display: inline-block;
  padding: 32px 8px 16px;
  background: rgba(150, 150, 150, 0.2);
}
</style>
