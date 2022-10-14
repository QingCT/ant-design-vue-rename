<docs>
---
order: 3
title:
  zh-CN: 网格型内嵌卡片
  en-US: Grid card
---

## zh-CN

一种常见的卡片内容区隔模式。

## en-US

Grid style card content.

</docs>

<template>
  <bma-card title="Card Title">
    <bma-card-grid style="width: 25%; text-align: center">Content</bma-card-grid>
    <bma-card-grid style="width: 25%; text-align: center" :hoverable="false">Content</bma-card-grid>
    <bma-card-grid style="width: 25%; text-align: center">Content</bma-card-grid>
    <bma-card-grid style="width: 25%; text-align: center">Content</bma-card-grid>
    <bma-card-grid style="width: 25%; text-align: center">Content</bma-card-grid>
    <bma-card-grid style="width: 25%; text-align: center">Content</bma-card-grid>
    <bma-card-grid style="width: 25%; text-align: center">Content</bma-card-grid>
    <bma-card-grid style="width: 25%; text-align: center">Content</bma-card-grid>
  </bma-card>
</template>
