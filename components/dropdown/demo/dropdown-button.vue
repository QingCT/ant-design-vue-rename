<docs>
---
order: 5
title:
  zh-CN: 带下拉框的按钮
  en-US: Button with dropdown menu
---

## zh-CN

左边是按钮，右边是额外的相关功能菜单。可设置 `icon` 属性来修改右边的图标。

## en-US

A button is on the left, and a related functional menu is on the right. You can set the icon property to modify the icon of right.

</docs>

<template>
  <div class="demo-dropdown-wrap">
    <bma-dropdown-button @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <bma-menu @click="handleMenuClick">
          <bma-menu-item key="1">
            <UserOutlined />
            1st menu item
          </bma-menu-item>
          <bma-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </bma-menu-item>
          <bma-menu-item key="3">
            <UserOutlined />
            3rd item
          </bma-menu-item>
        </bma-menu>
      </template>
    </bma-dropdown-button>
    <bma-dropdown-button>
      Dropdown
      <template #overlay>
        <bma-menu @click="handleMenuClick">
          <bma-menu-item key="1">
            <UserOutlined />
            1st menu item
          </bma-menu-item>
          <bma-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </bma-menu-item>
          <bma-menu-item key="3">
            <UserOutlined />
            3rd item
          </bma-menu-item>
        </bma-menu>
      </template>
      <template #icon><UserOutlined /></template>
    </bma-dropdown-button>
    <bma-dropdown-button disabled @click="handleButtonClick">
      Dropdown
      <template #overlay>
        <bma-menu @click="handleMenuClick">
          <bma-menu-item key="1">
            <UserOutlined />
            1st menu item
          </bma-menu-item>
          <bma-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </bma-menu-item>
          <bma-menu-item key="3">
            <UserOutlined />
            3rd item
          </bma-menu-item>
        </bma-menu>
      </template>
    </bma-dropdown-button>
    <bma-dropdown>
      <template #overlay>
        <bma-menu @click="handleMenuClick">
          <bma-menu-item key="1">
            <UserOutlined />
            1st menu item
          </bma-menu-item>
          <bma-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </bma-menu-item>
          <bma-menu-item key="3">
            <UserOutlined />
            3rd item
          </bma-menu-item>
        </bma-menu>
      </template>
      <bma-button>
        Button
        <DownOutlined />
      </bma-button>
    </bma-dropdown>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined, DownOutlined } from '@ant-design/icons-vue';
import type { MenuProps } from 'bmant-design-vue';

export default defineComponent({
  components: {
    UserOutlined,
    DownOutlined,
  },
  setup() {
    const handleButtonClick = (e: Event) => {
      console.log('click left button', e);
    };
    const handleMenuClick: MenuProps['onClick'] = e => {
      console.log('click', e);
    };
    return {
      handleButtonClick,
      handleMenuClick,
    };
  },
});
</script>
<style lang="less" scoped>
.demo-dropdown-wrap :deep(.bmant-dropdown-button) {
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
