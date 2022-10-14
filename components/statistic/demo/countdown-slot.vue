<docs>
---
order: 4
title:
  zh-CN: 倒计时组件
  en-US: Countdown
---

## zh-CN

倒计时组件使用插槽。

## en-US

Countdown component slots.

</docs>

<template>
  <bma-row :gutter="16">
    <bma-col :span="12">
      <bma-statistic-countdown :value="deadline" style="margin-right: 50px" @finish="onFinish">
        <template #title>
          <span>Countdown</span>
          <bma-tooltip placement="right">
            <template #title>
              <span>hurry up!</span>
            </template>
            <question-circle-two-tone style="margin-left: 5px" />
          </bma-tooltip>
        </template>
      </bma-statistic-countdown>
    </bma-col>
    <bma-col :span="24" style="margin-top: 32px">
      <bma-statistic-countdown
        title="Million Seconds countdown"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      >
        <template #prefix>
          <span>There's only</span>
        </template>
        <template #suffix>
          <span>left for the end.</span>
        </template>
      </bma-statistic-countdown>
    </bma-col>
  </bma-row>
</template>
<script lang="ts">
import { QuestionCircleTwoTone } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    QuestionCircleTwoTone,
  },
  setup() {
    const onFinish = () => {
      console.log('finished!');
    };
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 20 * 2,
      onFinish,
    };
  },
});
</script>
