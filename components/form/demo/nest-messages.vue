<docs>
---
order: 5
title:
  zh-CN: 嵌套结构与校验信息
  en-US: Nest
---

## zh-CN

`name` 属性支持嵌套数据结构。通过 `validateMessages` 或 `message` 自定义校验信息模板，模板内容可参考[此处](https://github.com/vueComponent/ant-design-vue/blob/main/components/form/utils/messages.ts)。

## en-US

`name` prop support nest data structure. Customize validate message template with `validateMessages` or `message`. Ref [here](https://github.com/vueComponent/ant-design-vue/blob/main/components/form/utils/messages.ts) about message template.
</docs>
<template>
  <bma-form
    :model="formState"
    v-bind="layout"
    name="nest-messages"
    :validate-messages="validateMessages"
    @finish="onFinish"
  >
    <bma-form-item :name="['user', 'name']" label="Name" :rules="[{ required: true }]">
      <bma-input v-model:value="formState.user.name" />
    </bma-form-item>
    <bma-form-item :name="['user', 'email']" label="Email" :rules="[{ type: 'email' }]">
      <bma-input v-model:value="formState.user.email" />
    </bma-form-item>
    <bma-form-item
      :name="['user', 'age']"
      label="Age"
      :rules="[{ type: 'number', min: 0, max: 99 }]"
    >
      <bma-input-number v-model:value="formState.user.age" />
    </bma-form-item>
    <bma-form-item :name="['user', 'website']" label="Website">
      <bma-input v-model:value="formState.user.website" />
    </bma-form-item>
    <bma-form-item :name="['user', 'introduction']" label="Introduction">
      <bma-textarea v-model:value="formState.user.introduction" />
    </bma-form-item>
    <bma-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 8 }">
      <bma-button type="primary" html-type="submit">Submit</bma-button>
    </bma-form-item>
  </bma-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };

    const validateMessages = {
      required: '${label} is required!',
      types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
      },
      number: {
        range: '${label} must be between ${min} and ${max}',
      },
    };

    const formState = reactive({
      user: {
        name: '',
        age: undefined,
        email: '',
        website: '',
        introduction: '',
      },
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };
    return {
      formState,
      onFinish,
      layout,
      validateMessages,
    };
  },
});
</script>
