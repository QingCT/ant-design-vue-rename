<docs>
---
order: 1
title:
  zh-CN: 单位
  en-US: Unit
---

## zh-CN

通过前缀和后缀添加单位。

## en-US

Add unit through `prefix` and `suffix`.

</docs>

<template>
  <bma-row :gutter="16">
    <bma-col :span="12">
      <bma-statistic title="Feedback" :value="1128" style="margin-right: 50px">
        <template #suffix>
          <like-outlined />
        </template>
      </bma-statistic>
    </bma-col>
    <bma-col :span="12">
      <bma-statistic title="Unmerged" :value="93" class="demo-class">
        <template #suffix>
          <span>/ 100</span>
        </template>
      </bma-statistic>
    </bma-col>
  </bma-row>
</template>
<script lang="ts">
import { LikeOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    LikeOutlined,
  },
});
</script>
