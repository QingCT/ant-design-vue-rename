<docs>
---
order: 1
title:
  zh-CN: 类型
  en-US: Type
---

## zh-CN

支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。

## en-US

Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.
</docs>

<template>
  <bma-avatar>
    <template #icon>
      <UserOutlined />
    </template>
  </bma-avatar>
  <bma-avatar>U</bma-avatar>
  <bma-avatar>USER</bma-avatar>
  <bma-avatar src="https://joeschmoe.io/api/v1/random" />
  <bma-avatar style="color: #f56a00; background-color: #fde3cf">U</bma-avatar>
  <bma-avatar style="background-color: #87d068">
    <template #icon>
      <UserOutlined />
    </template>
  </bma-avatar>
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
