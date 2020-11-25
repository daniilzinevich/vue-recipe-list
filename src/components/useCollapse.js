import { ref } from 'vue'

export default () => {
  const collapsed = ref(false);
  const toggleCollapse = async () => {
    collapsed.value = !collapsed.value;
  }

  return { collapsed, toggleCollapse };
}