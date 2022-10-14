<docs>
---
order: 7
title:
  zh-CN: useForm 基本表单
  en-US: useForm Basic Usage
---

## zh-CN

通过 [`Form.useForm`](#useForm) 更加灵活的使用表单组件。

## en-US

use [`Form.useForm`](#useForm) provides form validation logic and status.
</docs>

<template>
  <bma-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <bma-form-item label="Activity name" v-bind="validateInfos.name">
      <bma-input v-model:value="modelRef.name" />
    </bma-form-item>
    <bma-form-item label="Activity zone" v-bind="validateInfos.region">
      <bma-select v-model:value="modelRef.region" placeholder="please select your zone">
        <bma-select-option value="shanghai">Zone one</bma-select-option>
        <bma-select-option value="beijing">Zone two</bma-select-option>
      </bma-select>
    </bma-form-item>
    <bma-form-item label="Activity type" v-bind="validateInfos.type">
      <bma-checkbox-group v-model:value="modelRef.type">
        <bma-checkbox value="1" name="type">Online</bma-checkbox>
        <bma-checkbox value="2" name="type">Promotion</bma-checkbox>
        <bma-checkbox value="3" name="type">Offline</bma-checkbox>
      </bma-checkbox-group>
    </bma-form-item>
    <bma-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <bma-button type="primary" @click.prevent="onSubmit">Create</bma-button>
      <bma-button style="margin-left: 10px" @click="resetFields">Reset</bma-button>
    </bma-form-item>
  </bma-form>
</template>
<script lang="ts">
import { defineComponent, reactive, toRaw } from 'vue';
import { Form } from 'bmant-design-vue';

const useForm = Form.useForm;
export default defineComponent({
  setup() {
    const modelRef = reactive({
      name: '',
      region: undefined,
      type: [],
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input name',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select region',
        },
      ],
      type: [
        {
          required: true,
          message: 'Please select type',
          type: 'array',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef, {
      onValidate: (...args) => console.log(...args),
    });
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>
