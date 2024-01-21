import { ComponentInternalInstance, getCurrentInstance } from 'vue'
export default function useCurrentInstance() {
  let currentInstance = getCurrentInstance() as ComponentInternalInstance
  return { currentInstance }
}
