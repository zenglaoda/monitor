<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      name: 'demo'
    };
  },
  props: {
    count: null
  }
})
</script>


<template>
  <h1>{{ msg }}</h1>
  <p>
    {{count}}
    <button @click="$emit('set', 3)">set</button>
  </p>
  <h2>{{name}}</h2>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
