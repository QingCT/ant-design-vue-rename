<docs>
---
order: 1
title:
  zh-CN: 附加内容
  en-US: Addon
---

## zh-CN

在 TimePicker 选择框底部显示自定义的内容。

## en-US

Render addon contents to timepicker panel's bottom.

</docs>

<template>
  <bma-space direction="vertical">
    <bma-time-picker v-model:value="value" v-model:open="open" @openChange="handleOpenChange">
      <template #renderExtraFooter="{ prefixCls }">
        <bma-button size="small" type="primary" @click="handleClose">OK {{ prefixCls }}</bma-button>
      </template>
    </bma-time-picker>
    <bma-time-picker v-model:value="value" v-model:open="open2">
      <template #renderExtraFooter>
        <bma-button size="small" type="primary" @click="handleClose">OK</bma-button>
      </template>
    </bma-time-picker>
  </bma-space>
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const open = ref(false);
    const open2 = ref(false);
    const value = ref<Dayjs>();

    const handleOpenChange = (openStatus: boolean) => {
      console.log('open', openStatus);
      open.value = openStatus;
    };

    const handleClose = () => {
      open.value = false;
      open2.value = false;
    };

    return {
      value,
      open,
      open2,
      handleOpenChange,
      handleClose,
    };
  },
});
</script>
