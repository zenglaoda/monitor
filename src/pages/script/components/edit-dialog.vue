<template>
  <el-dialog
    :modelValue="visible"
    :before-close="onClose"
    title="编辑"
    width="500px"
  >
    <el-form :model="form" :rules="rules" ref="refForm" label-width="110px">
      <el-form-item label="错误等级" prop="level">
        <enumSelect 
          v-model="form.level" 
          :enums="SCRIPT_LEVEL_LIST" 
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="错误状态" prop="status">
        <enumSelect 
          v-model="form.status" 
          :enums="SCRIPT_STATUS_LIST" 
          style="width: 100%;"
        />
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input 
          v-model="form.remark" 
          placeholder="请输入" clearable type="textarea"
          :autosize="{minRows: 4}"
        />
      </el-form-item>
    </el-form>
    <template v-slot:footer>
      <div>
        <el-button @click="onClose">
          取消
        </el-button>
        <el-button type="primary" @click="onConfirm">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref, toRef } from 'vue';
import enumSelect from '@/components/enum-select.vue';
import { SCRIPT_LEVEL_LIST, SCRIPT_STATUS_LIST } from '@/enum/script';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits({
  'update:modelValue': function(value) {
    return typeof value === 'boolean';
  },
  'confirm': null
});

const visible = toRef(props, 'modelValue', false);

const form = toRef(props, 'item');

const refForm = ref();

const requiredRules = { required: true }
const rules = reactive({
  level: requiredRules,
  status: requiredRules,
});


const onClose = () => {
  emit('update:modelValue', false);
};

const onConfirm = () => {
  refForm.value.validate()
    .then(() => {
      emit('confirm');
      onClose();
    })
    .catch(() => {});
};

</script>

<style lang="less" scoped>

</style>