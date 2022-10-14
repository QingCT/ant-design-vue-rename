<docs>
---
order: 6
title:
  zh-CN: 顶部公告
  en-US: Banner
---

## zh-CN

最简单的用法，适用于简短的警告提示。

## en-US

Display Alert as a banner at top of page.

</docs>

<template>
  <bma-alert message="Warning text" banner />
  <br />
  <bma-alert
    message="Very long warning text warning text text text text text text text"
    banner
    closable
  />
  <br />
  <bma-alert :show-icon="false" message="Warning text without icon" banner />
  <br />
  <bma-alert type="error" message="Error text" banner />
</template>
