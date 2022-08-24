<docs>
---
order: 5
title:
  zh-CN: 多个按钮组合
  en-US: Multiple Buttons
---

## zh-CN

按钮组合使用时，推荐使用 1 个主操作 + n 个次操作，3 个以上操作时把更多操作放到 [Dropdown.Button](/components/dropdown/#components-dropdown-demo-dropdown-button) 中组合使用。

## en-US

If you need several buttons, we recommend that you use 1 primary button + n secondary buttons, and if there are more than three operations, you can group some of them into [Dropdown.Button](/components/dropdown/#components-dropdown-demo-dropdown-button).
</docs>

<template>
  <bma-button type="primary">Primary</bma-button>
  <bma-button>secondary</bma-button>
  <bma-dropdown>
    <template #overlay>
      <bma-menu @click="handleMenuClick">
        <bma-menu-item key="1">1st item</bma-menu-item>
        <bma-menu-item key="2">2nd item</bma-menu-item>
        <bma-menu-item key="3">3rd item</bma-menu-item>
      </bma-menu>
    </template>
    <bma-button>
      Actions
      <DownOutlined />
    </bma-button>
  </bma-dropdown>
</template>
<script lang="ts">
import { DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'bmant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
  setup() {
    const handleMenuClick: MenuProps['onClick'] = e => {
      console.log('click', e);
    };
    return {
      handleMenuClick,
    };
  },
});
</script>
