<docs>
---
order: 2
title:
  zh-CN: 只展开当前父级菜单
  en-US: Open current submenu only
---

## zh-CN

点击菜单，收起其他展开的所有菜单，保持菜单聚焦简洁。

## en-US

Click the menu and you will see that all the other menus gets collapsed to keep the entire menu compact.

</docs>

<template>
  <div>
    <bma-menu
      v-model:selectedKeys="selectedKeys"
      style="width: 256px"
      mode="inline"
      :open-keys="openKeys"
      @openChange="onOpenChange"
    >
      <bma-sub-menu key="sub1">
        <template #icon>
          <MailOutlined />
        </template>
        <template #title>Navigation One</template>
        <bma-menu-item key="1">Option 1</bma-menu-item>
        <bma-menu-item key="2">Option 2</bma-menu-item>
        <bma-menu-item key="3">Option 3</bma-menu-item>
        <bma-menu-item key="4">Option 4</bma-menu-item>
      </bma-sub-menu>
      <bma-sub-menu key="sub2">
        <template #icon></template>
        <template #title>
          <AppstoreOutlined />
          Navigation Two
        </template>
        <bma-menu-item key="5">Option 5</bma-menu-item>
        <bma-menu-item key="6">Option 6</bma-menu-item>
        <bma-sub-menu key="sub3" title="Submenu">
          <bma-menu-item key="7">Option 7</bma-menu-item>
          <bma-menu-item key="8">Option 8</bma-menu-item>
        </bma-sub-menu>
      </bma-sub-menu>
      <bma-sub-menu key="sub4">
        <template #icon>
          <SettingOutlined />
        </template>
        <template #title>Navigation Three</template>
        <bma-menu-item key="9">Option 9</bma-menu-item>
        <bma-menu-item key="10">Option 10</bma-menu-item>
        <bma-menu-item key="11">Option 11</bma-menu-item>
        <bma-menu-item key="12">Option 12</bma-menu-item>
      </bma-sub-menu>
    </bma-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
  setup() {
    const state = reactive({
      rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
      openKeys: ['sub1'],
      selectedKeys: [],
    });
    const onOpenChange = (openKeys: string[]) => {
      const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
      if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
        state.openKeys = openKeys;
      } else {
        state.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    };
    return {
      ...toRefs(state),
      onOpenChange,
    };
  },
});
</script>
