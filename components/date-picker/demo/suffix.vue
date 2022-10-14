<docs>
---
order: 13
title:
  zh-CN: 后缀图标
  en-US: Suffix
---

## zh-CN

通过 `suffixIcon` 自定义后缀图标

## en-US

Customize the suffix icon through `suffixIcon`

</docs>

<template>
  <bma-space direction="vertical">
    <bma-date-picker @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </bma-date-picker>
    <bma-date-picker placeholder="Select month" picker="month" @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </bma-date-picker>
    <bma-range-picker @change="onRangeChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </bma-range-picker>
    <bma-date-picker placeholder="Select week" picker="week" @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </bma-date-picker>
    <bma-date-picker suffix-icon="ab" @change="onChange" />
    <bma-date-picker
      suffix-icon="ab"
      placeholder="Select month"
      picker="month"
      @change="onChange"
    />
    <bma-range-picker suffix-icon="ab" @change="onRangeChange" />
    <bma-date-picker suffix-icon="ab" placeholder="Select week" picker="week" @change="onChange" />
  </bma-space>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { Dayjs } from 'dayjs';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    const onChange = (date: Dayjs | string, dateString: string) => {
      console.log(date, dateString);
    };

    const onRangeChange = (date: [Dayjs, Dayjs], dateString: [string, string]) => {
      console.log(date, dateString);
    };
    return {
      onChange,
      onRangeChange,
    };
  },
});
</script>
