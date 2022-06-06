<script>
import { useCssModule, h } from 'vue';

export default {
  setup() {
    const css = useCssModule();

    function render() {
      return h (
        'input',
        {
          type: 'text'
        }
      );
    }

    return render;
  }
};
</script>
<style module lang="less">
.wac {
  &-input {

  }
}
</style>