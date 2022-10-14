<docs>
---
order: 0
title:
  zh-CN: 普通提示
  en-US: Normal prompt
---

## zh-CN

信息提醒反馈。

## en-US

Normal message for information.

</docs>

<template>
  <bma-button type="primary" @click="info">Display normal message</bma-button>
</template>
<script lang="ts">
import { message } from 'bmant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const info = () => {
      message.info('This is a normal message');
    };
    return {
      info,
    };
  },
});
</script>
