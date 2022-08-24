<docs>
---
order: 3
title:
  zh-CN: 自定义时间轴点
  en-US: Custom
---

## zh-CN

可以设置为图标或其他自定义元素。

## en-US

Set a node as an icon or other custom element.

</docs>

<template>
  <bma-timeline>
    <bma-timeline-item>Create a services site 2015-09-01</bma-timeline-item>
    <bma-timeline-item>Solve initial network problems 2015-09-01</bma-timeline-item>
    <bma-timeline-item color="red">
      <template #dot><clock-circle-outlined style="font-size: 16px" /></template>
      Technical testing 2015-09-01
    </bma-timeline-item>
    <bma-timeline-item>Network problems being solved 2015-09-01</bma-timeline-item>
  </bma-timeline>
</template>
<script lang="ts">
import { ClockCircleOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ClockCircleOutlined,
  },
});
</script>
