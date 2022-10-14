<docs>
---
order: 3
title:
  zh-CN: 自定义尺寸
  en-US: Customize Size
---

## zh-CN

自定义间距大小。

## en-US

Custom spacing size.
</docs>

<template>
  <div>
    <bma-slider v-model:value="size" />
    <br />
    <br />
    <bma-space :size="size">
      <bma-button type="primary">Primary</bma-button>
      <bma-button>Default</bma-button>
      <bma-button type="dashed">Dashed</bma-button>
      <bma-button type="link">Link</bma-button>
    </bma-space>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      size: ref(8),
    };
  },
});
</script>
