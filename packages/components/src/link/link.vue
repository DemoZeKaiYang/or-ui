<template>
  <a
    :href="disabled ? undefined : href"
    :class="[
      'or-link',
      type ? `or-link--${type}` : '',
      disabled && 'is-disabled',
      underline && !disabled && 'is-underline'
    ]"
    v-bind="$attrs"
    @click="handleClick"
  >
    <i v-if="icon" :class="`or-icon-${icon}`" style="font-size: 16px"></i>
    <span v-if="$slots.default" class="or-link--inner">
      <slot></slot>
    </span>
  </a>
</template>

<script setup lang="ts">
import './style/index.less'
defineOptions({
  name: 'or-link'
})
const emit = defineEmits(['click'])
const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  href: String,
  icon: String
})

const handleClick = (event: any) => {
  if (!props.disabled) {
    if (!props.href) {
      emit('click', event)
    }
  }
}
</script>
