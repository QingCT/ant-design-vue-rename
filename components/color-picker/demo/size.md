<cn>
#### 尺寸
选择器有三种尺寸：大、默认（中）、小。
</cn>

<us>
#### Size
There are three size of ColorPicker: large, medium(default), small.
</us>

```vue
<template>
  <div>
    <bma-row>
      <bma-col span="8">
        <bma-colorPicker v-model="color6" size="large" />
      </bma-col>
      <bma-col span="8">
        <bma-colorPicker v-model="color6" />
      </bma-col>
      <bma-col span="8">
        <bma-colorPicker v-model="color6" size="small" />
      </bma-col>
    </bma-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color6: '#1890ff',
    };
  },
};
</script>
```
