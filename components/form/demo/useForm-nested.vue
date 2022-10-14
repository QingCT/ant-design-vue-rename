<docs>
---
order: 9
title:
  zh-CN: useForm 嵌套表单
  en-US: useForm for nested Form
---

## zh-CN

通过 [`Form.useForm`](#useForm)  使用点字符串拼接进行嵌套数据校验。

## en-US

[`Form.useForm`](#useForm) use dot string splicing for nested data verification.
</docs>

<template>
  <bma-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <bma-form-item label="Activity name" v-bind="validateInfos.name">
      <bma-input v-model:value="modelRef.name" />
    </bma-form-item>
    <bma-form-item label="Sub name" v-bind="validateInfos['sub.name']">
      <bma-input v-model:value="modelRef.sub.name" />
    </bma-form-item>
    <bma-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <bma-button type="primary" @click.prevent="onSubmit">Create</bma-button>
      <bma-button style="margin-left: 10px" @click="reset">Reset</bma-button>
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
      sub: {
        name: '',
      },
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      reactive({
        name: [
          {
            required: true,
            message: 'Please input name',
          },
        ],
        'sub.name': [
          {
            required: true,
            message: 'Please input sub name',
          },
        ],
      }),
    );
    const onSubmit = () => {
      validate()
        .then(res => {
          console.log(res, toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    const reset = () => {
      resetFields();
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      reset,
      modelRef,
      onSubmit,
    };
  },
});
</script>
