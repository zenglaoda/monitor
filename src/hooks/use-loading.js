import { ref } from "vue";

export function useLoading(callback, initial) {
  const laoding = ref(initial);
  function wrapper(...args) {
    laoding.value = true;
    return callback(...args)
      .finally(() => {
        laoding.value = false;
      });
  }
  return [wrapper, laoding];
}
