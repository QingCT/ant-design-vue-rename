<docs>
---
order: 5
title:
  zh-CN: 动态
  en-US: Dynamic
---

## zh-CN

展示动态变化的效果。

## en-US

The count will be animated as it changes.
</docs>

<template>
  <div>
    <bma-badge :count="count">
      <bma-avatar shape="square" size="large" />
    </bma-badge>
    <bma-button-group>
      <bma-button @click="decline">
        <minus-outlined />
      </bma-button>
      <bma-button @click="increase">
        <plus-outlined />
      </bma-button>
    </bma-button-group>
  </div>
  <bma-divider />
  <bma-badge :dot="show">
    <bma-avatar shape="square" size="large" />
  </bma-badge>
  <bma-switch v-model:checked="show" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MinusOutlined,
    PlusOutlined,
  },
  setup() {
    const count = ref<number>(5);
    const decline = () => {
      if (count.value >= 1) {
        count.value--;
      }
    };

    const increase = () => {
      count.value++;
    };
    return {
      count,
      show: ref<boolean>(true),
      decline,
      increase,
    };
  },
});
</script>
