import { ComponentInternalInstance } from 'vue'
/**
 *
 * @param componentName 查找的组件名
 * @param eventName 触发的事件名事件参数
 * @param params
 */
export default function useDispatch() {
  const dispatch = (
    componentName: string,
    eventName: string,
    params: any,
    instance: ComponentInternalInstance
  ) => {
    //获取父级
    let parent = instance.parent || instance.root
    let name = parent?.proxy?.$options.name
    while (parent && (!name || name !== componentName)) {
      //@ts-ignore
      parent = parent.parent
      if (parent) {
        //@ts-ignore
        name = parent.proxy.$options.name
      }
    }
    if (parent) {
      //@ts-ignore     ['update:modelValue', false]
      parent.emit.apply(parent, [eventName].concat(params))
    }
  }
  return {
    dispatch
  }
}
