<docs>
---
order: 99
title:
  zh-CN: 废弃的 Block 组
  en-US: Deprecated Button Group
debug: true
---

## zh-CN

Debug usage

## en-US

Debug usage
</docs>

<template>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <bma-button-group>
      <bma-button>Cancel</bma-button>
      <bma-button type="primary">OK</bma-button>
    </bma-button-group>
    <bma-button-group>
      <bma-button disabled>L</bma-button>
      <bma-button disabled>M</bma-button>
      <bma-button disabled>R</bma-button>
    </bma-button-group>
    <bma-button-group>
      <bma-button type="primary">L</bma-button>
      <bma-button>M</bma-button>
      <bma-button>M</bma-button>
      <bma-button type="dashed">R</bma-button>
    </bma-button-group>

    <h4>With Icon</h4>
    <bma-button-group>
      <bma-button type="primary">
        <LeftOutlined />
        Go back
      </bma-button>
      <bma-button type="primary">
        Go forward
        <RightOutlined />
      </bma-button>
    </bma-button-group>
    <bma-button-group>
      <bma-button type="primary">
        <template #icon><CloudOutlined /></template>
      </bma-button>
      <bma-button type="primary">
        <template #icon><CloudDownloadOutlined /></template>
      </bma-button>
    </bma-button-group>
  </div>
</template>
<script lang="ts">
import {
  LeftOutlined,
  RightOutlined,
  CloudDownloadOutlined,
  CloudOutlined,
} from '@ant-design/icons-vue';
export default {
  components: {
    LeftOutlined,
    RightOutlined,
    CloudDownloadOutlined,
    CloudOutlined,
  },
};
</script>
<style>
#components-button-demo-button-group > h4 {
  margin: 16px 0;
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
}
#components-button-demo-button-group > h4:first-child {
  margin-top: 0;
}
#components-button-demo-button-group .bmant-btn-group {
  margin-right: 8px;
}
</style>
```
