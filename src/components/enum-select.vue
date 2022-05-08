<template>
  <el-select v-bind="$attrs">
    <el-option 
      v-for="(item) in enums" 
      :key="item.value"
      :value="item.value"
      :label="item.label"
    />
  </el-select>  
</template>
<script>
import { ElSelect } from 'element-plus';

export default {
  components: {
    ElSelect
  },
  props: {
    enums: {
      type: Array,
      default: () => []
    }
  },
}
</script>
