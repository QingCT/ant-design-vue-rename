<docs>
---
order: 5
version: 3.0
title:
  zh-CN: 全局样式
  en-US: Global Theme
---

## zh-CN

通过 css variable 修改全局主题色（你可以切换到组件页面查看更详细的样式展示）。自动生成的变量可能会根据设计调整，请勿直接依赖。详细配置请[点击查看](/docs/vue/customize-theme-variable)。

## en-US

Modify global theme color by css variable. Css variable depends on the design, it may adjust so please do not directly use it. You can go to other components page for more detail style. [Check this](/docs/vue/customize-theme-variable) to view detail.

</docs>

<template>
  <bma-row :gutter="16" :wrap="false">
    <bma-col flex="none">
      <bma-space direction="vertical" align="center">
        <!-- Primary Color -->
        <input
          type="color"
          :value="colorState.primaryColor"
          @input="e => onColorChange('primaryColor', e)"
        />

        <span style="color: var(--ant-primary-color)">var(`--ant-primary-color`)</span>

        <!-- Error Color -->
        <input
          type="color"
          :value="colorState.errorColor"
          @input="e => onColorChange('errorColor', e)"
        />

        <span style="color: var(--ant-error-color)">var(`--ant-error-color`)</span>

        <!-- Warning Color -->
        <input
          type="color"
          :value="colorState.warningColor"
          @input="e => onColorChange('warningColor', e)"
        />

        <span style="color: var(--ant-warning-color)">var(`--ant-warning-color`)</span>

        <!-- Success Color -->
        <input
          type="color"
          :value="colorState.successColor"
          @input="e => onColorChange('successColor', e)"
        />

        <span style="color: var(--ant-success-color)">var(`--ant-success-color`)</span>

        <!-- Info Color -->
        <input
          type="color"
          :value="colorState.infoColor"
          @input="e => onColorChange('infoColor', e)"
        />
        <span style="color: var(--ant-info-color)">var(`--ant-info-color`)</span>
      </bma-space>
    </bma-col>

    <bma-col flex="auto">
      <bma-space direction="vertical" style="width: 100%" :size="0">
        <template #split><bma-divider /></template>
        <!-- Primary Button -->
        <SplitSpace>
          <bma-button type="primary">Primary</bma-button>
          <bma-button>Default</bma-button>
          <bma-button type="dashed">Dashed</bma-button>
          <bma-button type="text">Text</bma-button>
          <bma-button type="link">Link</bma-button>
        </SplitSpace>

        <!-- Danger Button -->
        <SplitSpace>
          <bma-button danger type="primary">Primary</bma-button>
          <bma-button danger>Default</bma-button>
          <bma-button danger type="dashed">Dashed</bma-button>
          <bma-button danger type="text">Text</bma-button>
          <bma-button danger type="link">Link</bma-button>
        </SplitSpace>

        <!-- Ghost Button -->
        <SplitSpace style="background: rgb(190, 200, 200)">
          <bma-button type="primary" ghost>Primary</bma-button>
          <bma-button ghost>Default</bma-button>
          <bma-button type="dashed" ghost>Dashed</bma-button>
          <bma-button type="primary" ghost danger>Primary</bma-button>
          <bma-button ghost danger>Default</bma-button>
          <bma-button type="dashed" ghost danger>Dashed</bma-button>
        </SplitSpace>

        <!-- Typography -->
        <SplitSpace>
          <bma-typography-text type="success">Text (success)</bma-typography-text>
          <bma-typography-text type="warning">Text(warning)</bma-typography-text>
          <bma-typography-text type="danger">Text(danger)</bma-typography-text>
          <bma-typography-link href="https://ant.design" target="_blank">Link</bma-typography-link>
          <bma-typography-text copyable>Text</bma-typography-text>

          <!-- Dropdown -->
          <bma-dropdown>
            <template #overlay>
              <bma-menu>
                <bma-menu-item>1st menu item</bma-menu-item>
                <bma-menu-item danger>a danger item</bma-menu-item>
              </bma-menu>
            </template>
            <a class="ant-dropdown-link" @click.prevent>
              Hover me
              <DownOutlined />
            </a>
          </bma-dropdown>

          <!-- Spin -->
          <bma-spin />
        </SplitSpace>

        <!-- Menu - horizontal -->
        <bma-row :gutter="16">
          <bma-col :span="12">
            <bma-menu v-model:selectedKeys="selectedKeys" mode="horizontal">
              <bma-menu-item key="mail">
                Mail
                <template #icon>
                  <MailOutlined />
                </template>
              </bma-menu-item>
              <bma-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <bma-menu-item-group title="Item 1">
                  <bma-menu-item key="setting:1">Option 1</bma-menu-item>
                  <bma-menu-item key="setting:2">Option 2</bma-menu-item>
                </bma-menu-item-group>
              </bma-sub-menu>
            </bma-menu>
          </bma-col>
          <bma-col :span="12">
            <bma-menu v-model:selectedKeys="selectedKeys" mode="horizontal" theme="dark">
              <bma-menu-item key="mail">
                <template #icon><SettingOutlined /></template>
                Mail
              </bma-menu-item>
              <bma-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <bma-menu-item-group title="Item 1">
                  <bma-menu-item key="setting:1">Option 1</bma-menu-item>
                  <bma-menu-item key="setting:2">Option 2</bma-menu-item>
                </bma-menu-item-group>
              </bma-sub-menu>
            </bma-menu>
          </bma-col>
        </bma-row>

        <!-- Menu - vertical -->
        <bma-row :gutter="16">
          <bma-col :span="12">
            <bma-menu v-model:selectedKeys="selectedKeys" mode="inline">
              <bma-menu-item key="mail">
                <template #icon><MailOutlined /></template>
                Mail
              </bma-menu-item>
              <bma-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <bma-menu-item-group title="Item 1">
                  <bma-menu-item key="setting:1">Option 1</bma-menu-item>
                  <bma-menu-item key="setting:2">Option 2</bma-menu-item>
                </bma-menu-item-group>
              </bma-sub-menu>
            </bma-menu>
          </bma-col>
          <bma-col :span="12">
            <bma-menu v-model:selectedKeys="selectedKeys" mode="vertical" theme="dark">
              <bma-menu-item key="mail">
                <template #icon><MailOutlined /></template>
                Mail
              </bma-menu-item>
              <bma-sub-menu key="SubMenu" title="Submenu">
                <template #icon><SettingOutlined /></template>
                <bma-menu-item-group title="Item 1">
                  <bma-menu-item key="setting:1">Option 1</bma-menu-item>
                  <bma-menu-item key="setting:2">Option 2</bma-menu-item>
                </bma-menu-item-group>
              </bma-sub-menu>
            </bma-menu>
          </bma-col>
        </bma-row>

        <!-- Pagination -->
        <bma-pagination show-quick-jumper :default-current="2" :total="500" />

        <!-- Steps -->
        <bma-steps :current="1" :percent="60">
          <bma-step title="Finished" description="This is a description." />
          <bma-step
            title="In Progress"
            sub-title="Left 00:00:08"
            description="This is a description."
          />
          <bma-step title="Waiting" description="This is a description." />
        </bma-steps>

        <!-- Steps - dot -->
        <bma-steps :current="2" status="error" progress-dot>
          <bma-step title="Finished" description="You can hover on the dot." />
          <bma-step title="In Progress" description="You can hover on the dot." />
          <bma-step title="Error" description="You can hover on the dot." />
          <bma-step title="Waiting" description="You can hover on the dot." />
        </bma-steps>

        <!-- Form - Input -->
        <bma-form>
          <SplitSpace>
            <bma-form-item>
              <bma-input v-bind="inputProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="success">
              <bma-input v-bind="inputProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="warning">
              <bma-input v-bind="inputProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="error">
              <bma-input v-bind="inputProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="validating">
              <bma-input v-bind="inputProps" />
            </bma-form-item>
          </SplitSpace>
        </bma-form>

        <!-- Form - Select -->
        <bma-form>
          <SplitSpace>
            <bma-form-item>
              <bma-select v-bind="selectProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="success">
              <bma-select v-bind="selectProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="warning">
              <bma-select v-bind="selectProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="error">
              <bma-select v-bind="selectProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="validating">
              <bma-select v-bind="selectProps" />
            </bma-form-item>
          </SplitSpace>
        </bma-form>

        <!-- Form - TreeSelect -->
        <bma-form>
          <SplitSpace>
            <bma-form-item>
              <bma-tree-select v-bind="treeSelectProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="success">
              <bma-tree-select v-bind="treeSelectProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="warning">
              <bma-tree-select v-bind="treeSelectProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="error">
              <bma-tree-select v-bind="treeSelectProps" />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="validating">
              <bma-tree-select v-bind="treeSelectProps" />
            </bma-form-item>
          </SplitSpace>
        </bma-form>

        <!-- Form - InputNumber -->
        <bma-form>
          <SplitSpace>
            <bma-form-item>
              <bma-input-number />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="success">
              <bma-input-number />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="warning">
              <bma-input-number />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="error">
              <bma-input-number />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="validating">
              <bma-input-number />
            </bma-form-item>
          </SplitSpace>
        </bma-form>

        <!-- Form - DatePicker -->
        <bma-form>
          <SplitSpace>
            <bma-form-item>
              <bma-date-picker />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="success">
              <bma-date-picker />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="warning">
              <bma-date-picker />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="error">
              <bma-date-picker />
            </bma-form-item>
            <bma-form-item has-feedback validate-status="validating">
              <bma-date-picker />
            </bma-form-item>
          </SplitSpace>
        </bma-form>

        <SplitSpace>
          <bma-checkbox>Checkbox</bma-checkbox>

          <bma-radio-group default-value="bamboo">
            <bma-radio value="bamboo">Bamboo</bma-radio>
            <bma-radio value="light">Light</bma-radio>
            <bma-radio value="little">Little</bma-radio>
          </bma-radio-group>

          <bma-mentions placeholder="Mention by @">
            <bma-mentions-option value="afc163">afc163</bma-mentions-option>
            <bma-mentions-option value="zombieJ">zombieJ</bma-mentions-option>
            <bma-mentions-option value="yesmeck">yesmeck</bma-mentions-option>
          </bma-mentions>

          <bma-slider :default-value="30" style="width: 100px" />

          <bma-switch default-checked />
        </SplitSpace>

        <SplitSpace>
          <bma-range-picker />
          <bma-time-range-picker />
        </SplitSpace>

        <bma-row :gutter="16">
          <bma-col :span="8">
            <!-- Card -->
            <bma-card style="width: 100%" :tab-list="carTabListNoTitle">
              <template #tabBarExtraContent>
                <a href="#">More</a>
              </template>
            </bma-card>
          </bma-col>
          <bma-col :span="8">
            <!-- Table -->
            <bma-table
              size="small"
              bordered
              :row-selection="{}"
              :columns="[
                {
                  title: 'Key',
                  dataIndex: 'key',
                  filters: [
                    {
                      text: 'Little',
                      value: 'little',
                    },
                  ],
                  sorter: (a, b) => a.key.length - b.key.length,
                },
              ]"
              :data-source="[
                {
                  key: 'Bamboo',
                },
                {
                  key: 'Light',
                },
                {
                  key: 'Little',
                },
              ]"
            />
          </bma-col>
          <bma-col :span="8">
            <!-- Table -->
            <bma-tabs default-active-key="1">
              <bma-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</bma-tab-pane>
              <bma-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</bma-tab-pane>
              <bma-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</bma-tab-pane>
            </bma-tabs>
          </bma-col>
        </bma-row>

        <SplitSpace>
          <bma-tag color="success">success</bma-tag>
          <bma-tag color="processing">processing</bma-tag>
          <bma-tag color="error">error</bma-tag>
          <bma-tag color="warning">warning</bma-tag>
          <bma-tag color="default">default</bma-tag>
          <bma-checkable-tag checked>CheckableTag</bma-checkable-tag>
        </SplitSpace>

        <bma-row :gutter="16">
          <bma-col :span="16">
            <bma-timeline mode="alternate">
              <bma-timeline-item>Create a services site 2015-09-01</bma-timeline-item>
              <bma-timeline-item color="gray">
                Solve initial network problems 2015-09-01
              </bma-timeline-item>
              <bma-timeline-item>
                <template #dot>
                  <ClockCircleOutlined style="font-size: 16px" />
                </template>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </bma-timeline-item>
            </bma-timeline>
          </bma-col>

          <bma-col :span="8">
            <bma-tree :tree-data="treeData" :height="200" default-expand-all checkable />
          </bma-col>
        </bma-row>

        <!-- Alert -->
        <bma-row :gutter="16">
          <bma-col :span="6">
            <bma-alert show-icon message="Success Text" type="success" />
          </bma-col>
          <bma-col :span="6">
            <bma-alert show-icon message="Info Text" type="info" />
          </bma-col>
          <bma-col :span="6">
            <bma-alert show-icon message="Warning Text" type="warning" />
          </bma-col>
          <bma-col :span="6">
            <bma-alert show-icon message="Error Text" type="error" />
          </bma-col>
        </bma-row>

        <!-- Progress -->
        <bma-row :gutter="16">
          <bma-col flex="auto">
            <bma-progress :percent="30" />
            <bma-progress :percent="70" status="exception" />
            <bma-progress :percent="100" />
          </bma-col>
          <bma-col flex="none">
            <bma-progress type="circle" :percent="75" />
            <bma-progress type="circle" :percent="70" status="exception" />
            <bma-progress type="circle" :percent="100" />
          </bma-col>
        </bma-row>

        <bma-transfer :data-source="transferData" :target-keys="['18']" :selected-keys="['3']">
          <template #render="item">{{ item.title }}</template>
        </bma-transfer>
      </bma-space>
    </bma-col>
  </bma-row>
</template>
<script lang="ts">
import { defineComponent, h, reactive, ref } from 'vue';
import { ConfigProvider, Space, Divider } from 'bmant-design-vue';
import type { TreeSelectProps } from 'bmant-design-vue';
import {
  DownOutlined,
  MailOutlined,
  SettingOutlined,
  ClockCircleOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    DownOutlined,
    MailOutlined,
    SettingOutlined,
    ClockCircleOutlined,
    SplitSpace: (props, { slots }) =>
      h(Space, { size: 4, ...props }, { ...slots, split: () => h(Divider, { type: 'vertical' }) }),
  },
  setup() {
    const inputProps = {
      style: { width: '128px' },
    };

    const selectProps = {
      ...inputProps,
      options: [
        { value: 'light', label: 'Light' },
        { value: 'bamboo', label: 'Bamboo' },
        { value: 'little', label: 'Little' },
      ],
    };

    const treeData = [
      {
        value: 'little',
        key: 'little',
        label: 'Little',
        title: 'Little',
        children: [
          { value: 'light', key: 'light', label: 'Light', title: 'Light' },
          { value: 'bamboo', key: 'bamboo', label: 'Bamboo', title: 'Bamboo' },
        ],
      },
    ];

    const treeSelectProps: TreeSelectProps = {
      ...inputProps,
      treeCheckable: true,
      maxTagCount: 'responsive',
      treeData,
    };

    const carTabListNoTitle = [
      {
        key: 'article',
        tab: 'article',
      },
      {
        key: 'app',
        tab: 'app',
      },
      {
        key: 'project',
        tab: 'project',
      },
    ];

    const transferData = [];

    for (let i = 0; i < 20; i++) {
      transferData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
      });
    }

    const colorState = reactive({
      primaryColor: '#1890ff',
      errorColor: '#ff4d4f',
      warningColor: '#faad14',
      successColor: '#52c41a',
      infoColor: '#1890ff',
    });

    const onColorChange = (type: string, e: any) => {
      Object.assign(colorState, { [type]: e.target.value });
      ConfigProvider.config({
        theme: colorState,
      });
    };
    return {
      selectProps,
      carTabListNoTitle,
      onColorChange,
      treeData,
      treeSelectProps,
      transferData,
      colorState,
      inputProps,
      selectedKeys: ref(['mail']),
    };
  },
});
</script>
