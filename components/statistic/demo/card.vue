<docs>
---
order: 2
title:
  zh-CN: 在卡片中使用
  en-US: In Card
---

## zh-CN

在卡片中展示统计数值。

## en-US

Display statistic data in Card.

</docs>

<template>
  <div style="background: #ececec; padding: 30px">
    <bma-row :gutter="16">
      <bma-col :span="12">
        <bma-card>
          <bma-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template #prefix>
              <arrow-up-outlined />
            </template>
          </bma-statistic>
        </bma-card>
      </bma-col>
      <bma-col :span="12">
        <bma-card>
          <bma-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
            <template #prefix>
              <arrow-down-outlined />
            </template>
          </bma-statistic>
        </bma-card>
      </bma-col>
    </bma-row>
  </div>
</template>
<script lang="ts">
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
  },
});
</script>
