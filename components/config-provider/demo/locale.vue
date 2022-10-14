<docs>
---
order: 1
title:
  zh-CN: 国际化
  en-US: Locale
---

## zh-CN

此处列出 Ant Design Vue 中需要国际化支持的组件，你可以在演示里切换语言。

## en-US

Components which need localization support are listed here, you can toggle the language in the demo.
</docs>

<template>
  <div class="change-locale">
    <span style="margin-right: 16px">Change locale of components:</span>
    <bma-radio-group v-model:value="locale">
      <bma-radio-button key="en" :value="enUS.locale">English</bma-radio-button>
      <bma-radio-button key="cn" :value="zhCN.locale">中文</bma-radio-button>
    </bma-radio-group>
  </div>
  <bma-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="locale-components">
      <div class="example">
        <bma-pagination :total="50" show-size-changer />
      </div>
      <div class="example">
        <bma-select show-search style="width: 200px">
          <bma-select-option value="jack">jack</bma-select-option>
          <bma-select-option value="lucy">lucy</bma-select-option>
        </bma-select>
        <bma-date-picker />
        <bma-time-picker />
        <bma-range-picker style="width: 200px" />
      </div>
      <div class="example">
        <bma-button type="primary" @click="visible = true">Show Modal</bma-button>
        <bma-button @click="info">Show info</bma-button>
        <bma-button @click="confirm">Show confirm</bma-button>
        <bma-popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </bma-popconfirm>
      </div>
      <div class="example">
        <bma-transfer
          :data-source="[]"
          show-search
          :target-keys="[]"
          :render="item => item.title"
        />
      </div>
      <div class="site-config-provider-calendar-wrapper">
        <bma-calendar :fullscreen="false" />
      </div>
      <div class="example">
        <bma-table :data-source="[]" :columns="columns" />
      </div>
      <bma-modal v-model:visible="visible" title="Locale Modal">
        <p>Locale Modal</p>
      </bma-modal>
    </div>
  </bma-config-provider>
</template>
<script>
import { Modal } from 'bmant-design-vue';
import enUS from 'bmant-design-vue/es/locale/en_US';
import zhCN from 'bmant-design-vue/es/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { defineComponent, ref, watch } from 'vue';

dayjs.locale('en');

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];
export default defineComponent({
  setup() {
    const visible = ref(false);
    const locale = ref(enUS.locale);
    watch(locale, val => {
      dayjs.locale(val);
    });
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return {
      columns,
      visible,
      locale,
      dayjs,
      enUS,
      zhCN,
      info,
      confirm,
    };
  },
});
</script>
<style scoped>
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
[data-theme='dark'] .locale-components {
  border-top: 1px solid #303030;
}
[data-theme='dark'] .site-config-provider-calendar-wrapper {
  border: 1px solid #303030;
}
</style>
