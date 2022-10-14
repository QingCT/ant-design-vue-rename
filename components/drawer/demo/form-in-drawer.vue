<docs>
---
order: 4
title:
  zh-CN: 抽屉表单
  en-US: Submit form in drawer
---

## zh-CN

在抽屉中使用表单。

## en-US

Use form in drawer with submit button.

</docs>

<template>
  <bma-button type="primary" @click="showDrawer">
    <template #icon><PlusOutlined /></template>
    New account
  </bma-button>
  <bma-drawer
    title="Create a new account"
    :width="720"
    :visible="visible"
    :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <bma-form :model="form" :rules="rules" layout="vertical">
      <bma-row :gutter="16">
        <bma-col :span="12">
          <bma-form-item label="Name" name="name">
            <bma-input v-model:value="form.name" placeholder="Please enter user name" />
          </bma-form-item>
        </bma-col>
        <bma-col :span="12">
          <bma-form-item label="Url" name="url">
            <bma-input
              v-model:value="form.url"
              style="width: 100%"
              addon-before="http://"
              addon-after=".com"
              placeholder="please enter url"
            />
          </bma-form-item>
        </bma-col>
      </bma-row>
      <bma-row :gutter="16">
        <bma-col :span="12">
          <bma-form-item label="Owner" name="owner">
            <bma-select v-model:value="form.owner" placeholder="Please a-s an owner">
              <bma-select-option value="xiao">Xiaoxiao Fu</bma-select-option>
              <bma-select-option value="mao">Maomao Zhou</bma-select-option>
            </bma-select>
          </bma-form-item>
        </bma-col>
        <bma-col :span="12">
          <bma-form-item label="Type" name="type">
            <bma-select v-model:value="form.type" placeholder="Please choose the type">
              <bma-select-option value="private">Private</bma-select-option>
              <bma-select-option value="public">Public</bma-select-option>
            </bma-select>
          </bma-form-item>
        </bma-col>
      </bma-row>
      <bma-row :gutter="16">
        <bma-col :span="12">
          <bma-form-item label="Approver" name="approver">
            <bma-select v-model:value="form.approver" placeholder="Please choose the approver">
              <bma-select-option value="jack">Jack Ma</bma-select-option>
              <bma-select-option value="tom">Tom Liu</bma-select-option>
            </bma-select>
          </bma-form-item>
        </bma-col>
        <bma-col :span="12">
          <bma-form-item label="DateTime" name="dateTime">
            <bma-date-picker
              v-model:value="form.dateTime"
              style="width: 100%"
              :get-popup-container="trigger => trigger.parentElement"
            />
          </bma-form-item>
        </bma-col>
      </bma-row>
      <bma-row :gutter="16">
        <bma-col :span="24">
          <bma-form-item label="Description" name="description">
            <bma-textarea
              v-model:value="form.description"
              :rows="4"
              placeholder="please enter url description"
            />
          </bma-form-item>
        </bma-col>
      </bma-row>
    </bma-form>
    <template #extra>
      <bma-space>
        <bma-button @click="onClose">Cancel</bma-button>
        <bma-button type="primary" @click="onClose">Submit</bma-button>
      </bma-space>
    </template>
  </bma-drawer>
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
import type { Rule } from 'bmant-design-vue/es/form';
export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    const form = reactive({
      name: '',
      url: '',
      owner: '',
      type: '',
      approver: '',
      dateTime: null,
      description: '',
    });

    const rules: Record<string, Rule[]> = {
      name: [{ required: true, message: 'Please enter user name' }],
      url: [{ required: true, message: 'please enter url' }],
      owner: [{ required: true, message: 'Please select an owner' }],
      type: [{ required: true, message: 'Please choose the type' }],
      approver: [{ required: true, message: 'Please choose the approver' }],
      dateTime: [{ required: true, message: 'Please choose the dateTime', type: 'object' }],
      description: [{ required: true, message: 'Please enter url description' }],
    };

    const visible = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      form,
      rules,
      visible,
      showDrawer,
      onClose,
    };
  },
});
</script>
