<template>
  <button
    class="or-button"
    @click="handleClick"
    :class="[
      buttonStyle,
      {
        'is-disabled': buttonProps.disabled,
        'is-loading': buttonProps.loading,
        'is-plain': buttonProps.plain,
        'is-round': buttonProps.round,
        'is-circle': buttonProps.circle
      },
      buttonSize
    ]"
    :disabled="buttonProps.disabled"
    :autofocus="buttonProps.autofocus"
  >
    <i
      v-if="buttonProps.icon"
      :class="`or-icon-${icon}`"
      style="font-size: 16px"
    ></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts" setup>
import './style/index.less'
import { computed } from 'vue'
const emit = defineEmits(['click'])
defineOptions({ name: 'or-button' })
const buttonProps = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  size: String,
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: String,
  autofocus: {
    type: Boolean,
    default: false
  },
  'native-type': {
    type: String,
    default: 'button'
  }
})

const buttonStyle = computed(() => {
  return { [`or-button--${buttonProps.type}`]: buttonProps.type }
})
const buttonSize = computed(() => {
  return { [`or-button--${buttonProps.size}`]: buttonProps.size }
})
//点击事件
const handleClick = (evt: any) => {
  emit('click', evt)
}
</script>
