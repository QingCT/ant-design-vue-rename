<docs>
---
order: 8
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
    <bma-input v-model:value="value1" addon-before="Http://" addon-after=".com" />
    <bma-input v-model:value="value2">
      <template #addonBefore>
        <bma-select v-model:value="value3" style="width: 90px">
          <bma-select-option value="Http://">Http://</bma-select-option>
          <bma-select-option value="Https://">Https://</bma-select-option>
        </bma-select>
      </template>
      <template #addonAfter>
        <bma-select v-model:value="value4" style="width: 80px">
          <bma-select-option value=".com">.com</bma-select-option>
          <bma-select-option value=".jp">.jp</bma-select-option>
          <bma-select-option value=".cn">.cn</bma-select-option>
          <bma-select-option value=".org">.org</bma-select-option>
        </bma-select>
      </template>
    </bma-input>
    <bma-input v-model:value="value5">
      <template #addonAfter>
        <setting-outlined />
      </template>
    </bma-input>

    <bma-input v-model:value="value6">
      <template #addonBefore>
        <bma-cascader placeholder="cascader" style="width: 150px" />
      </template>
    </bma-input>
  </bma-space>
</template>

<script lang="ts">
import { SettingOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    SettingOutlined,
  },

  setup() {
    const value1 = ref<string>('mysite');
    const value2 = ref<string>('mysite');
    const value3 = ref<string>('Http://');
    const value4 = ref<string>('.com');
    const value5 = ref<string>('mysite');
    const value6 = ref<string>('mysite');
    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
    };
  },
});
</script>
