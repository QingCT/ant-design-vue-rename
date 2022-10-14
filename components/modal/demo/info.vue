<docs>
---
order: 4
title:
  zh-CN: 信息提示
  en-US: Information modal dialog
---

## zh-CN

各种类型的信息提示，只提供一个按钮用于关闭。

## en-US

In the various types of information modal dialog, only one button to close dialog is provided.

</docs>

<template>
  <bma-space wrap>
    <bma-button @click="info">Info</bma-button>
    <bma-button @click="success">Success</bma-button>
    <bma-button @click="error">Error</bma-button>
    <bma-button @click="warning">Warning</bma-button>
  </bma-space>
</template>
<script lang="ts">
import { Modal } from 'bmant-design-vue';
import { defineComponent, h } from 'vue';
export default defineComponent({
  setup() {
    const info = () => {
      Modal.info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {
          console.log('ok');
        },
      });
    };
    const success = () => {
      Modal.success({
        title: 'This is a success message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
      });
    };

    const error = () => {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    };

    const warning = () => {
      Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    };

    return {
      info,
      success,
      error,
      warning,
    };
  },
});
</script>
