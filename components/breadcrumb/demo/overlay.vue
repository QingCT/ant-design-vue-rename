<docs>
---
order: 5
title:
  zh-CN: 带下拉菜单的面包屑
  en-US: Bread crumbs with drop down menu
---

## zh-CN

面包屑支持下拉菜单。

## en-US

Breadcrumbs support drop down menu.

</docs>

<template>
  <bma-breadcrumb>
    <bma-breadcrumb-item>Ant Design Vue</bma-breadcrumb-item>
    <bma-breadcrumb-item><a href="">Component</a></bma-breadcrumb-item>
    <bma-breadcrumb-item>
      <a href="">General</a>
      <template #overlay>
        <bma-menu>
          <bma-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a>
          </bma-menu-item>
          <bma-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">Layout</a>
          </bma-menu-item>
          <bma-menu-item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">Navigation</a>
          </bma-menu-item>
        </bma-menu>
      </template>
    </bma-breadcrumb-item>
    <bma-breadcrumb-item>Button</bma-breadcrumb-item>
  </bma-breadcrumb>
</template>
