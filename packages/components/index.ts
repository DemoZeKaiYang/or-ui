import * as components from './src/index'
export * from './src/index'
import { App } from 'vue'
import './assets/font/iconfont.css'
export default {
  install: (app: App) => {
    for (const c in components) {
      //@ts-ignore
      app.use(components[c])
    }
  }
}
