<script>
import { h, useCssModule } from 'vue';

export default {
  setup() {
    return function render() {
      const css = useCssModule();
      return h(
        'h3',
        {
          class: css['wac-title']
        },
        '登录'
      )
    }
  }
};
</script>
<style lang="less" module>
.wac {
  &-title {
    margin: 20px;
    color: #606266;
    text-align: center;
    letter-spacing: 20px;
  }
}
</style>