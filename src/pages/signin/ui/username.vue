<script>
import { h, useCssModule } from 'vue';
import FormItem from '../components/form-item/index.vue';
import Input from '../components/input/index.vue';

export default {
  props: {
  },
  setup() {
    const css = useCssModule();

    return function render() {
      return h(
        FormItem,
        {
          label: '用户名'
        },
        [
          h(Input)
        ]
      );
    }
  }
};
</script>
<style module lang="less">
.wac {
  &-username {
  }
  &-label {}
  &-content {}
}
</style>