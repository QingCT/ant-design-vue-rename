<docs>
---
order: 5
title:
  zh-CN: 布局
  en-US: Use with grid
---

## zh-CN

Checkbox.Group 内嵌 Checkbox 并与 Grid 组件一起使用，可以实现灵活的布局

## en-US

We can use Checkbox and Grid Checkbox.group, to implement complex layout

</docs>

<template>
  <bma-checkbox-group v-model:value="value" style="width: 100%">
    <bma-row>
      <bma-col :span="8">
        <bma-checkbox value="A">A</bma-checkbox>
      </bma-col>
      <bma-col :span="8">
        <bma-checkbox value="B">B</bma-checkbox>
      </bma-col>
      <bma-col :span="8">
        <bma-checkbox value="C">C</bma-checkbox>
      </bma-col>
      <bma-col :span="8">
        <bma-checkbox value="D">D</bma-checkbox>
      </bma-col>
      <bma-col :span="8">
        <bma-checkbox value="E">E</bma-checkbox>
      </bma-col>
    </bma-row>
  </bma-checkbox-group>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref([]);
    return {
      value,
    };
  },
});
</script>
