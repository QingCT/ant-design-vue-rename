<docs>
---
order: 24
title:
  zh-CN: 校验其他组件
  en-US: Other Form Controls
---

## zh-CN

以上演示没有出现的表单控件对应的校验演示。

## en-US

Demonstration of validation configuration for form controls which are not shown in the demos above.
</docs>
<template>
  <bma-form
    :model="formState"
    name="validate_other"
    v-bind="formItemLayout"
    @finishFailed="onFinishFailed"
    @finish="onFinish"
  >
    <bma-form-item label="Plain Text">
      <span class="ant-form-text">China</span>
    </bma-form-item>
    <bma-form-item
      name="select"
      label="Select"
      has-feedback
      :rules="[{ required: true, message: 'Please select your country!' }]"
    >
      <bma-select v-model:value="formState.select" placeholder="Please select a country">
        <bma-select-option value="china">China</bma-select-option>
        <bma-select-option value="usa">U.S.A</bma-select-option>
      </bma-select>
    </bma-form-item>

    <bma-form-item
      name="select-multiple"
      label="Select[multiple]"
      :rules="[{ required: true, message: 'Please select your favourite colors!', type: 'array' }]"
    >
      <bma-select
        v-model:value="formState['select-multiple']"
        mode="multiple"
        placeholder="Please select favourite colors"
      >
        <bma-select-option value="red">Red</bma-select-option>
        <bma-select-option value="green">Green</bma-select-option>
        <bma-select-option value="blue">Blue</bma-select-option>
      </bma-select>
    </bma-form-item>

    <bma-form-item label="InputNumber">
      <bma-form-item name="input-number" no-style>
        <bma-input-number v-model:value="formState['input-number']" :min="1" :max="10" />
      </bma-form-item>
      <span class="ant-form-text">machines</span>
    </bma-form-item>

    <bma-form-item name="switch" label="Switch">
      <bma-switch v-model:checked="formState.switch" />
    </bma-form-item>

    <bma-form-item name="slider" label="Slider">
      <bma-slider
        v-model:value="formState.slider"
        :marks="{
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        }"
      />
    </bma-form-item>

    <bma-form-item name="radio-group" label="Radio.Group">
      <bma-radio-group v-model:value="formState['radio-group']">
        <bma-radio value="a">item 1</bma-radio>
        <bma-radio value="b">item 2</bma-radio>
        <bma-radio value="c">item 3</bma-radio>
      </bma-radio-group>
    </bma-form-item>

    <bma-form-item
      name="radio-button"
      label="Radio.Button"
      :rules="[{ required: true, message: 'Please pick an item!' }]"
    >
      <bma-radio-group v-model:value="formState['radio-button']">
        <bma-radio-button value="a">item 1</bma-radio-button>
        <bma-radio-button value="b">item 2</bma-radio-button>
        <bma-radio-button value="c">item 3</bma-radio-button>
      </bma-radio-group>
    </bma-form-item>

    <bma-form-item name="checkbox-group" label="Checkbox.Group">
      <bma-checkbox-group v-model:value="formState['checkbox-group']">
        <bma-row>
          <bma-col :span="8">
            <bma-checkbox value="A" style="line-height: 32px">A</bma-checkbox>
          </bma-col>
          <bma-col :span="8">
            <bma-checkbox value="B" style="line-height: 32px" disabled>B</bma-checkbox>
          </bma-col>
          <bma-col :span="8">
            <bma-checkbox value="C" style="line-height: 32px">C</bma-checkbox>
          </bma-col>
          <bma-col :span="8">
            <bma-checkbox value="D" style="line-height: 32px">D</bma-checkbox>
          </bma-col>
          <bma-col :span="8">
            <bma-checkbox value="E" style="line-height: 32px">E</bma-checkbox>
          </bma-col>
          <bma-col :span="8">
            <bma-checkbox value="F" style="line-height: 32px">F</bma-checkbox>
          </bma-col>
        </bma-row>
      </bma-checkbox-group>
    </bma-form-item>

    <bma-form-item name="rate" label="Rate">
      <bma-rate v-model:value="formState.rate" allow-half />
    </bma-form-item>

    <bma-form-item name="upload" label="Upload" extra="longgggggggggggggggggggggggggggggggggg">
      <bma-upload
        v-model:fileList="formState.upload"
        name="logo"
        action="/upload.do"
        list-type="picture"
      >
        <bma-button>
          <template #icon><UploadOutlined /></template>
          Click to upload
        </bma-button>
      </bma-upload>
    </bma-form-item>

    <bma-form-item label="Dragger">
      <bma-form-item name="dragger" no-style>
        <bma-upload-dragger v-model:fileList="formState.dragger" name="files" action="/upload.do">
          <p class="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p class="ant-upload-text">Click or drag file to this area to upload</p>
          <p class="ant-upload-hint">Support for a single or bulk upload.</p>
        </bma-upload-dragger>
      </bma-form-item>
    </bma-form-item>

    <bma-form-item :wrapper-col="{ span: 12, offset: 6 }">
      <bma-button type="primary" html-type="submit">Submit</bma-button>
    </bma-form-item>
  </bma-form>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UploadOutlined,
    InboxOutlined,
  },
  setup() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    const formState = reactive<Record<string, any>>({
      'input-number': 3,
      'checkbox-group': ['A', 'B'],
      rate: 3.5,
    });
    const onFinish = (values: any) => {
      console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
    };
    return {
      formState,
      onFinish,
      onFinishFailed,
      formItemLayout,
    };
  },
});
</script>
