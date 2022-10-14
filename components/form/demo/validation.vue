<docs>
---
order: 6
title:
  zh-CN: 表单验证
  en-US: Validation
---

## zh-CN

Form 组件提供了表单验证的功能，只需要通过 `rules` 属性传入约定的验证规则，并将 `FormItem` 的 `name` 属性设置为需校验的字段名即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)

## en-US

Just add the `rules` attribute for `Form` component, pass validation rules, and set `name` attribute for `FormItem` as a specific key that needs to be validated. See more information at [async-validator](https://github.com/yiminghe/async-validator).
</docs>

<template>
  <bma-form
    ref="formRef"
    :model="formState"
    :rules="rules"
    :label-col="labelCol"
    :wrapper-col="wrapperCol"
  >
    <bma-form-item ref="name" label="Activity name" name="name">
      <bma-input v-model:value="formState.name" />
    </bma-form-item>
    <bma-form-item label="Activity zone" name="region">
      <bma-select v-model:value="formState.region" placeholder="please select your zone">
        <bma-select-option value="shanghai">Zone one</bma-select-option>
        <bma-select-option value="beijing">Zone two</bma-select-option>
      </bma-select>
    </bma-form-item>
    <bma-form-item label="Activity time" required name="date1">
      <bma-date-picker
        v-model:value="formState.date1"
        show-time
        type="date"
        placeholder="Pick a date"
        style="width: 100%"
      />
    </bma-form-item>
    <bma-form-item label="Instant delivery" name="delivery">
      <bma-switch v-model:checked="formState.delivery" />
    </bma-form-item>
    <bma-form-item label="Activity type" name="type">
      <bma-checkbox-group v-model:value="formState.type">
        <bma-checkbox value="1" name="type">Online</bma-checkbox>
        <bma-checkbox value="2" name="type">Promotion</bma-checkbox>
        <bma-checkbox value="3" name="type">Offline</bma-checkbox>
      </bma-checkbox-group>
    </bma-form-item>
    <bma-form-item label="Resources" name="resource">
      <bma-radio-group v-model:value="formState.resource">
        <bma-radio value="1">Sponsor</bma-radio>
        <bma-radio value="2">Venue</bma-radio>
      </bma-radio-group>
    </bma-form-item>
    <bma-form-item label="Activity form" name="desc">
      <bma-textarea v-model:value="formState.desc" />
    </bma-form-item>
    <bma-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <bma-button type="primary" @click="onSubmit">Create</bma-button>
      <bma-button style="margin-left: 10px" @click="resetForm">Reset</bma-button>
    </bma-form-item>
  </bma-form>
</template>
<script lang="ts">
import { Dayjs } from 'dayjs';
import { defineComponent, reactive, ref, toRaw } from 'vue';
import type { UnwrapRef } from 'vue';
import type { Rule } from 'bmant-design-vue/es/form';

interface FormState {
  name: string;
  region: string | undefined;
  date1: Dayjs | undefined;
  delivery: boolean;
  type: string[];
  resource: string;
  desc: string;
}
export default defineComponent({
  setup() {
    const formRef = ref();
    const formState: UnwrapRef<FormState> = reactive({
      name: '',
      region: undefined,
      date1: undefined,
      delivery: false,
      type: [],
      resource: '',
      desc: '',
    });
    const rules: Record<string, Rule[]> = {
      name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
      ],
      region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
      date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
      type: [
        {
          type: 'array',
          required: true,
          message: 'Please select at least one activity type',
          trigger: 'change',
        },
      ],
      resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
      desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }],
    };
    const onSubmit = () => {
      formRef.value
        .validate()
        .then(() => {
          console.log('values', formState, toRaw(formState));
        })
        .catch(error => {
          console.log('error', error);
        });
    };
    const resetForm = () => {
      formRef.value.resetFields();
    };
    return {
      formRef,
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      other: '',
      formState,
      rules,
      onSubmit,
      resetForm,
    };
  },
});
</script>
