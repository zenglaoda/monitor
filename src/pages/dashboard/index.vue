<template>
  <section class="wa-error">

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