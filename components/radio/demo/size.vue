<docs>
---
order: 8
title:
  zh-CN: 大小
  en-US: Size
---

## zh-CN

大中小三种组合，可以和表单输入框进行对应配合。

## en-US

There are three sizes available: large, medium, and small. It can coordinate with input box.

</docs>
<template>
  <div>
    <div>
      <bma-radio-group v-model:value="value1" size="large">
        <bma-radio-button value="a">Hangzhou</bma-radio-button>
        <bma-radio-button value="b">Shanghai</bma-radio-button>
        <bma-radio-button value="c">Beijing</bma-radio-button>
        <bma-radio-button value="d">Chengdu</bma-radio-button>
      </bma-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <bma-radio-group v-model:value="value2">
        <bma-radio-button value="a">Hangzhou</bma-radio-button>
        <bma-radio-button value="b">Shanghai</bma-radio-button>
        <bma-radio-button value="c">Beijing</bma-radio-button>
        <bma-radio-button value="d">Chengdu</bma-radio-button>
      </bma-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <bma-radio-group v-model:value="value3" size="small">
        <bma-radio-button value="a">Hangzhou</bma-radio-button>
        <bma-radio-button value="b">Shanghai</bma-radio-button>
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
    const value2 = ref<string>('a');
    const value3 = ref<string>('a');
    return {
      value1,
      value2,
      value3,
    };
  },
});
</script>
