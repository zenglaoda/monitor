<script>
import { h, useCssModule } from 'vue';
import waForm from './components/form/index.vue';
import titleUI from './ui/title.vue';
import usernameUI from './ui/username.vue';

export default {
  setup() {
    const css = useCssModule();

    return function render() {
      return h(
        'div', 
        {
          class: css['wac-wrapper'],
        },
        [
          h(
            'div',
            {
              class: css['wac-form']
            },
            [
              h(titleUI),
              h(
                waForm,
                {},
                [
                  h(
                    usernameUI,
                  ),
                ]
              )
            ]
          )
        ]
      );
    }
  }
};
</script>
<style module lang="less">
.wac {
  &-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  &-form {
    width: 400px;
    padding: 0 24px;
    border-radius: 3px;
    border: 1px solid #ebebeb;
  }
}
</style>