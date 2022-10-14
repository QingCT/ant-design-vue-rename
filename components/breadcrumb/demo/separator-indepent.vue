<docs>
---
order: 6
title:
  zh-CN: 分隔符
  en-US: Configuring the Separator
---

## zh-CN

使用 `Breadcrumb.Separator` 可以自定义分隔符。

## en-US

The separator can be customized by setting the separator property: `Breadcrumb.Separator`.

</docs>

<template>
  <bma-breadcrumb separator="">
    <bma-breadcrumb-item>Location</bma-breadcrumb-item>
    <bma-breadcrumb-separator>:</bma-breadcrumb-separator>
    <bma-breadcrumb-item href="">Application Center</bma-breadcrumb-item>
    <bma-breadcrumb-separator />
    <bma-breadcrumb-item href="">Application List</bma-breadcrumb-item>
    <bma-breadcrumb-separator />
    <bma-breadcrumb-item>An Application</bma-breadcrumb-item>
  </bma-breadcrumb>
</template>
