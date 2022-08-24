<docs>
---
order: 2.1
title:
  zh-CN: 按钮/头像/输入框/图像
  en-US: Button/Avatar/Input/Image
---

## zh-CN

骨架按钮、头像、输入框和图像。

## en-US

Skeleton Button, Avatar, Input and Image.

</docs>

<template>
  <bma-space>
    <bma-skeleton-button :active="active" :size="size" :shape="buttonShape" :block="block" />
    <bma-skeleton-avatar :active="active" :size="size" :shape="avatarShape" />
    <bma-skeleton-input style="width: 200px" :active="active" :size="size" />
  </bma-space>
  <br />
  <br />
  <bma-skeleton-button :active="active" :size="size" :shape="buttonShape" :block="block" />
  <br />
  <br />
  <bma-skeleton-image />
  <bma-divider />
  <bma-form layout="inline" style="margin: 16px 0">
    <bma-form-item label="Active">
      <bma-switch v-model:checked="active" />
    </bma-form-item>
    <bma-form-item label="Button Block">
      <bma-switch v-model:checked="block" />
    </bma-form-item>
    <bma-form-item label="Size">
      <bma-radio-group v-model:value="size">
        <bma-radio-button value="default">Default</bma-radio-button>
        <bma-radio-button value="large">Large</bma-radio-button>
        <bma-radio-button value="small">Small</bma-radio-button>
      </bma-radio-group>
    </bma-form-item>
    <bma-form-item label="Button Shape">
      <bma-radio-group v-model:value="buttonShape">
        <bma-radio-button value="default">Default</bma-radio-button>
        <bma-radio-button value="round">Round</bma-radio-button>
        <bma-radio-button value="circle">Circle</bma-radio-button>
      </bma-radio-group>
    </bma-form-item>
    <bma-form-item label="Avatar Shape">
      <bma-radio-group v-model:value="avatarShape">
        <bma-radio-button value="square">Square</bma-radio-button>
        <bma-radio-button value="circle">Circle</bma-radio-button>
      </bma-radio-group>
    </bma-form-item>
  </bma-form>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { SkeletonButtonProps, SkeletonAvatarProps } from 'bmant-design-vue';
export default defineComponent({
  setup() {
    return {
      active: ref(false),
      block: ref(false),
      size: ref<SkeletonButtonProps['size']>('default'),
      buttonShape: ref<SkeletonButtonProps['shape']>('default'),
      avatarShape: ref<SkeletonAvatarProps['shape']>('circle'),
    };
  },
});
</script>
