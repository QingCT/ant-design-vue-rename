<docs>
---
order: 1
title:
  zh-CN: 三种触发方式
  en-US: Three ways to trigger
---

## zh-CN

鼠标移入、聚集、点击。

## en-US

Mouse to click, focus and move in.

</docs>
<template>
  <div>
    <bma-popover title="Title" trigger="hover">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <bma-button>Hover me</bma-button>
    </bma-popover>
    <bma-popover title="Title" trigger="focus">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <bma-button>Focus me</bma-button>
    </bma-popover>
    <bma-popover title="Title" trigger="click">
      <template #content>
        <p>Content</p>
        <p>Content</p>
      </template>
      <bma-button>Click me</bma-button>
    </bma-popover>
  </div>
</template>
<style>
#components-popover-demo-triggerType .bmant-btn {
  margin-right: 8px;
}
</style>
