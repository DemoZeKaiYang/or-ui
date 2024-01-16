import { getCurrentInstance } from 'vue'
export function dispatch(
  componentName: string,
  eventName: string,
  params: any
) {
  let currentInstance = getCurrentInstance()
  let parent = currentInstance?.parent
}
