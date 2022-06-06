<template>
  <el-pagination 
    background 
    layout="total, sizes, prev, pager, next" 
    :total="data.total"
    :page-size="data.pageSize"
    v-model:currentPage="data.page"
    v-model:page-size="data.pageSize"
    @update:page-size="onSizeChange"
    @update:current-page="onPageChange"
  />
</template>
<script setup>
import { toRefs } from 'vue';

const emits = defineEmits(['change']);

const props = defineProps({
  data: {
    type: Object,
    required: true,
  }
});

const { data } = toRefs(props);


const onPageChange = () => {
  emits('change', data);
}
const onSizeChange = () => {
  data.page = 1;
  emits('change', data);
}
</script>