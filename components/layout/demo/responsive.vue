<docs>
---
order: 6
title:
  zh-CN: 响应式布局
  en-US: Responsive
---

## zh-CN

Layout.Sider 支持响应式布局。
> 说明：配置 `breakpoint` 属性即生效，视窗宽度小于 `breakpoint` 时 Sider 缩小为 `collapsedWidth` 宽度，若将 `collapsedWidth` 设置为零，会出现特殊 trigger。

## en-US

Layout.Sider supports responsive layout.
> Note: You can get a responsive layout by setting `breakpoint`, the Sider will collapse to the width of `collapsedWidth` when window width is below the `breakpoint`. And a special trigger will appear if the `collapsedWidth` is set to `0`.

</docs>
<template>
  <bma-layout>
    <bma-layout-sider
      breakpoint="lg"
      collapsed-width="0"
      @collapse="onCollapse"
      @breakpoint="onBreakpoint"
    >
      <div class="logo" />
      <bma-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <bma-menu-item key="1">
          <user-outlined />
          <span class="nav-text">nav 1</span>
        </bma-menu-item>
        <bma-menu-item key="2">
          <video-camera-outlined />
          <span class="nav-text">nav 2</span>
        </bma-menu-item>
        <bma-menu-item key="3">
          <upload-outlined />
          <span class="nav-text">nav 3</span>
        </bma-menu-item>
        <bma-menu-item key="4">
          <user-outlined />
          <span class="nav-text">nav 4</span>
        </bma-menu-item>
      </bma-menu>
    </bma-layout-sider>
    <bma-layout>
      <bma-layout-header :style="{ background: '#fff', padding: 0 }" />
      <bma-layout-content :style="{ margin: '24px 16px 0' }">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">content</div>
      </bma-layout-content>
      <bma-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </bma-layout-footer>
    </bma-layout>
  </bma-layout>
</template>
<script lang="ts">
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  },
  setup() {
    const onCollapse = (collapsed: boolean, type: string) => {
      console.log(collapsed, type);
    };

    const onBreakpoint = (broken: boolean) => {
      console.log(broken);
    };

    return {
      selectedKeys: ref<string[]>(['4']),
      onCollapse,
      onBreakpoint,
    };
  },
});
</script>

<style>
#components-layout-demo-responsive .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}

.site-layout-sub-header-background {
  background: #fff;
}

.site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout-sub-header-background {
  background: #141414;
}
</style>
