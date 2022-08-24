<docs>
---
order: 2
title:
  zh-CN: 自定义尺寸
  en-US: Custom Size
---

## zh-CN

自定义尺寸，适应在各种容器中展示。

## en-US

Custom sizes to fit in a variety of containers.

</docs>

<template>
  <div>
    <bma-radio-group v-model:value="size" @change="onChange">
      <bma-radio value="default">default</bma-radio>
      <bma-radio value="middle">middle</bma-radio>
      <bma-radio value="small">small</bma-radio>
    </bma-radio-group>
    <br />
    <br />
    <bma-descriptions bordered title="Custom Size" :size="size">
      <template #extra>
        <bma-button type="primary">Edit</bma-button>
      </template>
      <bma-descriptions-item label="Product">Cloud Database</bma-descriptions-item>
      <bma-descriptions-item label="Billing">Prepaid</bma-descriptions-item>
      <bma-descriptions-item label="Time">18:00:00</bma-descriptions-item>
      <bma-descriptions-item label="Amount">$80.00</bma-descriptions-item>
      <bma-descriptions-item label="Discount">$20.00</bma-descriptions-item>
      <bma-descriptions-item label="Official">$60.00</bma-descriptions-item>
      <bma-descriptions-item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </bma-descriptions-item>
    </bma-descriptions>
    <br />
    <br />
    <bma-descriptions title="Custom Size" :size="size">
      <template #extra>
        <bma-button type="primary">Edit</bma-button>
      </template>
      <bma-descriptions-item label="Product">Cloud Database</bma-descriptions-item>
      <bma-descriptions-item label="Billing">Prepaid</bma-descriptions-item>
      <bma-descriptions-item label="Time">18:00:00</bma-descriptions-item>
      <bma-descriptions-item label="Amount">$80.00</bma-descriptions-item>
      <bma-descriptions-item label="Discount">$20.00</bma-descriptions-item>
      <bma-descriptions-item label="Official">$60.00</bma-descriptions-item>
    </bma-descriptions>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import type { DescriptionsProps } from 'bmant-design-vue';
export default defineComponent({
  setup() {
    const size = ref<DescriptionsProps['size']>('default');
    const onChange = (e: any) => {
      console.log('size checked', e.target.value);
      size.value = e.target.value;
    };

    return {
      size,
      onChange,
    };
  },
});
</script>
