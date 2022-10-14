<docs>
---
order: 7
title:
  zh-CN: 点状步骤条
  en-US: Dot Style
---

## zh-CN

包含步骤点的进度条。

## en-US

Steps with progress dot style.
</docs>

<template>
  <div>
    <bma-steps progress-dot :current="1">
      <bma-step title="Finished" description="This is a description." />
      <bma-step title="In Progress" description="This is a description." />
      <bma-step title="Waiting" description="This is a description." />
    </bma-steps>
    <bma-divider />
    <bma-steps progress-dot :current="1" direction="vertical">
      <bma-step title="Finished" description="This is a description. This is a description." />
      <bma-step title="Finished" description="This is a description. This is a description." />
      <bma-step title="In Progress" description="This is a description. This is a description." />
      <bma-step title="Waiting" description="This is a description." />
      <bma-step title="Waiting" description="This is a description." />
    </bma-steps>
  </div>
</template>
