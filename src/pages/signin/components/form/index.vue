<script>
import { useCssModule, h, renderSlot } from 'vue';

export default {
  setup(props, context) {
    const css = useCssModule();
    return function render() {
      return h(
        'form',
        {
          class: css['wac-form']
        },
        [
          renderSlot(context.slots, 'default')
        ]
      )
    }
  }
};
</script>
<style module lang="less">
.wac {
  &-form {
  }
}
</style>