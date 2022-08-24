<docs>
---
order: 12
title:
  zh-CN: 自定义渲染
  en-US: Custum Time
---

## zh-CN

增加自定义渲染功能，在默认 `slot` 中，你可以设置任何你想渲染的组件。

## en-US

Added custom rendering function, in the default `slot`, you can set any component you want to render.

</docs>

<template>
  <bma-space direction="vertical" :size="12">
    <bma-date-picker v-model:value="time1" placeholder="Select Time" @ok="onOk">
      <span>{{ time1 ? time1.toString() : 'SelectTime' }}</span>
    </bma-date-picker>
    <bma-range-picker v-model:value="time2">
      <span>
        {{ time2 ? time2.toString() : '请选择' }}
      </span>
    </bma-range-picker>
  </bma-space>
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const time1 = ref<Dayjs>();
    const time2 = ref<[Dayjs, Dayjs]>();

    const onOk = (value: Dayjs) => {
      console.log('onOk: ', value);
    };

    const clearTime = () => {
      time1.value = undefined;
    };

    return {
      time1,
      time2,
      onOk,
      clearTime,
    };
  },
});
</script>
