<docs>
---
order: 5
title:
  zh-CN: 标签
  en-US: Label
---

## zh-CN

使用 `label` 标签单独展示时间。

## en-US

Use `label` show time alone.

</docs>

<template>
  <bma-radio-group v-model:value="mode" style="margin-bottom: 20px">
    <bma-radio value="left">Left</bma-radio>
    <bma-radio value="right">Right</bma-radio>
    <bma-radio value="alternate">Alternate</bma-radio>
  </bma-radio-group>
  <bma-timeline :mode="mode">
    <bma-timeline-item label="2015-09-01">Create a services</bma-timeline-item>
    <bma-timeline-item label="2015-09-01 09:12:11">
      Solve initial network problems
    </bma-timeline-item>
    <bma-timeline-item>Technical testing</bma-timeline-item>
    <bma-timeline-item>
      <template #label><strong style="color: red">2015-09-01 09:12:11</strong></template>
      Network problems being solved
    </bma-timeline-item>
  </bma-timeline>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { TimelineProps } from 'bmant-design-vue';
export default defineComponent({
  setup() {
    return {
      mode: ref<TimelineProps['mode']>('left'),
    };
  },
});
</script>
