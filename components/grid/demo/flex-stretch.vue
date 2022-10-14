<docs>
---
order: 7
title:
  zh-CN: Flex 填充
  en-US: Flex Stretch
---

## zh-CN

Col 提供 `flex` 属性以支持填充。

## en-US

Col provides `flex` prop to support fill rest.

</docs>

<template>
  <bma-divider orientation="left">Percentage columns</bma-divider>
  <bma-row type="flex">
    <bma-col :flex="2">2 / 5</bma-col>
    <bma-col :flex="3">3 / 5</bma-col>
  </bma-row>
  <bma-divider orientation="left">Fill rest</bma-divider>
  <bma-row type="flex">
    <bma-col flex="100px">100px</bma-col>
    <bma-col flex="auto">auto</bma-col>
  </bma-row>
  <bma-divider orientation="left">Raw flex style</bma-divider>
  <bma-row type="flex">
    <bma-col flex="1 1 200px">1 1 200px</bma-col>
    <bma-col flex="0 1 300px">0 1 300px</bma-col>
  </bma-row>
</template>
