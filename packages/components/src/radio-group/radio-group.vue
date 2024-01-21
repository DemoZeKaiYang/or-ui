<template>
  <div
    class="or-radio-group"
    @click="handleKeydown"
    ref="radioGroup"
    role="radiogroup"
  >
    <slot :disabled="disabled"></slot>
  </div>
</template>

<script setup lang="ts">
import useCurrentInstance from '../../hooks/useCurrentInstance'
import { computed, onMounted } from 'vue'
defineOptions({
  name: 'or-radio-group'
})
defineProps({
  modelValue: {
    type: [String, Number, Boolean]
  },
  size: String,
  fill: String,
  textColor: String,
  disabled: Boolean
})
onMounted(() => {
  // 当radioGroup没有默认选项时，第一个可以选中Tab导航,后面再考虑实现吗,感觉作用不大
})

const { currentInstance } = useCurrentInstance()
//Object.freeze可以防止对象被修改
const keyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
})

const handleKeydown = (e: any) => {
  const target: any = e.target

  const className =
    //@ts-ignore
    target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]'
  // 获取所有的radio $el”用于获取Vue实例关联的DOM元素
  const radios = currentInstance.proxy?.$el.querySelectorAll(className)
  const length = radios.length
  //@ts-ignore因为radios返回的是伪数组,所以去改变this指向
  const index = [].indexOf.call(radios, target)
  const roleRadios = currentInstance.proxy?.$el.querySelectorAll('[role=radio]')
  switch (e.keyCode) {
    case keyCode.LEFT:
    case keyCode.UP:
      e.stopPropagation() //阻止冒泡和捕获
      e.preventDefault() //阻止默认事件
      if (index === 0) {
        roleRadios[length - 1].click()
        roleRadios[length - 1].focus()
      } else {
        roleRadios[index - 1].click()
        roleRadios[index - 1].focus()
      }
      break
    case keyCode.RIGHT:
    case keyCode.DOWN:
      if (index === length - 1) {
        e.stopPropagation()
        e.preventDefault()
        roleRadios[0].click()
        roleRadios[0].focus()
      } else {
        roleRadios[index + 1].click()
        roleRadios[index + 1].focus()
      }
      break
    default:
      break
  }
}
</script>
