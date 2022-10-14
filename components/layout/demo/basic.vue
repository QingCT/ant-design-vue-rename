<docs>
---
order: 0
title:
  zh-CN: 基本结构
  en-US: Basic Structure
---

## zh-CN

典型的页面布局。

## en-US

Classic page layouts.

</docs>
<template>
  <bma-layout>
    <bma-layout-header>Header</bma-layout-header>
    <bma-layout-content>Content</bma-layout-content>
    <bma-layout-footer>Footer</bma-layout-footer>
  </bma-layout>

  <bma-layout>
    <bma-layout-header>Header</bma-layout-header>
    <bma-layout>
      <bma-layout-sider>Sider</bma-layout-sider>
      <bma-layout-content>Content</bma-layout-content>
    </bma-layout>
    <bma-layout-footer>Footer</bma-layout-footer>
  </bma-layout>

  <bma-layout>
    <bma-layout-header>Header</bma-layout-header>
    <bma-layout>
      <bma-layout-content>Content</bma-layout-content>
      <bma-layout-sider>Sider</bma-layout-sider>
    </bma-layout>
    <bma-layout-footer>Footer</bma-layout-footer>
  </bma-layout>

  <bma-layout>
    <bma-layout-sider>Sider</bma-layout-sider>
    <bma-layout>
      <bma-layout-header>Header</bma-layout-header>
      <bma-layout-content>Content</bma-layout-content>
      <bma-layout-footer>Footer</bma-layout-footer>
    </bma-layout>
  </bma-layout>
</template>

<style>
#components-layout-demo-basic .code-box-demo {
  text-align: center;
}
#components-layout-demo-basic .bmant-layout-header,
#components-layout-demo-basic .bmant-layout-footer {
  color: #fff;
  background: #7dbcea;
}
[data-theme='dark'] #components-layout-demo-basic .bmant-layout-header {
  background: #6aa0c7;
}
[data-theme='dark'] #components-layout-demo-basic .bmant-layout-footer {
  background: #6aa0c7;
}
#components-layout-demo-basic .bmant-layout-footer {
  line-height: 1.5;
}
#components-layout-demo-basic .bmant-layout-sider {
  color: #fff;
  line-height: 120px;
  background: #3ba0e9;
}
[data-theme='dark'] #components-layout-demo-basic .bmant-layout-sider {
  background: #3499ec;
}
#components-layout-demo-basic .bmant-layout-content {
  min-height: 120px;
  color: #fff;
  line-height: 120px;
  background: rgba(16, 142, 233, 1);
}
[data-theme='dark'] #components-layout-demo-basic .bmant-layout-content {
  background: #107bcb;
}
#components-layout-demo-basic > .code-box-demo > .bmant-layout + .bmant-layout {
  margin-top: 48px;
}
</style>
