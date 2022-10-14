<docs>
---
order: 2
title:
  zh-CN: 其他元素
  en-US: Other elements
---

## zh-CN

分割线和不可用菜单项。

## en-US

Divider and disabled menu item.

</docs>

<template>
  <bma-dropdown>
    <a class="bmant-dropdown-link" @click.prevent>
      Hover me
      <DownOutlined />
    </a>
    <template #overlay>
      <bma-menu>
        <bma-menu-item key="0">
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </bma-menu-item>
        <bma-menu-item key="1">
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </bma-menu-item>
        <bma-menu-divider />
        <bma-menu-item key="3" disabled>3rd menu item（disabled）</bma-menu-item>
      </bma-menu>
    </template>
  </bma-dropdown>
</template>
<script lant="ts">
import { defineComponent } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
  },
});
</script>
