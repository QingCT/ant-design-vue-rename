<docs>
---
order: 7
title:
  zh-CN: 预设状态的标签
  en-US: Status Tag
---

## zh-CN

预设五种状态颜色，可以通过设置 `color` 为 `success`、 `processing`、`error`、`default`、`warning` 来代表不同的状态。

## en-US

We preset five different colors, you can set color property such as `success`,`processing`,`error`,`default` and `warning` to indicate specific status.

</docs>

<template>
  <bma-divider orientation="left">Without icon</bma-divider>
  <div>
    <bma-tag color="success">success</bma-tag>
    <bma-tag color="processing">processing</bma-tag>
    <bma-tag color="error">error</bma-tag>
    <bma-tag color="warning">warning</bma-tag>
    <bma-tag color="default">default</bma-tag>
  </div>
  <bma-divider orientation="left">With icon</bma-divider>
  <div>
    <bma-tag color="success">
      <template #icon>
        <check-circle-outlined />
      </template>
      success
    </bma-tag>
    <bma-tag color="processing">
      <template #icon>
        <sync-outlined :spin="true" />
      </template>
      processing
    </bma-tag>
    <bma-tag color="error">
      <template #icon>
        <close-circle-outlined />
      </template>
      error
    </bma-tag>
    <bma-tag color="warning">
      <template #icon>
        <exclamation-circle-outlined />
      </template>
      warning
    </bma-tag>
    <bma-tag color="default">
      <template #icon>
        <clock-circle-outlined />
      </template>
      waiting
    </bma-tag>
    <bma-tag color="default">
      <template #icon>
        <minus-circle-outlined />
      </template>
      stop
    </bma-tag>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import {
  CheckCircleOutlined,
  SyncOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  ClockCircleOutlined,
  MinusCircleOutlined,
} from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    CheckCircleOutlined,
    SyncOutlined,
    CloseCircleOutlined,
    ExclamationCircleOutlined,
    ClockCircleOutlined,
    MinusCircleOutlined,
  },
});
</script>
