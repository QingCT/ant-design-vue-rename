<docs>
---
order: 4
title:
  zh-CN: 向上展开
  en-US: Placemen
---

## zh-CN

向上展开建议。

## en-US

Change the suggestions placement.

</docs>
<template>
  <bma-mentions v-model:value="value" placement="top">
    <bma-mentions-option value="afc163">afc163</bma-mentions-option>
    <bma-mentions-option value="zombieJ">zombieJ</bma-mentions-option>
    <bma-mentions-option value="yesmeck">yesmeck</bma-mentions-option>
  </bma-mentions>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value = ref<string>('');
    return {
      value,
    };
  },
});
</script>
