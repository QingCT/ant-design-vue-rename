<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic usage
---

## zh-CN

最简单的用法，4.5 秒后自动关闭。

## en-US

The simplest usage that close the notification box after 4.5s.

</docs>

<template>
  <bma-button type="primary" @click="openNotification">Open the notification box</bma-button>
</template>
<script lang="ts">
import { notification } from 'bmant-design-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const openNotification = () => {
      notification.open({
        message: 'Notification Title',
        description:
          'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    };

    return {
      openNotification,
    };
  },
});
</script>
