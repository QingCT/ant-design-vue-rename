<docs>
---
order: 8
title:
  zh-CN: useForm 合并错误信息
  en-US: useForm merge status info
---

## zh-CN

通过 [`Form.useForm`](#useForm)  合并展示表单校验信息。

## en-US

use [`Form.useForm`](#useForm)  combined display form verification information.
</docs>

<template>
  <bma-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <bma-form-item label="Activity name" required>
      <bma-input v-model:value="modelRef.name" />
    </bma-form-item>
    <bma-form-item label="Activity zone" required>
      <bma-select v-model:value="modelRef.region" placeholder="please select your zone">
        <bma-select-option value="shanghai">Zone one</bma-select-option>
        <bma-select-option value="beijing">Zone two</bma-select-option>
      </bma-select>
    </bma-form-item>
    <bma-form-item label="Activity type" required>
      <bma-checkbox-group v-model:value="modelRef.type">
        <bma-checkbox value="1" name="type">Online</bma-checkbox>
        <bma-checkbox value="2" name="type">Promotion</bma-checkbox>
        <bma-checkbox value="3" name="type">Offline</bma-checkbox>
      </bma-checkbox-group>
    </bma-form-item>
    <bma-form-item class="error-infos" :wrapper-col="{ span: 14, offset: 4 }" v-bind="errorInfos">
      <bma-button type="primary" @click.prevent="onSubmit">Create</bma-button>
      <bma-button style="margin-left: 10px" @click="resetFields">Reset</bma-button>
    </bma-form-item>
  </bma-form>
</template>
<script lang="ts">
import { reactive, toRaw, computed, defineComponent } from 'vue';
import { toArray } from 'lodash-es';
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
    const { resetFields, validate, validateInfos, mergeValidateInfo } = useForm(modelRef, rulesRef);
    const onSubmit = () => {
      validate()
        .then(() => {
          console.log(toRaw(modelRef));
        })
        .catch(err => {
          console.log('error', err);
        });
    };
    const errorInfos = computed(() => {
      return mergeValidateInfo(toArray(validateInfos));
    });
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validateInfos,
      resetFields,
      modelRef,
      onSubmit,
      errorInfos,
    };
  },
});
</script>
<style scoped>
.error-infos :deep(.bmant-form-explain) {
  white-space: pre-line;
}
</style>
