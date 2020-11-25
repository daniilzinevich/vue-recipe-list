<template>
  <div
    :class="[
      'delimiter',
      { complete }
    ]"
    @click="$emit('click')"
  >
    <div class="close" @click.stop="toggleCollapse">➖</div>
    <h2>{{title}}</h2>
    <div v-if="!collapsed">
      <div v-if="complete" class="right">🔘</div>
      <div v-else class="right">⚪️</div>
      <p v-html="description"></p>
    </div>
  </div>
</template>
<script>
import useCollapse from './useCollapse'

export default {
  props: {
    title: String,
    description: String,
    complete: Boolean,
  },
  emits: ['click'],
  setup() { return useCollapse() },
}
</script>