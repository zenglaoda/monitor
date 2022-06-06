<template>
  <div class="wa-wrapper">
    <ul class="wag-ul wa-list">
      <li
        class="wa-item"
        v-for="item in projects"
        :key="item.id"
        @click="onClick(item)"
      >
        <el-card shadow="hover">
          <h2>{{ item.name }}</h2>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { getProjectList } from "@/apis/project";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

		const projects = ref([]);

		getProjectList()
			.then((res) => {
				projects.value = res;
			});

    const onClick = (item) => {
      store.commit("SET_PROJECT", item);
      router.replace('/');
    };

    return {
      projects,
      onClick,
    };
  },
};
</script>


<style scoped lang="less">
.wa {
  &-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-list {
    overflow: auto;
  }
  &-item {
    float: left;
    width: 200px;
    margin: 15px;
    text-align: center;
    cursor: pointer;
  }
}
</style>