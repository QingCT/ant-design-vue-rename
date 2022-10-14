<docs>
---
order: 1
title:
  zh-CN: 迷你版
  en-US: Mini version
---

## zh-CN

迷你版的步骤条，通过设置 `<Steps size="small">` 启用.

## en-US

By setting like this: `<Steps size="small">`, you can get a mini version.
</docs>
<template>
  <bma-steps :current="1" size="small">
    <bma-step title="Finished" />
    <bma-step title="In Progress" />
    <bma-step title="Waiting" />
  </bma-steps>
</template>
