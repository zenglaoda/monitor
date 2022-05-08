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
  }
})
</script>


<template>
  <h1>{{ msg }}</h1>
  <h2>{{name}}</h2>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
