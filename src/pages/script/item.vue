<template>
<div class="wa-wrapper">
  <section class="wag-section">
    <el-descriptions
      title="基础信息"
      direction="horizontal"
      :column="2"
      border
    >
      <el-descriptions-item label="ID">
        {{record.id}}
      </el-descriptions-item>
      <el-descriptions-item label="错误等级">
        {{SCRIPT_LEVEL_LABEL[record.level]}}
      </el-descriptions-item>
      <el-descriptions-item label="创建时间">
        {{formatViewDate(record.createTime)}}
      </el-descriptions-item>
      <el-descriptions-item label="错误状态">
        {{SCRIPT_STATUS_LABEL[record.status]}}
      </el-descriptions-item>
      <el-descriptions-item label="备注" :span="4">
        {{'测试更新'.padStart(200, '备注')}}
      </el-descriptions-item>
    </el-descriptions>
  </section>
</div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getItem } from '@/apis/script';
import { useLoading } from '@/hooks';
import { formatViewDate } from '@/utils/date';
import { SCRIPT_LEVEL_LABEL, SCRIPT_STATUS_LABEL } from '@/enum/script';

const [getItemAPI, loadingItem] = useLoading(getItem);
const record = ref({});
const route = useRoute();
const router = useRouter();

const toPageNotFound = () => {
  router.replace({path: '/404'});
};

const update = () => {
  const id = route.query.id;
  if (!id) {
    toPageNotFound();
    return;
  }
  getItemAPI({ id })
    .then((res) => {
      if (res) {
        record.value = res;
      } else {
        toPageNotFound();
      }
    })
};

watch(
  () => route.query.id,
  update,
  {
    immediate: true
  }
);


</script>
<style lang="less" scoped>
/deep/ .el-descriptions__label {
  min-width: 100px;
}
</style>