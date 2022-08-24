<docs>
---
order: 3
title:
  zh-CN: 位置
  en-US: Placement
---

## zh-CN

位置有十二个方向。如需箭头指向目标元素中心，可以设置 `arrowPointAtCenter`。

## en-US

There are 12 `placement` options available. Use `arrowPointAtCenter` if you want arrow point at the center of target.

</docs>

<template>
  <div id="components-a-popconfirm-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <bma-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>TL</bma-button>
      </bma-popconfirm>
      <bma-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>Top</bma-button>
      </bma-popconfirm>
      <bma-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>TR</bma-button>
      </bma-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <bma-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>LT</bma-button>
      </bma-popconfirm>
      <bma-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>Left</bma-button>
      </bma-popconfirm>
      <bma-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>LB</bma-button>
      </bma-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <bma-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>RT</bma-button>
      </bma-popconfirm>
      <bma-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>Right</bma-button>
      </bma-popconfirm>
      <bma-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>RB</bma-button>
      </bma-popconfirm>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <bma-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>BL</bma-button>
      </bma-popconfirm>
      <bma-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>Bottom</bma-button>
      </bma-popconfirm>
      <bma-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <bma-button>BR</bma-button>
      </bma-popconfirm>
    </div>
  </div>
</template>
<script>
import { message } from 'bmant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const buttonWidth = 70;

    const text = 'Are you sure to delete this task?';

    const confirm = () => {
      message.info('Clicked on Yes.');
    };
    return {
      buttonWidth,
      text,
      confirm,
    };
  },
});
</script>
<style scoped>
#components-a-popconfirm-demo-placement .bmant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
