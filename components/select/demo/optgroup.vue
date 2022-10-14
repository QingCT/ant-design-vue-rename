<docs>
---
order: 7
title:
  zh-CN: 分组
  en-US: Option Group
---

## zh-CN

用 `OptGroup` 或 `options.options` 进行选项分组。

## en-US

Using `OptGroup` or `options.options` to group the options.

</docs>

<template>
  <bma-space>
    <bma-select v-model:value="value" style="width: 200px" @change="handleChange">
      <bma-select-opt-group>
        <template #label>
          <span>
            <user-outlined />
            Manager
          </span>
        </template>
        <bma-select-option value="jack">Jack</bma-select-option>
        <bma-select-option value="lucy">Lucy</bma-select-option>
      </bma-select-opt-group>
      <bma-select-opt-group label="Engineer">
        <bma-select-option value="Yiminghe">yiminghe</bma-select-option>
        <bma-select-option value="Yiminghe1">yiminghe1</bma-select-option>
      </bma-select-opt-group>
    </bma-select>
    <bma-select
      v-model:value="value"
      :options="options"
      style="width: 200px"
      @change="handleChange"
    ></bma-select>
  </bma-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { UserOutlined } from '@ant-design/icons-vue';
import type { SelectProps } from 'bmant-design-vue';
export default defineComponent({
  components: {
    UserOutlined,
  },
  setup() {
    const handleChange = (value: string) => {
      console.log(`selected ${value}`);
    };

    const options = ref<SelectProps['options']>([
      {
        label: 'Manager',
        options: [
          {
            value: 'jack',
            label: 'Jack',
          },
          {
            value: 'lucy',
            label: 'Lucy',
          },
        ],
      },
      {
        label: 'Engineer',
        options: [
          {
            value: 'yiminghe',
            label: 'Yiminghe',
          },
        ],
      },
    ]);

    return {
      value: ref(['lucy']),
      handleChange,
      options,
    };
  },
});
</script>
