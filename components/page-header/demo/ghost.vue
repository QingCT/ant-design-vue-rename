<docs>
---
order: 2
title:
  zh-CN: 白底模式
  en-US: white background mode
---

## zh-CN

默认 PageHeader 是透明底色的。在某些情况下，PageHeader 需要自己的背景颜色。

## en-US

The default PageHeader is a transparent background. In some cases, PageHeader needs its own background color.

</docs>

<template>
  <div class="demo-page-header" style="background-color: #f5f5f5; padding: 24px">
    <bma-page-header
      :ghost="false"
      title="Title"
      sub-title="This is a subtitle"
      @back="() => $router.go(-1)"
    >
      <template #extra>
        <bma-button key="3">Operation</bma-button>
        <bma-button key="2">Operation</bma-button>
        <bma-button key="1" type="primary">Primary</bma-button>
      </template>
      <bma-descriptions size="small" :column="3">
        <bma-descriptions-item label="Created">Lili Qu</bma-descriptions-item>
        <bma-descriptions-item label="Association">
          <a>421421</a>
        </bma-descriptions-item>
        <bma-descriptions-item label="Creation Time">2017-01-10</bma-descriptions-item>
        <bma-descriptions-item label="Effective Time">2017-10-10</bma-descriptions-item>
        <bma-descriptions-item label="Remarks">
          Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
        </bma-descriptions-item>
      </bma-descriptions>
    </bma-page-header>
  </div>
</template>
<style scoped>
.demo-page-header :deep(tr:last-child td) {
  padding-bottom: 0;
}
</style>
