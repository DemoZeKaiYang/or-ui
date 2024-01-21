<template>
  <label
    class="or-radio"
    :class="[
      border && radioSize ? 'or-radio--' + radioSize : '',
      { 'is-disabled': isDisabled },
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <!-- 原生的input按钮,要隐藏 -->
    <span class="or-radio_input" :class="{ 'is-disabled': isDisabled, 'is-checked': model === label }">
      <span class="or-radio_inner"></span>
      <input
        ref="radio"
        class="or-radio_original"
        :value="label"
        type="radio"
        v-model="model"
        @change="handlerChange"
        @focus="focus = true"
        @blur="focus = false"
        :name="name"
        :disabled="isDisabled"
        autocomplete="off"
        tabindex="-1"
      />
    </span>
    <!-- 内容的插槽 -->
    <span class="or-radio_label" @keydown.stop>
      <slot></slot>
      <template v-if="!$slots.default">{{ label }} </template>
    </span>
  </label>
</template>

<script setup lang="ts">
import { ref, computed, getCurrentInstance, nextTick, onMounted } from 'vue'
import useDispatch from '../../hooks/useDispatch'
import './style/index.less'
import useCurrentInstance from '../../hooks/useCurrentInstance'
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

  modelValue: {
    type: [String, Number, Boolean, Object]
  }
})
const emit = defineEmits(['update:modelValue', 'change'])
const focus = ref<boolean>(false)
const radio = ref<HTMLInputElement | null>(null)
const { dispatch } = useDispatch()
const { currentInstance } = useCurrentInstance()
//计算当前实例是否被OrRadioGroup包裹
//false说明没有被OrRadioGroup包，true说在当前实例挂有radioGroup=parent
const isGroup = computed(() => {
  let parent = currentInstance.parent
  //获取当前实例的父组件的defineOptions的名字
  while (parent) {
    if (parent.proxy?.$options.name !== 'or-radio-group') {
      parent = parent.parent
    } else {
      //@ts-ignore
      currentInstance._radioGroup = parent
      return true
    }
  }
  return false
})

//返回值
const model = computed({
  get() {
    return isGroup.value
      ? //@ts-ignore
        currentInstance._radioGroup.proxy.modelValue
      : props.modelValue
  },
  set(val) {
    if (isGroup.value) {
      dispatch('or-radio-group', 'update:modelValue', [val], currentInstance)
    } else {
      emit('update:modelValue', val)
    }
    radio.value && (radio.value.checked = model.value === props.label)
  }
})
//计算tab按键的下标
const tabIndex = computed(() => {
  return props.disabled || (isGroup.value && model.value !== props.label) ? -1 : 0
})

const isDisabled = computed(() => {
  //@ts-ignore
  return isGroup.value ? currentInstance._radioGroup.proxy.disabled || props.disabled : props.disabled
})

const radioSize = computed(() => {
  //@ts-ignore
  return isGroup.value ? currentInstance._radioGroup.proxy.size || props.size : props.size
})
const handlerChange = () => {
  nextTick(() => {
    emit('change', model.value)
    isGroup.value && dispatch('or-radio-group', 'handlerChange', model.value, currentInstance)
  })
}
</script>

<style></style>
