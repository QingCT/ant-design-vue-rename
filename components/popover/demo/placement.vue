<docs>
---
order: 2
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有十二个方向。

## en-US

There are 12 `placement` options available.

</docs>
<template>
  <div id="components-popover-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <bma-popover placement="topLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>TL</bma-button>
      </bma-popover>
      <bma-popover placement="top">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>Top</bma-button>
      </bma-popover>
      <bma-popover placement="topRight">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>TR</bma-button>
      </bma-popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <bma-popover placement="leftTop">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>LT</bma-button>
      </bma-popover>
      <bma-popover placement="left">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>Left</bma-button>
      </bma-popover>
      <bma-popover placement="leftBottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>LB</bma-button>
      </bma-popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <bma-popover placement="rightTop">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>RT</bma-button>
      </bma-popover>
      <bma-popover placement="right">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>Right</bma-button>
      </bma-popover>
      <bma-popover placement="rightBottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>RB</bma-button>
      </bma-popover>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <bma-popover placement="bottomLeft">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>BL</bma-button>
      </bma-popover>
      <bma-popover placement="bottom">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>Bottom</bma-button>
      </bma-popover>
      <bma-popover placement="bottomRight">
        <template #content>
          <p>Content</p>
          <p>Content</p>
        </template>
        <template #title>
          <span>Title</span>
        </template>
        <bma-button>BR</bma-button>
      </bma-popover>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      buttonWidth: ref<number>(70),
    };
  },
});
</script>
<style>
#components-popover-demo-placement .bmant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
