<docs>
---
order: 0
title:
  zh-CN: 进度条
  en-US: Progress bar
---

## zh-CN

标准的进度条。

## en-US

A standard progress bar.

</docs>

<template>
  <bma-progress :percent="30" />
  <bma-progress :percent="50" status="active" />
  <bma-progress :percent="70" status="exception" />
  <bma-progress :percent="100" />
  <bma-progress :percent="50" :show-info="false" />
</template>
