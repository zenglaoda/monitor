import { reactive } from "vue";

export function usePage() {
  const initialState = {
    page: 1,
    pageSize: 10,
    total: 0,
  };
  
  const data = reactive(initialState);

  function resetState() {
    Object.assign(data, initialState);
  }

  return [data, resetState];
}