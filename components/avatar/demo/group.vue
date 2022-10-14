<docs>
---
order: 4
title:
  zh-CN: Avatar.Group
  en-US: Avatar.Group
---

## zh-CN

头像组合展现。

## en-US

Avatar group display.
</docs>

<template>
  <bma-avatar-group>
    <bma-avatar src="https://joeschmoe.io/api/v1/random" />
    <bma-avatar style="background-color: #f56a00">K</bma-avatar>
    <bma-tooltip title="Ant User" placement="top">
      <bma-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </bma-avatar>
    </bma-tooltip>
    <bma-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </bma-avatar>
  </bma-avatar-group>
  <bma-divider />
  <bma-avatar-group :max-count="2" :max-style="{ color: '#f56a00', backgroundColor: '#fde3cf' }">
    <bma-avatar src="https://joeschmoe.io/api/v1/random" />
    <bma-avatar style="background-color: #1890ff">K</bma-avatar>
    <bma-tooltip title="Ant User" placement="top">
      <bma-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </bma-avatar>
    </bma-tooltip>
    <bma-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </bma-avatar>
  </bma-avatar-group>
  <bma-divider />
  <bma-avatar-group
    :max-count="2"
    size="large"
    :max-style="{
      color: '#f56a00',
      backgroundColor: '#fde3cf',
    }"
  >
    <bma-avatar src="https://joeschmoe.io/api/v1/random" />
    <bma-avatar style="background-color: #1890ff">K</bma-avatar>
    <bma-tooltip title="Ant User" placement="top">
      <bma-avatar style="background-color: #87d068">
        <template #icon><UserOutlined /></template>
      </bma-avatar>
    </bma-tooltip>
    <bma-avatar style="background-color: #1890ff">
      <template #icon><UserOutlined /></template>
    </bma-avatar>
  </bma-avatar-group>
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
