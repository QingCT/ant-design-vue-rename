<docs>
---
order: 10
title:
  zh-CN: useForm 自定义触发时机
  en-US: useForm custom trigger
---

## zh-CN

通过 [`Form.useForm`](#useForm) 自定义触发校验时机

## en-US

use [`Form.useForm`](#useForm) custom trigger to validation logic and status.
</docs>

<template>
  <bma-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <bma-form-item label="Activity name" v-bind="validateInfos.name">
      <bma-input
        v-model:value="modelRef.name"
        @blur="validate('name', { trigger: 'blur' }).catch(() => {})"
      />
    </bma-form-item>
    <bma-form-item label="Activity zone" v-bind="validateInfos.region">
      <bma-select v-model:value="modelRef.region" placeholder="please select your zone">
        <bma-select-option value="shanghai">Zone one</bma-select-option>
        <bma-select-option value="beijing">Zone two</bma-select-option>
      </bma-select>
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
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: 'Please input Activity name',
        },
        {
          min: 3,
          max: 5,
          message: 'Length should be 3 to 5',
          trigger: 'blur',
        },
      ],
      region: [
        {
          required: true,
          message: 'Please select region',
        },
      ],
    });
    const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef);
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
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
    };
  },
});
</script>
