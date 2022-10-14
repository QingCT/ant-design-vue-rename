<docs>
---
order: 5
title:
  zh-CN: 表单布局
  en-US: Form Layout
---

## zh-CN

表单有三种布局。

## en-US

There are three layout for form: `horizontal`, `vertical`, `inline`.
</docs>

<template>
  <bma-form :layout="formState.layout" :model="formState" v-bind="formItemLayout">
    <bma-form-item label="Form Layout">
      <bma-radio-group v-model:value="formState.layout">
        <bma-radio-button value="horizontal">Horizontal</bma-radio-button>
        <bma-radio-button value="vertical">Vertical</bma-radio-button>
        <bma-radio-button value="inline">Inline</bma-radio-button>
      </bma-radio-group>
    </bma-form-item>
    <bma-form-item label="Field A">
      <bma-input v-model:value="formState.fieldA" placeholder="input placeholder" />
    </bma-form-item>
    <bma-form-item label="Field B">
      <bma-input v-model:value="formState.fieldB" placeholder="input placeholder" />
    </bma-form-item>
    <bma-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <bma-button type="primary">Submit</bma-button>
    </bma-form-item>
  </bma-form>
</template>
<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  layout: 'horizontal' | 'vertical' | 'inline';
  fieldA: string;
  fieldB: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      layout: 'horizontal',
      fieldA: '',
      fieldB: '',
    });
    const formItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    });
    const buttonItemLayout = computed(() => {
      const { layout } = formState;
      return layout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    });
    return {
      formState,
      formItemLayout,
      buttonItemLayout,
    };
  },
});
</script>
