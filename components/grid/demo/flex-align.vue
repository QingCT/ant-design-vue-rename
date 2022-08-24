<docs>
---
order: 5
title:
  zh-CN: 对齐
  en-US: Alignment
---

## zh-CN

子元素垂直对齐。

## en-US

Child elements vertically aligned.

</docs>

<template>
  <p>Align Top</p>
  <bma-row type="flex" justify="center" align="top">
    <bma-col :span="4">
      <p class="height-100">col-4</p>
    </bma-col>
    <bma-col :span="4">
      <p class="height-50">col-4</p>
    </bma-col>
    <bma-col :span="4">
      <p class="height-120">col-4</p>
    </bma-col>
    <bma-col :span="4">
      <p class="height-80">col-4</p>
    </bma-col>
  </bma-row>

  <p>Align Center</p>
  <bma-row type="flex" justify="space-around" align="middle">
    <bma-col :span="4">
      <p class="height-100">col-4</p>
    </bma-col>
    <bma-col :span="4">
      <p class="height-50">col-4</p>
    </bma-col>
    <bma-col :span="4">
      <p class="height-120">col-4</p>
    </bma-col>
    <bma-col :span="4">
      <p class="height-80">col-4</p>
    </bma-col>
  </bma-row>

  <p>Align Bottom</p>
  <bma-row type="flex" justify="space-between" align="bottom">
    <bma-col :span="4">
      <p class="height-100">col-4</p>
    </bma-col>
    <bma-col :span="4">
      <p class="height-50">col-4</p>
    </bma-col>
    <bma-col :span="4">
      <p class="height-120">col-4</p>
    </bma-col>
    <bma-col :span="4">
      <p class="height-80">col-4</p>
    </bma-col>
  </bma-row>
</template>
