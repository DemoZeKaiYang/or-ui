<template>
  <i :class="'or-icon-' + props.name"></i>
</template>

<script lang="ts" setup>
defineOptions({ name: 'or-icon' })
const props = defineProps({ name: String })
</script>
