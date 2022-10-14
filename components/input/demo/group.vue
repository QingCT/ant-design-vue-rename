<docs>
---
order: 6
title:
  zh-CN: 输入框组合
  en-US: Input Group
---

## zh-CN

输入框的组合展现。
注意：使用 `compact` 模式时，不需要通过 `Col` 来控制宽度。

## en-US

a-input-group example
Note: You don't need `Col` to control the width in the `compact` mode.

</docs>
<template>
  <div>
    <bma-input-group size="large">
      <bma-row :gutter="8">
        <bma-col :span="5">
          <bma-input v-model:value="value1" />
        </bma-col>
        <bma-col :span="8">
          <bma-input v-model:value="value2" />
        </bma-col>
      </bma-row>
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-input v-model:value="value1" style="width: 20%" />
      <bma-input v-model:value="value2" style="width: 30%" />
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-select v-model:value="value3">
        <bma-select-option value="Zhejiang">Zhejiang</bma-select-option>
        <bma-select-option value="Jiangsu">Jiangsu</bma-select-option>
      </bma-select>
      <bma-input v-model:value="value4" style="width: 50%" />
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-select v-model:value="value5">
        <bma-select-option value="Option1">Option1</bma-select-option>
        <bma-select-option value="Option2">Option2</bma-select-option>
      </bma-select>
      <bma-input v-model:value="value6" style="width: 50%" />
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-input v-model:value="value7" style="width: 50%" />
      <bma-date-picker v-model:value="value8" style="width: 50%" />
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-select v-model:value="value9">
        <bma-select-option value="Option1-1">Option1-1</bma-select-option>
        <bma-select-option value="Option1-2">Option1-2</bma-select-option>
      </bma-select>
      <bma-select v-model:value="value10">
        <bma-select-option value="Option2-1">Option2-1</bma-select-option>
        <bma-select-option value="Option2-2">Option2-2</bma-select-option>
      </bma-select>
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-select v-model:value="value11">
        <bma-select-option value="1">Between</bma-select-option>
        <bma-select-option value="2">Except</bma-select-option>
      </bma-select>
      <bma-input
        v-model:value="value12"
        style="width: 100px; text-align: center"
        placeholder="Minimum"
      />
      <bma-input
        v-model:value="value13"
        style="width: 30px; border-left: 0; pointer-events: none; background-color: #fff"
        placeholder="~"
        disabled
      />
      <bma-input
        v-model:value="value14"
        style="width: 100px; text-align: center; border-left: 0"
        placeholder="Maximum"
      />
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-select v-model:value="value15">
        <bma-select-option value="Sign Up">Sign Up</bma-select-option>
        <bma-select-option value="Sign In">Sign In</bma-select-option>
      </bma-select>
      <bma-auto-complete
        v-model:value="value16"
        :options="[{ value: 'text 1' }, { value: 'text 2' }]"
        style="width: 200px"
        placeholder="Email"
      />
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-select v-model:value="value17" style="width: 30%">
        <bma-select-option value="Home">Home</bma-select-option>
        <bma-select-option value="Company">Company</bma-select-option>
      </bma-select>
      <bma-cascader
        v-model:value="value18"
        style="width: 70%"
        :options="options"
        placeholder="Select Address"
      />
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-input v-model:value="value19" style="width: calc(100% - 200px)" />
      <bma-button type="primary">Submit</bma-button>
    </bma-input-group>
    <br />
    <bma-input-group compact>
      <bma-input v-model:value="value20" style="width: calc(100% - 200px)" />
      <bma-tooltip title="copy git url">
        <bma-button>
          <template #icon><CopyOutlined /></template>
        </bma-button>
      </bma-tooltip>
    </bma-input-group>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { CopyOutlined } from '@ant-design/icons-vue';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default defineComponent({
  components: {
    CopyOutlined,
  },
  setup() {
    const value1 = ref<string>('0571');
    const value2 = ref<string>('26888888');
    const value3 = ref<string>('Zhejiang');
    const value4 = ref<string>('Xihu District, Hangzhou');
    const value5 = ref<string>('Option1');
    const value6 = ref<string>('input content');
    const value7 = ref<string>('input content');
    const value8 = ref<string | null>(null);
    const value9 = ref<string>('Option1-1');
    const value10 = ref<string>('Option2-2');
    const value11 = ref<string>('1');
    const value12 = ref<string>('');
    const value13 = ref<string>('');
    const value14 = ref<string>('');
    const value15 = ref<string>('Sign Up');
    const value16 = ref<string>('');
    const value17 = ref<string>('Home');
    const value18 = ref<string[]>([]);
    const value19 = ref<string>('https://surely.cool');
    const value20 = ref<string>('https://antdv.com');

    return {
      value1,
      value2,
      value3,
      value4,
      value5,
      value6,
      value7,
      value8,
      value9,
      value10,
      value11,
      value12,
      value13,
      value14,
      value15,
      value16,
      value17,
      value18,
      options,
      value19,
      value20,
    };
  },
});
</script>
