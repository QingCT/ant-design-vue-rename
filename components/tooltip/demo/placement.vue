<docs>
---
order: 1
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有 12 个方向。

## en-US

There are 12 placement options available.

</docs>

<template>
  <div id="components-a-tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <bma-tooltip placement="topLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>TL</bma-button>
      </bma-tooltip>
      <bma-tooltip placement="top">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>Top</bma-button>
      </bma-tooltip>
      <bma-tooltip placement="topRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>TR</bma-button>
      </bma-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <bma-tooltip placement="leftTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>LT</bma-button>
      </bma-tooltip>
      <bma-tooltip placement="left">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>Left</bma-button>
      </bma-tooltip>
      <bma-tooltip placement="leftBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>LB</bma-button>
      </bma-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <bma-tooltip placement="rightTop">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>RT</bma-button>
      </bma-tooltip>
      <bma-tooltip placement="right">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>Right</bma-button>
      </bma-tooltip>
      <bma-tooltip placement="rightBottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>RB</bma-button>
      </bma-tooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <bma-tooltip placement="bottomLeft">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>BL</bma-button>
      </bma-tooltip>
      <bma-tooltip placement="bottom">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>Bottom</bma-button>
      </bma-tooltip>
      <bma-tooltip placement="bottomRight">
        <template #title>
          <span>prompt text</span>
        </template>
        <bma-button>BR</bma-button>
      </bma-tooltip>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      buttonWidth: 70,
    };
  },
});
</script>
<style scoped>
#components-a-tooltip-demo-placement .bmant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
