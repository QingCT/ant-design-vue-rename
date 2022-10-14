<docs>
---
order: 4
title:
  zh-CN: 竖直方向的步骤条
  en-US: Vertical
---

## zh-CN

简单的竖直方向的步骤条。

## en-US

A simple step bar in the vertical direction.
</docs>

<template>
  <bma-steps direction="vertical" :current="1">
    <bma-step title="Finished" description="This is a description." />
    <bma-step title="In Progress" description="This is a description." />
    <bma-step title="Waiting" description="This is a description." />
  </bma-steps>
</template>
