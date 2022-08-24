<docs>
---
order: 2
title:
  zh-CN: 封顶数字
  en-US: Overflow Count
---

## zh-CN

超过 `overflowCount` 的会显示为 `${overflowCount}+`，默认的 `overflowCount` 为 `99`。

## en-US

`${overflowCount}+` is displayed when count is larger than `overflowCount`. The default value of `overflowCount` is `99`.

</docs>

<template>
  <bma-badge :count="99">
    <bma-avatar shape="square" size="large" />
  </bma-badge>
  <bma-badge :count="100">
    <bma-avatar shape="square" size="large" />
  </bma-badge>
  <bma-badge :count="99" :overflow-count="10">
    <bma-avatar shape="square" size="large" />
  </bma-badge>
  <bma-badge :count="1000" :overflow-count="999">
    <bma-avatar shape="square" size="large" />
  </bma-badge>
</template>
