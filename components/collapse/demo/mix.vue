<docs>
---
order: 2
title:
  zh-CN: 面板嵌套
  en-US: Nested panel
---

## zh-CN

嵌套折叠面板。

## en-US

`Collapse` is nested inside the `Collapse`.

</docs>

<template>
  <bma-collapse v-model:activeKey="activeKey" @change="changeActivekey">
    <bma-collapse-panel key="1" header="This is panel header 1">
      <bma-collapse default-active-key="4">
        <bma-collapse-panel key="4" header="This is panel nest panel">
          <p>{{ text }}</p>
        </bma-collapse-panel>
      </bma-collapse>
    </bma-collapse-panel>
    <bma-collapse-panel key="2" header="This is panel header 2">
      <p>{{ text }}</p>
    </bma-collapse-panel>
    <bma-collapse-panel key="3" header="This is panel header 3">
      <p>{{ text }}</p>
    </bma-collapse-panel>
  </bma-collapse>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const activeKey = ref([]);
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;

    const changeActivekey = (key: string) => {
      console.log(key);
    };

    return {
      activeKey,
      text,
      changeActivekey,
    };
  },
});
</script>
