<docs>
---
order: 3
title:
  zh-CN: 含有辅助性文字介绍
  en-US: Description
---

## zh-CN

含有辅助性文字介绍的警告提示。

## en-US

Additional description for alert message.

</docs>

<template>
  <bma-alert message="Success Text" type="success">
    <template #description>
      <p>
        Success Description
        <span style="color: red">Success</span>
        Description Success Description
      </p>
    </template>
  </bma-alert>
  <bma-alert
    message="Info Text"
    description="Info Description Info Description Info Description Info Description"
    type="info"
  />
  <bma-alert
    message="Warning Text"
    description="Warning Description Warning Description Warning Description Warning Description"
    type="warning"
  />
  <bma-alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description"
    type="error"
  />
</template>
