<template>
<section class="wag-section">
  <div class="wag-section__header wag-form">
    <enum-select
      class="wag-form__item"
      v-model="form.type" 
      :enums="SCRIPT_LEVEL_LIST"
      placeholder="错误等级"
      clearable
    />
    <enum-select
      class="wag-form__item"
      v-model="form.status" 
      :enums="SCRIPT_STATUS_LIST"
      placeholder="错误状态"
      clearable
    />
    <el-date-picker
      class="wag-form__item"
      v-model="form.date"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      type="datetimerange"
    />
    <el-button
      type="primary" 
      class="wag-form__item"
      :icon="Search"
    >
      查询
    </el-button>
    <el-button plain :icon="Refresh">
      重置
    </el-button>
  </div>
  <div class="wag-section__main">
    <el-table :data="errorList" style="width: 100%" stripe border>
      <el-table-column fixed="left" prop="path" label="地址">
        <template v-slot:default="{row}">
          <el-link :href="row.page" :disabled="!row.page" type="primary" target="_blank">
            {{row.page}}
          </el-link>
        </template>
      </el-table-column>
      <el-table-column prop="level" label="错误等级" width="84">
        <template v-slot:default="{row}">
          {{SCRIPT_LEVEL_LABEL[row.level]}}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="错误状态" width="100">
        <template v-slot:default="{row}">
          {{SCRIPT_STATUS_LABEL[row.status]}}
        </template>
      </el-table-column>
      <el-table-column prop="errorMeta" label="错误信息" min-width="200">
        <template v-slot:default="{row}">
          {{row.errorMeta.message}}
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="130"/>
      <el-table-column fixed="right" label="操作" width="120">
        <template v-slot:default="{row}">
          <el-button type="text" @click="onEdit(row)">
            编辑
          </el-button>
          <el-button type="text" @click="onView(row)">
            查看
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="wag-section__footer">
    <el-pagination 
      background 
      layout="total, sizes, prev, pager, next" 
      :total="1000"
    />
  </div>
</section>  
</template>

<script>
import { 
  reactive,
  ref,
} from 'vue';
import { 
  Refresh, 
  Search, 
} from '@element-plus/icons-vue';
import { useRouter } from 'vue-router'; 
import { 
  SCRIPT_LEVEL_LIST, 
  SCRIPT_LEVEL_LABEL, 
  SCRIPT_STATUS_LIST,
  SCRIPT_STATUS_LABEL,
} from '../../enum/script';
import { getScriptList } from '../../mock/error-list';
import { shallowCopy } from '../../utils/share';
import enumSelect from '../../components/enum-select.vue';
import editDialog from './components/edit-dialog.vue';

export default {
  components: {
    enumSelect,
  },
  setup() {
    const router = useRouter();
    const form = reactive({
      status: '',
      type: '',
      path: '',
      date: []
    });
    const errorList = reactive(getScriptList());
    const editItem = ref({});
    const editItemCopy = ref({});

    const onView = (item) => {
      router.push({
        path: '/errors/item',
        query: {
          id: item.id,
        }
      });
    }

    return {
      Search,
      Refresh,
      SCRIPT_LEVEL_LIST, 
      SCRIPT_LEVEL_LABEL, 
      SCRIPT_STATUS_LIST,
      SCRIPT_STATUS_LABEL,
      form,
      errorList,
      editItem,
      editItemCopy,
      onView,
    };
  }
}
</script>

<style lang="less" scoped>

</style>