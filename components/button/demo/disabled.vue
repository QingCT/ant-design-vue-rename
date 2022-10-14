<docs>
---
order: 3
title:
  zh-CN: 不可用状态
  en-US: Disabled
---

## zh-CN

添加 `disabled` 属性即可让按钮处于不可用状态，同时按钮样式也会改变。

## en-US

To mark a button as disabled, add the `disabled` property to the `Button`.
</docs>

<template>
  <bma-button type="primary">Primary</bma-button>
  <bma-button type="primary" disabled>Primary(disabled)</bma-button>
  <br />
  <bma-button>Default</bma-button>
  <bma-button disabled>Default(disabled)</bma-button>
  <br />
  <bma-button type="dashed">Dashed</bma-button>
  <bma-button type="dashed" disabled>Dashed(disabled)</bma-button>
  <br />
  <bma-button type="text">Text</bma-button>
  <bma-button type="text" disabled>Text(disabled)</bma-button>
  <br />
  <bma-button type="link">Link</bma-button>
  <bma-button type="link" disabled>Link(disabled)</bma-button>
  <br />
  <bma-button danger>Danger Default</bma-button>
  <bma-button danger disabled>Danger Default(disabled)</bma-button>
  <br />
  <bma-button type="text" danger>Danger Text</bma-button>
  <bma-button type="text" danger disabled>Danger Text(disabled)</bma-button>
  <br />
  <bma-button type="link" danger>Danger Link</bma-button>
  <bma-button type="link" danger disabled>Danger Link(disabled)</bma-button>
  <br />

  <div :style="{ padding: '8px 8px 0 8px', background: 'rgb(190, 200, 200)' }">
    <bma-button ghost>Ghost</bma-button>
    <bma-button ghost disabled>Ghost(disabled)</bma-button>
  </div>
</template>
