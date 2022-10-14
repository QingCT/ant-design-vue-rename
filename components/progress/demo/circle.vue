<docs>
---
order: 1
title:
  zh-CN: 进度圈
  en-US: Circular progress bar
---

## zh-CN

圈形的进度。

## en-US

A circular progress bar.

</docs>

<template>
  <bma-progress type="circle" :percent="75" />
  <bma-progress type="circle" :percent="70" status="exception" />
  <bma-progress type="circle" :percent="100" />
</template>
