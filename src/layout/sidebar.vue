<template>
  <el-menu class="wa-menus" router>
    <el-menu-item index="/">
      <el-icon><icon-menu /></el-icon>
      <span>大盘</span>
    </el-menu-item>
    <el-menu-item index="/script">
      <el-icon><platform /></el-icon>
      <span>脚本监控</span>
    </el-menu-item>
    <el-menu-item index="/request">
      <el-icon><camera /></el-icon>
      <span>请求监控</span>
    </el-menu-item>
  </el-menu>
</template>
<script setup>
import {
  Menu as IconMenu,
  Platform,
  Camera,
} from '@element-plus/icons-vue';
</script>
<style scoped lang="less">
.wa {
	&-menus {
		min-height: 100%;
	}
}
</style>
