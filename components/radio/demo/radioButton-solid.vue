<docs>
---
order: 3
title:
  zh-CN: 填底的按钮样式
  en-US: Solid radio button
---

## zh-CN

实色填底的单选按钮样式。

## en-US

Solid radio button style.

</docs>
<template>
  <div>
    <div>
      <bma-radio-group v-model:value="value1" button-style="solid">
        <bma-radio-button value="a">Hangzhou</bma-radio-button>
        <bma-radio-button value="b">Shanghai</bma-radio-button>
        <bma-radio-button value="c">Beijing</bma-radio-button>
        <bma-radio-button value="d">Chengdu</bma-radio-button>
      </bma-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <bma-radio-group v-model:value="value2" button-style="solid">
        <bma-radio-button value="a">Hangzhou</bma-radio-button>
        <bma-radio-button value="b" disabled>Shanghai</bma-radio-button>
        <bma-radio-button value="c">Beijing</bma-radio-button>
        <bma-radio-button value="d">Chengdu</bma-radio-button>
      </bma-radio-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const value1 = ref<string>('a');
    const value2 = ref<string>('c');
    return {
      value1,
      value2,
    };
  },
});
</script>
