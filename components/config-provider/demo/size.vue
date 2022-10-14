<docs>
---
order: 2
title:
  zh-CN: 组件尺寸
  en-US: Component size
---

## zh-CN

修改默认组件尺寸。

## en-US

Config component default size.

</docs>

<template>
  <bma-radio-group v-model:value="componentSize">
    <bma-radio-button value="small">Small</bma-radio-button>
    <bma-radio-button value="middle">Middle</bma-radio-button>
    <bma-radio-button value="large">Large</bma-radio-button>
  </bma-radio-group>
  <bma-divider />
  <bma-config-provider :component-size="componentSize">
    <div class="example">
      <bma-input />
    </div>
    <div class="example">
      <bma-tabs>
        <bma-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</bma-tab-pane>
        <bma-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</bma-tab-pane>
        <bma-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</bma-tab-pane>
      </bma-tabs>
    </div>
    <div class="example">
      <bma-input-search allow-clear />
    </div>
    <div class="example">
      <bma-textarea allow-clear />
    </div>
    <div class="example">
      <bma-select style="width: 100px" placeholder="select value" :options="[{ value: 'demo' }]" />
    </div>
    <div class="example">
      <bma-datePicker />
    </div>
    <div class="example">
      <bma-range-picker />
    </div>
    <div class="example">
      <bma-button>Button</bma-button>
    </div>
    <div class="example">
      <bma-card title="Card">
        <bma-table :columns="columns" :data-source="dataSource" />
      </bma-card>
    </div>
  </bma-config-provider>
</template>
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const componentSize = ref('small');
    const columns = [
      { title: 'Name', dataIndex: 'name' },
      { title: 'Age', dataIndex: 'age' },
    ];
    const dataSource = [
      {
        key: '1',
        name: 'John Brown',
        age: 32,
      },
      {
        key: '2',
        name: 'Jim Green',
        age: 42,
      },
      {
        key: '3',
        name: 'Joe Black',
        age: 32,
      },
    ];
    return {
      componentSize,
      columns,
      dataSource,
    };
  },
});
</script>
<style scoped>
.example {
  margin: 16px 0;
}
</style>
