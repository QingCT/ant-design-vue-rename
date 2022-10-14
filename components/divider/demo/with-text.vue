<docs>
---
order: 1
title:
  zh-CN: 带文字的分割线
  en-US: Divider with title
---

## zh-CN

分割线中带有文字，可以用 `orientation` 指定文字位置。

## en-US

Divider with inner title, set `orientation="left/right"` to align it.
</docs>

<template>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <bma-divider>Text</bma-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <bma-divider orientation="left">Left Text</bma-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <bma-divider orientation="right">Right Text</bma-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <bma-divider orientation="left" orientation-margin="0px">
    Left Text with 0 orientationMargin
  </bma-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
  <bma-divider orientation="right" orientation-margin="50px">
    Right Text with 50px orientationMargin
  </bma-divider>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista
    probare, quae sunt a te dicta? Refert tamen, quo modo.
  </p>
</template>
