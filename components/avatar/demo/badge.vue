<docs>
---
order: 3
title:
  zh-CN: 带徽标的头像
  en-US: With Badge
---

## zh-CN

通常用于消息提示。

## en-US

Usually used for reminders and notifications.
</docs>

<template>
  <span style="margin-right: 24px">
    <bma-badge :count="1">
      <bma-avatar shape="square">
        <template #icon><UserOutlined /></template>
      </bma-avatar>
    </bma-badge>
  </span>
  <span>
    <bma-badge dot>
      <bma-avatar shape="square">
        <template #icon><UserOutlined /></template>
      </bma-avatar>
    </bma-badge>
  </span>
</template>

<script lang="ts">
import { UserOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
});
</script>

<style>
#components-avatar-demo-badge .bmant-avatar {
  margin-top: 0;
  margin-right: 0;
}
</style>
