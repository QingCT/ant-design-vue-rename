<docs>
---
order: 2
title:
  zh-CN: 方向
  en-US: Direction
---

## zh-CN

这里列出了支持 `rtl` 方向的组件，您可以在演示中切换方向。

## en-US

Components which support rtl direction are listed here, you can toggle the direction in the demo.

</docs>

<template>
  <span style="margin-right: 16px">Change direction of components:</span>
  <bma-radio-group v-model:value="state.direction">
    <bma-radio-button value="ltr">LTR</bma-radio-button>
    <bma-radio-button value="rtl">RTL</bma-radio-button>
  </bma-radio-group>
  <bma-divider />
  <bma-config-provider :direction="state.direction">
    <div class="direction-components">
      <bma-row>
        <bma-col :span="24">
          <bma-divider orientation="left">Cascader example</bma-divider>
          <bma-cascader
            :options="cascaderOptions"
            placeholder="یک مورد انتخاب کنید"
            :placement="state.popupPlacement"
            @change="onCascaderChange"
          >
            <template #suffixIcon><SearchIcon /></template>
          </bma-cascader>
          &nbsp;&nbsp;&nbsp;&nbsp; With search:
          <bma-cascader
            :options="cascaderOptions"
            placeholder="Select an item"
            :placement="state.popupPlacement"
            :show-search="{ filter: cascaderFilter }"
            @change="onCascaderChange"
          >
            <template #suffixIcon><SmileOutlined /></template>
          </bma-cascader>
        </bma-col>
      </bma-row>
      <br />
      <bma-row>
        <bma-col :span="12">
          <bma-divider orientation="left">Switch example</bma-divider>
          &nbsp;&nbsp;
          <bma-switch default-checked />
          &nbsp;&nbsp;
          <bma-switch loading default-checked />
          &nbsp;&nbsp;
          <bma-switch size="small" loading />
        </bma-col>
        <bma-col :span="12">
          <bma-divider orientation="left">Radio Group example</bma-divider>

          <bma-radio-group default-value="c" button-style="solid">
            <bma-radio-button value="a">تهران</bma-radio-button>
            <bma-radio-button value="b" disabled>اصفهان</bma-radio-button>
            <bma-radio-button value="c">فارس</bma-radio-button>
            <bma-radio-button value="d">خوزستان</bma-radio-button>
          </bma-radio-group>
        </bma-col>
      </bma-row>
      <br />
      <bma-row>
        <bma-col :span="12">
          <bma-divider orientation="left">Button example</bma-divider>
          <div class="button-demo">
            <bma-button type="primary">
              <template #icon><DownloadOutlined /></template>
            </bma-button>
            <bma-button type="primary" shape="circle">
              <template #icon><DownloadOutlined /></template>
            </bma-button>
            <bma-button type="primary" shape="round">
              <template #icon><DownloadOutlined /></template>
            </bma-button>
            <bma-button type="primary" shape="round">
              <template #icon><DownloadOutlined /></template>
              Download
            </bma-button>
            <bma-button type="primary">
              <template #icon><DownloadOutlined /></template>
              Download
            </bma-button>
            <br />
            <bma-button-group>
              <bma-button type="primary">
                <LeftOutlined />
                Backward
              </bma-button>
              <bma-button type="primary">
                Forward
                <RightOutlined />
              </bma-button>
            </bma-button-group>
            <bma-button type="primary" loading>Loading</bma-button>
            <bma-button type="primary" size="small" loading>Loading</bma-button>
          </div>
        </bma-col>
        <bma-col :span="12">
          <bma-divider orientation="left">Tree example</bma-divider>
          <bma-tree
            v-model:expandedKeys="expandedKeys"
            v-model:selectedKeys="selectedKeys"
            v-model:checkedKeys="checkedKeys"
            show-line
            checkable
            :tree-data="treeData"
          >
            <template #title="{ title, key }">
              <span v-if="key === '0-0-1-0'" style="color: #1890ff">{{ title }}</span>
              <template v-else>{{ title }}</template>
            </template>
          </bma-tree>
        </bma-col>
      </bma-row>
      <br />
      <bma-row>
        <bma-col :span="24">
          <bma-divider orientation="left">Input (Input Group) example</bma-divider>
          <bma-input-group size="large">
            <bma-row :gutter="8">
              <bma-col :span="5">
                <bma-input default-value="0571" />
              </bma-col>
              <bma-col :span="8">
                <bma-input default-value="26888888" />
              </bma-col>
            </bma-row>
          </bma-input-group>
          <br />
          <bma-input-group compact>
            <bma-input style="width: 20%" default-value="0571" />
            <bma-input style="width: 30%" default-value="26888888" />
          </bma-input-group>
          <br />
          <bma-input-group compact>
            <bma-select default-value="Option1">
              <bma-select-option value="Option1">Option1</bma-select-option>
              <bma-select-option value="Option2">Option2</bma-select-option>
            </bma-select>
            <bma-input style="width: 50%" default-value="input content" />
            <bma-inputNumber />
          </bma-input-group>
          <br />
          <bma-input-search placeholder="input search text" enter-button="Search" size="large" />
          <br />
          <br />
          <div style="margin-bottom: 16px">
            <bma-input default-value="mysite">
              <template #selectBefore>
                <bma-select default-value="Http://" style="width: 90px">
                  <bma-select-option value="Http://">Http://</bma-select-option>
                  <bma-select-option value="Https://">Https://</bma-select-option>
                </bma-select>
              </template>
              <template #selectAfter>
                <bma-select default-value=".com" style="width: 80px">
                  <bma-select-option value=".com">.com</bma-select-option>
                  <bma-select-option value=".jp">.jp</bma-select-option>
                  <bma-select-option value=".cn">.cn</bma-select-option>
                  <bma-select-option value=".org">.org</bma-select-option>
                </bma-select>
              </template>
            </bma-input>
          </div>
          <br />
          <bma-row>
            <bma-col :span="12">
              <bma-divider orientation="left">Select example</bma-divider>
              <bma-select mode="multiple" default-value="مورچه" style="width: 120px">
                <bma-select-option value="jack">Jack</bma-select-option>
                <bma-select-option value="مورچه">مورچه</bma-select-option>
                <bma-select-option value="disabled" disabled>Disabled</bma-select-option>
                <bma-select-option value="Yiminghe">yiminghe</bma-select-option>
              </bma-select>
              <bma-select default-value="مورچه" style="width: 120px" disabled>
                <bma-select-option value="مورچه">مورچه</bma-select-option>
              </bma-select>
              <bma-select default-value="مورچه" style="width: 120px" loading>
                <bma-select-option value="مورچه">مورچه</bma-select-option>
              </bma-select>
              <bma-select
                show-search
                style="width: 200px"
                placeholder="Select a person"
                option-filter-prop="children"
                :filter-option="
                  (input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                "
              >
                <bma-select-option value="jack">Jack</bma-select-option>
                <bma-select-option value="سعید">سعید</bma-select-option>
                <bma-select-option value="tom">Tom</bma-select-option>
              </bma-select>
            </bma-col>
            <bma-col :span="12">
              <bma-divider orientation="left">TreeSelect example</bma-divider>
              <div>
                <bma-tree-select
                  show-search
                  style="width: 100%"
                  :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
                  placeholder="Please select"
                  allow-clear
                  tree-default-expand-all
                  :tree-data="treeSelectData"
                ></bma-tree-select>
              </div>
            </bma-col>
          </bma-row>
          <br />
          <bma-row>
            <bma-col :span="24">
              <bma-divider orientation="left">Modal example</bma-divider>
              <div>
                <bma-button type="primary" @click="showModal">Open Modal</bma-button>
                <bma-modal v-model:visible="state.modalVisible" title="پنچره ساده">
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                  <p>نگاشته‌های خود را اینجا قراردهید</p>
                </bma-modal>
              </div>
            </bma-col>
          </bma-row>
          <br />
          <bma-row>
            <bma-col :span="24">
              <bma-divider orientation="left">Steps example</bma-divider>
              <div>
                <bma-steps progress-dot :current="state.currentStep">
                  <bma-step title="Finished" description="This is a description." />
                  <bma-step title="In Progress" description="This is a description." />
                  <bma-step title="Waiting" description="This is a description." />
                </bma-steps>
                <br />
                <bma-steps :current="state.currentStep" @change="onStepsChange">
                  <bma-step title="Step 1" description="This is a description." />
                  <bma-step title="Step 2" description="This is a description." />
                  <bma-step title="Step 3" description="This is a description." />
                </bma-steps>
              </div>
            </bma-col>
          </bma-row>
          <br />
          <bma-row>
            <bma-col :span="12">
              <bma-divider orientation="left">Rate example</bma-divider>
              <div>
                <bma-rate v-model:value="rateValue" />
                <br />
                <strong>* Note:</strong>
                Half star not implemented in RTL direction.
              </div>
            </bma-col>
            <bma-col :span="12">
              <bma-divider orientation="left">Badge example</bma-divider>
              <div>
                <div>
                  <bma-badge :count="state.badgeCount">
                    <a href="#" class="head-example" />
                  </bma-badge>
                  <bma-button-group>
                    <bma-button @click="declineBadge">
                      <MinusOutlined />
                    </bma-button>
                    <bma-button @click="increaseBadge">
                      <PlusOutlined />
                    </bma-button>
                  </bma-button-group>
                </div>
                <div style="margin-top: 10px">
                  <bma-badge :dot="state.showBadge">
                    <a href="#" class="head-example" />
                  </bma-badge>
                  <bma-switch :checked="state.showBadge" @change="onChangeBadge" />
                </div>
              </div>
            </bma-col>
          </bma-row>
        </bma-col>
      </bma-row>

      <br />
      <br />
      <bma-row>
        <bma-col :span="24">
          <bma-divider orientation="left">Pagination example</bma-divider>
          <bma-pagination show-size-changer :default-current="3" :total="500" />
        </bma-col>
      </bma-row>
      <br />
      <bma-row>
        <bma-col :span="24">
          <bma-divider orientation="left">Grid System example</bma-divider>
          <div class="grid-demo">
            <div class="code-box-demo">
              <p>
                <strong>* Note:</strong>
                Every calculation in RTL grid system is from right side (offset, push, etc.)
              </p>
              <bma-row>
                <bma-col :span="8">col-8</bma-col>
                <bma-col :span="8" :offset="8">col-8</bma-col>
              </bma-row>
              <bma-row>
                <bma-col :span="6" :offset="6">col-6 col-offset-6</bma-col>
                <bma-col :span="6" :offset="6">col-6 col-offset-6</bma-col>
              </bma-row>
              <bma-row>
                <bma-col :span="12" :offset="6">col-12 col-offset-6</bma-col>
              </bma-row>
              <bma-row>
                <bma-col :span="18" :push="6">col-18 col-push-6</bma-col>
                <bma-col :span="6" :pull="18">col-6 col-pull-18</bma-col>
              </bma-row>
            </div>
          </div>
        </bma-col>
      </bma-row>
    </div>
  </bma-config-provider>
</template>
<script lang="ts">
import { defineComponent, reactive, watch, ref } from 'vue';

import {
  SearchOutlined as SearchIcon,
  SmileOutlined,
  DownloadOutlined,
  LeftOutlined,
  RightOutlined,
  MinusOutlined,
  PlusOutlined,
} from '@ant-design/icons-vue';
import type { TreeProps, TreeSelectProps, CascaderProps } from 'bmant-design-vue';

export default defineComponent({
  components: {
    SmileOutlined,
    DownloadOutlined,
    LeftOutlined,
    RightOutlined,
    MinusOutlined,
    PlusOutlined,
    SearchIcon,
  },
  setup() {
    const state = reactive({
      currentStep: 0,
      modalVisible: false,

      badgeCount: 5,
      showBadge: true,
      direction: 'ltr' as 'ltr' | 'rtl',
      popupPlacement: 'bottomLeft' as CascaderProps['placement'],
    });
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    const treeData: TreeProps['treeData'] = [
      {
        title: 'parent 1',
        key: '0-0',
        children: [
          {
            title: 'parent 1-0',
            key: '0-0-0',
            disabled: true,
            children: [
              { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
              { title: 'leaf', key: '0-0-0-1' },
            ],
          },
          {
            title: 'parent 1-1',
            key: '0-0-1',
            children: [{ key: '0-0-1-0', title: 'sss' }],
          },
        ],
      },
    ];

    const treeSelectData = ref<TreeSelectProps['treeData']>([
      {
        title: 'parent 1',
        value: 'parent 1',
        children: [
          {
            title: 'parent 1-0',
            value: 'parent 1-0',
            children: [
              {
                title: 'my leaf',
                value: 'leaf1',
              },
              {
                title: 'your leaf',
                value: 'leaf2',
              },
            ],
          },
          {
            title: 'parent 1-1',
            value: 'parent 1-1',
          },
        ],
      },
    ]);
    watch(
      () => state.direction,
      directionValue => {
        if (directionValue === 'rtl') {
          state.popupPlacement = 'bottomRight';
        } else {
          state.popupPlacement = 'bottomLeft';
        }
      },
    );
    const cascaderOptions = [
      {
        value: 'tehran',
        label: 'تهران',
        children: [
          {
            value: 'tehran-c',
            label: 'تهران',
            children: [
              {
                value: 'saadat-abad',
                label: 'سعادت آیاد',
              },
            ],
          },
        ],
      },
      {
        value: 'ardabil',
        label: 'اردبیل',
        children: [
          {
            value: 'ardabil-c',
            label: 'اردبیل',
            children: [
              {
                value: 'primadar',
                label: 'پیرمادر',
              },
            ],
          },
        ],
      },
      {
        value: 'gilan',
        label: 'گیلان',
        children: [
          {
            value: 'rasht',
            label: 'رشت',
            children: [
              {
                value: 'district-3',
                label: 'منطقه ۳',
              },
            ],
          },
        ],
      },
    ];

    // ==== Cascader ====
    const cascaderFilter = (inputValue, path) =>
      path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    const onCascaderChange = value => {
      console.log(value);
    };
    // ==== End Cascader ====

    // ==== Modal ====
    const showModal = () => {
      state.modalVisible = true;
    };

    // ==== End Modal ====

    const onStepsChange = currentStep => {
      console.log('onChange:', currentStep);
      state.currentStep = currentStep;
    };

    // ==== Badge ====

    const increaseBadge = () => {
      const badgeCount = state.badgeCount + 1;
      state.badgeCount = badgeCount;
    };

    const declineBadge = () => {
      let badgeCount = state.badgeCount - 1;
      if (badgeCount < 0) {
        badgeCount = 0;
      }
      state.badgeCount = badgeCount;
    };

    const onChangeBadge = showBadge => {
      state.showBadge = showBadge;
    };
    return {
      state,
      cascaderOptions,
      cascaderFilter,
      onCascaderChange,
      showModal,
      onStepsChange,
      increaseBadge,
      declineBadge,
      onChangeBadge,
      expandedKeys,
      selectedKeys,
      checkedKeys,
      treeData,
      treeSelectData,
      rateValue: ref(2),
    };
  },
});
</script>
<style lang="less">
.direction-components {
  .button-demo .bmant-btn,
  .button-demo .bmant-btn-group {
    margin-right: 8px;
    margin-bottom: 12px;
  }
  .button-demo .bmant-btn-group > .bmant-btn,
  .button-demo .bmant-btn-group > span > .bmant-btn {
    margin-right: 0;
    margin-left: 0;
  }

  .head-example {
    display: inline-block;
    width: 42px;
    height: 42px;
    vertical-align: middle;
    background: #eee;
    border-radius: 4px;
  }

  .bmant-badge:not(.bmant-badge-not-a-wrapper) {
    margin-right: 20px;
  }
  .bmant-badge-rtl:not(.bmant-badge-not-a-wrapper) {
    margin-right: 0;
    margin-left: 20px;
  }
}

[data-theme='dark'] .head-example {
  background: rgba(255, 255, 255, 0.12);
}
</style>
