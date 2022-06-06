<template>
<section class="wag-section">
  <div class="wag-section__header wag-form">
    <enum-select
      class="wag-form__item"
      v-model="form.level" 
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
      type="daterange"
    />
    <el-button
      type="primary" 
      class="wag-form__item"
      :icon="Search"
      @click="onSearch"
    >
      查询
    </el-button>
    <el-button
        class="wag-form__item"
        plain 
        :icon="Refresh"
        @click="onReset"
      >
      重置
    </el-button>
  </div>
  <div class="wag-section__main" v-loading="loadingList">
    <el-table
      :data="scriptList" 
      style="width: 100%" 
      stripe 
      border
      header-row-class-name="wag-table-header"
    >
      <el-table-column fixed="left" prop="path" label="ID">
        <template v-slot:default="{row}">
          <waLink target="_blank" :to="{'path': '/script/item', 'query': {id: row.id}}">
            {{row.id}}
          </waLink>
        </template>
      </el-table-column>
      <el-table-column prop="level" label="错误等级" width="84">
        <template v-slot="{row}">
          {{SCRIPT_LEVEL_LABEL[row.level]}}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="错误状态" width="100">
        <template v-slot="{row}">
          {{SCRIPT_STATUS_LABEL[row.status]}}
        </template>
      </el-table-column>
      <el-table-column prop="errorMeta" label="错误信息" min-width="200">
        <template v-slot="{row}">
          <div class="wa-cell wag-ellipsis-3">
            {{row.message}}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="130">
        <template v-slot="{row}">
          {{formatViewDate(row.createTime)}}
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="120" align="center">
        <template v-slot="{row}">
          <el-button type="text" @click="onEdit(row)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
  <div class="wag-section__footer">
    <waPagination 
      :data="pageStore"
      @change="getList"
    />
  </div>
  <editDialog
    v-model="showEditDialog" 
    :item="editItem"
    @confirm="getList"
  />
</section>  
</template>

<script>
import { reactive, ref } from 'vue';
import { 
  Refresh,
  Search, 
} from '@element-plus/icons-vue';
import { 
  SCRIPT_LEVEL_LIST, 
  SCRIPT_LEVEL_LABEL, 
  SCRIPT_STATUS_LIST,
  SCRIPT_STATUS_LABEL,
} from '@/enum/script';
import { getScriptList } from '@/apis/script';
import { getQueryDate, formatViewDate } from '@/utils/date';
import { isObject } from '@/utils/share';
import { usePage, useLoading } from '@/hooks';
import enumSelect from '@/components/enum-select.vue';
import waPagination from '@/components/wa-pagination.vue';
import waLink from '@/components/wa-link.vue';
import editDialog from './components/edit-dialog.vue';

export default {
  components: {
    enumSelect,
    waPagination,
    editDialog,
    waLink,
  },
  setup() {
    const [pageStore] = usePage();
    const form = reactive({});
    const scriptList = ref([]);
    const showEditDialog = ref(false);
    const editItem = ref({});

    const resetForm = () => {
      form.status = '';
      form.level =  '';
      form.date = [];
    };

    const extractMessage = (item) => {
      let message = '';
      try {
        const errorMeta = JSON.parse(item.errorMeta);
        if (isObject(errorMeta)) {
          message = errorMeta.message;
        }
      } catch(e) {}
      return message;
    }

    const [getList, loadingList] = useLoading(function() {
      const param = {
        page: pageStore.page,
        pageSize: pageStore.pageSize,
        status: form.status,
        level: form.level,
        ...getQueryDate(form.date)
      };
      return getScriptList(param)
        .then((res) => {
          scriptList.value = res.rows.map(item => {
            item.message = extractMessage(item);
            return item;
          });
          pageStore.total = res.count;
        })
    });

    const onSearch = () => {
      pageStore.page = 1;
      getList();
    }

    const onReset = () => {
      pageStore.page = 1;
      resetForm();
      getList();
    }

    const onEdit = (item) => {
      editItem.value = {...item};
      showEditDialog.value = true;
    };

    resetForm();
    getList();

    return {
      Search,
      Refresh,
      SCRIPT_LEVEL_LIST, 
      SCRIPT_LEVEL_LABEL, 
      SCRIPT_STATUS_LIST,
      SCRIPT_STATUS_LABEL,

      formatViewDate,

      form,
      pageStore,

      loadingList,
      scriptList,
      getList,

      showEditDialog,
      editItem,
      onEdit,

      onSearch,
      onReset,
    };
  }
}
</script>

<style lang="less" scoped>
.wa {
  &-cell {
    max-height: 68px;
    overflow: hidden;
  }
}
</style>