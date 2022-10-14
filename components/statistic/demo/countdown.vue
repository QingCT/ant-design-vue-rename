<docs>
---
order: 3
title:
  zh-CN: 倒计时
  en-US: Countdown
---

## zh-CN

倒计时组件。

## en-US

Countdown component.

</docs>

<template>
  <bma-row :gutter="16">
    <bma-col :span="12">
      <bma-statistic-countdown
        title="Countdown"
        :value="deadline"
        style="margin-right: 50px"
        @finish="onFinish"
      />
    </bma-col>
    <bma-col :span="12">
      <bma-statistic-countdown
        title="Million Seconds"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      />
    </bma-col>
    <bma-col :span="24" style="margin-top: 32px">
      <bma-statistic-countdown title="Day Level" :value="deadline" format="D 天 H 时 m 分 s 秒" />
    </bma-col>
  </bma-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onFinish = () => {
      console.log('finished!');
    };
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      onFinish,
    };
  },
});
</script>
