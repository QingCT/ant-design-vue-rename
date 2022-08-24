<docs>
---
order: 2
title:
  zh-CN: 前置/后置标签
  en-US: Pre / Post tab
---

## zh-CN

用于配置一些固定组合。

## en-US

Using pre & post tabs example.

</docs>

<template>
  <bma-space direction="vertical">
    <bma-input-number v-model:value="value1" addon-before="+" addon-after="$"></bma-input-number>
    <bma-input-number v-model:value="value2">
      <template #addonBefore>
        <bma-select v-model:value="addonBeforeValue" style="width: 60px">
          <bma-select-option value="add">+</bma-select-option>
          <bma-select-option value="minus">-</bma-select-option>
        </bma-select>
      </template>
      <template #addonAfter>
        <bma-select v-model:value="addonAfterValue" style="width: 60px">
          <bma-select-option value="USD">$</bma-select-option>
          <bma-select-option value="EUR">€</bma-select-option>
          <bma-select-option value="GBP">£</bma-select-option>
          <bma-select-option value="CNY">¥</bma-select-option>
        </bma-select>
      </template>
    </bma-input-number>
    <bma-input-number v-model:value="value3">
      <template #addonAfter><SettingOutlined /></template>
    </bma-input-number>
    <bma-input-number v-model:value="value4">
      <template #addonAfter>
        <bma-cascader placeholder="cascader" style="width: 150px" />
      </template>
    </bma-input-number>
  </bma-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: { SettingOutlined },
  setup() {
    return {
      value1: ref(100),
      value2: ref(100),
      value3: ref(100),
      value4: ref(100),
      addonBeforeValue: ref('add'),
      addonAfterValue: ref('USD'),
    };
  },
});
</script>
