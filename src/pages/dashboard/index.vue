<template>
  <section class="wa-error">
    <h3>错误监控</h3>
    <ul class="wag-ul">
      <li>
        <el-card class="box-card">
          <template #header>
            <span>今日错误: 3</span>
          </template>
          <p>已解决: 0</p>
          <p>解决中: 0</p>
          <p>脚本错误: 1</p>
          <p>请求错误: 2</p>
        </el-card>
      </li>
      <li>
        <el-card class="box-card">
          <template #header>
            <span>错误: 20</span>
          </template>
          <p>已解决: 0</p>
          <p>解决中: 0</p>
          <p>脚本错误: 10</p>
          <p>请求错误: 10</p>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script setup>

</script>
<style lang="less" scoped>
.wa {
  &-error {
    ul {
      margin: -20px -20px 0;
      overflow: auto;
      li {
        float: left;
        width: calc(50% - 40px);
        margin: 20px 20px 0;
        box-sizing: border-box;
      }
      @media screen and (max-width: 960px) {
        margin-left: 0;
        margin-right: 0;
        margin: 0;
        li {
          width: 100%;
          margin: 20px 0 0;
          &:first-child {
            margin-top: 0;
          }
        }
      }
    }
  }
}
</style>