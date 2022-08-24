<docs>
---
order: 4
title:
  zh-CN: 分隔符
  en-US: Configuring the Separator
---

## zh-CN

用` separator=">" `可以自定义分隔符，或者使用slot="separator"自定义更复杂的分隔符

## en-US

The separator can be customized by setting the separator preperty: separator=">" or use
  slot="separator"

</docs>

<template>
  <bma-breadcrumb separator=">">
    <bma-breadcrumb-item>Home</bma-breadcrumb-item>
    <bma-breadcrumb-item href="">Application Center</bma-breadcrumb-item>
    <bma-breadcrumb-item href="">Application List</bma-breadcrumb-item>
    <bma-breadcrumb-item>An Application</bma-breadcrumb-item>
  </bma-breadcrumb>
  <bma-breadcrumb>
    <template #separator><span style="color: red">></span></template>
    <bma-breadcrumb-item>Home</bma-breadcrumb-item>
    <bma-breadcrumb-item href="">Application Center</bma-breadcrumb-item>
    <bma-breadcrumb-item href="">Application List</bma-breadcrumb-item>
    <bma-breadcrumb-item>An Application</bma-breadcrumb-item>
  </bma-breadcrumb>
</template>
