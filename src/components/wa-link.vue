<template>
  <a 
    class="wac-link"
    :href="url"
    v-bind="$attrs"
  >
    <slot></slot>
  </a>
</template>

<script setup>
import { useLink } from 'vue-router';
const props = defineProps({
  to: {
    type: null,
    default: ''
  },
  replace: {
    type: Boolean,
    default: false,
  },
  href: {
    type: null,
    default: ''
  }
});

let url = props.href;
if (props.to) {
  const link = useLink({
    to: props.to,
    replace: props.replace
  });
  url = link ? link.href : '';
}

</script>

<style lang="less" scoped>
.wac {
  &-link {
    text-decoration: none;
    color: var(--el-color-primary);
  }
}
</style>