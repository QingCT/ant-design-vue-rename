<docs>
---
order: 2
title:
  zh-CN: 按钮尺寸
  en-US: Size
---

## zh-CN

按钮有大、中、小三种尺寸。

通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。

## en-US

Ant Design supports a default button size as well as a large and small size.

If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.
</docs>

<template>
  <bma-radio-group v-model:value="size">
    <bma-radio-button value="large">Large</bma-radio-button>
    <bma-radio-button value="default">Default</bma-radio-button>
    <bma-radio-button value="small">Small</bma-radio-button>
  </bma-radio-group>
  <br />
  <br />
  <bma-button type="primary" :size="size">Primary</bma-button>
  <bma-button :size="size">Normal</bma-button>
  <bma-button type="dashed" :size="size">Dashed</bma-button>
  <bma-button danger :size="size">Danger</bma-button>
  <bma-button type="link" :size="size">Link</bma-button>
  <br />
  <bma-button type="primary" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </bma-button>
  <bma-button type="primary" shape="circle" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </bma-button>
  <bma-button type="primary" shape="round" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
    Download
  </bma-button>
  <bma-button type="primary" shape="round" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
  </bma-button>
  <bma-button type="primary" :size="size">
    <template #icon>
      <DownloadOutlined />
    </template>
    Download
  </bma-button>
  <br />
</template>
<script lang="ts">
import { DownloadOutlined } from '@ant-design/icons-vue';
import type { SizeType } from 'bmant-design-vue/es/config-provider';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    DownloadOutlined,
  },
  setup() {
    return {
      size: ref<SizeType>('large'),
    };
  },
});
</script>
