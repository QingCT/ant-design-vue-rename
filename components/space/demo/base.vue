<docs>
---
order: 0
title:
  zh-CN: 基本用法
  en-US: Basic Usage
---

## zh-CN

相邻组件水平间距。


## en-US

Crowded components horizontal spacing.

</docs>

<template>
  <bma-space>
    Space
    <bma-button type="primary">Button</bma-button>
    <bma-upload>
      <bma-button>
        <UploadOutlined />
        Click to Upload
      </bma-button>
    </bma-upload>
    <bma-popconfirm title="Are you sure delete this task?" ok-text="Yes" cancel-text="No">
      <bma-button>Confirm</bma-button>
    </bma-popconfirm>
  </bma-space>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
});
</script>
