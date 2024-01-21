<template>
  <label
    class="or-radio-button"
    :class="[
      size ? 'or-radio-button--' + size : '',
      { 'is-active': value === label },
      { 'is-disabled': isDisabled },
      { 'is-focus': focus }
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <input
      type="radio"
      class="or-radio-button__orig-radio"
      :value="label"
      v-model="value"
      :name="name"
      @change="handlerChange"
      :disabled="isDisabled"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
      autpcomplete="off"
    />
  </label>
  <span class="or-radio-button__inner"></span>
</template>

<script setup lang="ts">
import { computed, ComponentInternalInstance } from 'vue'
import useCurrentInstance from '../../hooks/useCurrentInstance'
const { currentInstance } = useCurrentInstance()
defineOptions({
  name: 'or-radio-button'
})
const props = defineProps({
  label: {
    type: [String, Number]
  },
  disabled: {
    type: Boolean,
    default: false
  },
  name: {
    type: String
  }
})
//获取or-radio-group的实例
const _radioGroup = computed(() => {
  let parent = currentInstance.parent
  while (parent) {
    if (parent.proxy?.$options.name !== 'or-radio-group') {
      parent = parent.parent
    } else {
      return parent
    }
  }
  return false
})

const size = computed(() => {
  //@ts-ignore
  return _radioGroup.value.proxy.size
})

const value = computed({
  get() {
    //@ts-ignore
    return _radioGroup.value.proxy.modelValue
  },
  set(value) {
    //@ts-ignore
    _radioGroup.value.proxy.$emit('update:modelValue', value)
  }
})
</script>

<style></style>
