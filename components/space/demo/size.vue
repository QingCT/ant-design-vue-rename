<docs>
---
order: 2
title:
  zh-CN: 间距大小
  en-US: Space Size
---

## zh-CN

间距预设大、中、小三种大小。
通过设置 `size` 为 `large` `middle` 分别把间距设为大、中间距。若不设置 `size`，则间距为小。


## en-US

`large`, `middle` and `small` preset sizes.
Set the size to `large` and `middle` by setting size to large and middle respectively. If `size` is not set, the spacing is `small`.

</docs>

<template>
  <div>
    <bma-radio-group v-model:value="size">
      <bma-radio value="small">Small</bma-radio>
      <bma-radio value="middle">Middle</bma-radio>
      <bma-radio value="large">Large</bma-radio>
    </bma-radio-group>
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
<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref('small'),
    };
  },
});
</script>
