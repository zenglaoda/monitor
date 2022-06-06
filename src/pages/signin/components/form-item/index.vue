<script>
import { useCssModule, h, renderSlot } from 'vue';

export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const css = useCssModule();
    return function render() {
      return h(
        'div',
        {
          class: css['wac-form-item']
        },
        [
          h(
            'label',
            {
              class: css['wac-form-item__label']
            },
            [
              props.label,
            ]
          ),
          h(
            'div',
            {
              class: css['wac-form-item__content']
            },
            // renderSlot(context.slots, 'default')
          ),
        ]
      )
    }
  }
};
</script>
<style module lang="less">
.wac {

}
</style>