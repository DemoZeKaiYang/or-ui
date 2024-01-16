<template>
  <label
    for=""
    class="or-radio"
    :class="[
      border && size ? 'el-radio--' + size : '',
      { 'is-disabled': disabled },
      { 'is-focus': focus },
      { 'is-bordered': border }
    ]"
  >
    <!-- 原生的input按钮,要隐藏 -->
    <span class="or-radio_input">
      <span class="el-radio_inner"></span>
      <input type="radio" ref="radio" @change="handlerChange" />
    </span>
    <!-- 内容的插槽 -->
    <span class="or-radio_label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }} </template>
    </span>
  </label>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  getCurrentInstance,
  ComponentInternalInstance
} from 'vue'

defineOptions({
  name: 'or-radio'
})
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  name: String,
  size: String,
  border: {
    type: Boolean,
    default: false
  },
  label: {
    type: [String, Number, Boolean]
  },
  value: {
    type: [String, Number, Boolean]
  }
})
const emit = defineEmits(['input'])
const focus = ref<boolean>(false)
const radio = ref()

//返回值
const model = computed({
  get() {
    return isGroup
      ? (getCurrentInstance() as any)._radioGroup.value
      : props.value
  },
  set(val) {
    if (isGroup) {
      // dispatch('ElRadioGroup', 'input', [val])
    } else {
      emit('input', val)
    }
    // radio && (radio.checked = model === props.label)
  }
})

//计算当前实例是否被OrRadioGroup包裹
const isGroup = computed(() => {
  let parent: any = getCurrentInstance()?.parent
  //获取当前实例的父组件的defineOptions的名字
  while (parent) {
    if (parent.ctx.$options.name !== 'or-radio-group') {
      parent = parent.$parent
    } else {
      ;(getCurrentInstance() as any)._radioGroup = parent
      return true
    }
  }
  return false
})
const handlerChange = () => {}
</script>

<style></style>
