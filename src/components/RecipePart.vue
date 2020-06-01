<template>
  <div class="delimiter" @click="$emit('click')">
    <h2>{{title}}</h2>
    <div v-if="complete" class="right">🔘</div>
    <div v-else class="right">⚪️</div>
    <p v-html="description"></p>
  </div>
</template>
<script>
export default {
  props: ['title', 'description', 'complete']
}
</script>