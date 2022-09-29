<docs>
---
order: 8
title:
  zh-CN: 多表单联动
  en-US: Control between forms
---

## zh-CN

本例子中，Modal 的确认按钮在 Form 之外，通过 `form.submit` 方法调用表单提交功能。反之，则推荐使用 `<Button htmlType="submit" />` 调用 web 原生提交逻辑。

## en-US

In this case, submit button is in the Modal which is out of Form. You can use `form.submit` to submit form. Besides, we recommend native `<Button htmlType="submit" />` to submit a form.

</docs>
<template>
  <bma-form ref="formRef" :model="formState" name="form_context" v-bind="layout" @finish="onFinish">
    <bma-form-item
      name="group"
      label="Group Name"
      :rules="[{ required: true, message: 'Please input group name!' }]"
    >
      <bma-input v-model:value="formState.group" />
    </bma-form-item>

    <bma-form-item label="User List">
      <template v-if="formState.users.length">
        <ul>
          <template v-for="user in formState.users" :key="user.key">
            <li class="user">
              <bma-avatar>
                <template #icon><UserOutlined /></template>
              </bma-avatar>
              {{ user.name }} - {{ user.age }}
            </li>
          </template>
        </ul>
      </template>
      <template v-else>
        <bma-typography-text class="bmant-form-text" type="secondary">
          (
          <SmileOutlined />
          No user yet. )
        </bma-typography-text>
      </template>
    </bma-form-item>

    <bma-form-item v-bind="tailLayout">
      <bma-button html-type="submit" type="primary">Submit</bma-button>
      <bma-button html-type="button" style="margin: 0 8px" @click="visible = true">
        Add User
      </bma-button>
    </bma-form-item>
  </bma-form>
  <bma-modal v-model:visible="visible" title="Basic Drawer" @ok="onOk">
    <bma-form ref="modalFormRef" :model="modalFormState" layout="vertical" name="userForm">
      <bma-form-item name="name" label="User Name" :rules="[{ required: true }]">
        <bma-input v-model:value="modalFormState.name" />
      </bma-form-item>
      <bma-form-item name="age" label="User Age" :rules="[{ required: true }]">
        <bma-input-number v-model:value="modalFormState.age" />
      </bma-form-item>
    </bma-form>
  </bma-modal>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, watch, toRaw } from 'vue';
import type { FormInstance } from 'bmant-design-vue';
import { SmileOutlined, UserOutlined } from '@ant-design/icons-vue';

interface UserType {
  name?: string;
  age?: number;
  key?: number;
}

interface FormState {
  group: string;
  users: UserType[];
}

export default defineComponent({
  components: {
    SmileOutlined,
    UserOutlined,
  },
  setup() {
    const formRef = ref<FormInstance>();
    const modalFormRef = ref<FormInstance>();
    const visible = ref(false);
    const formState = reactive<FormState>({
      group: '',
      users: [],
    });
    const modalFormState = ref<UserType>({});

    watch(
      visible,
      () => {
        modalFormState.value = {};
      },
      { flush: 'post' },
    );

    const onOk = () => {
      modalFormRef.value.validateFields().then(() => {
        formState.users.push({ ...modalFormState.value, key: Date.now() });
        visible.value = false;
      });
    };
    const onFinish = () => {
      console.log('Finish:', toRaw(formState));
    };
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };
    return {
      formState,
      layout,
      tailLayout,
      formRef,
      modalFormRef,
      visible,
      modalFormState,
      onOk,
      onFinish,
    };
  },
});
</script>
<style>
#components-form-demo-form-context .user {
  margin-bottom: 8px;
}

#components-form-demo-form-context .user .bmant-avatar {
  margin-right: 8px;
}

.bmant-row-rtl #components-form-demo-form-context .user .bmant-avatar {
  margin-right: 0;
  margin-left: 8px;
}
</style>
