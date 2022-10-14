<docs>
---
order: 0
title:
  zh-CN: 固定 Label 宽度
  en-US: Fixed lable width
---

## zh-CN

通过 labelCol.style 设置固定宽度

## en-US

Set label width by labelCol.style
</docs>
<template>
  <bma-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <bma-form-item label="Activity name">
      <bma-input v-model:value="formState.name" />
    </bma-form-item>
    <bma-form-item label="Instant delivery">
      <bma-switch v-model:checked="formState.delivery" />
    </bma-form-item>
    <bma-form-item label="Activity type">
      <bma-checkbox-group v-model:value="formState.type">
        <bma-checkbox value="1" name="type">Online</bma-checkbox>
        <bma-checkbox value="2" name="type">Promotion</bma-checkbox>
        <bma-checkbox value="3" name="type">Offline</bma-checkbox>
      </bma-checkbox-group>
    </bma-form-item>
    <bma-form-item label="Resources">
      <bma-radio-group v-model:value="formState.resource">
        <bma-radio value="1">Sponsor</bma-radio>
        <bma-radio value="2">Venue</bma-radio>
      </bma-radio-group>
    </bma-form-item>
    <bma-form-item label="Activity form">
      <bma-input v-model:value="formState.desc" type="textarea" />
    </bma-form-item>
    <bma-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <bma-button type="primary" @click="onSubmit">Create</bma-button>
      <bma-button style="margin-left: 10px">Cancel</bma-button>
    </bma-form-item>
  </bma-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  name: string;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
export default defineComponent({
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const onSubmit = () => {
      console.log('submit!', toRaw(formState));
    };
    return {
      labelCol: { style: { width: '150px' } },
      wrapperCol: { span: 14 },
      formState,
      onSubmit,
    };
  },
});
</script>
