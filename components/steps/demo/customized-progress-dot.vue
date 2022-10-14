<docs>
---
order: 8
title:
  zh-CN: 自定义点状步骤条
  en-US: Customized Dot Style
---

## zh-CN

为点状步骤条增加自定义展示。

## en-US

You can customize the display for Steps with progress dot style.
</docs>

<template>
  <div>
    <bma-steps :current="1">
      <template #progressDot="{ index, status, prefixCls }">
        <bma-popover>
          <template #content>
            <span>step {{ index }} status: {{ status }}</span>
          </template>
          <span :class="`${prefixCls}-icon-dot`" />
        </bma-popover>
      </template>
      <bma-step title="Finished" description="You can hover on the dot." />
      <bma-step title="In Progress" description="You can hover on the dot." />
      <bma-step title="Waiting" description="You can hover on the dot." />
      <bma-step title="Waiting" description="You can hover on the dot." />
    </bma-steps>
  </div>
</template>
