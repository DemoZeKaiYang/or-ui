import * as components from './src/index'
export * from './src/index'
import { App } from 'vue'
//引入字体图标库
import './src/asset/font/iconfont.css'
export default {
  install: (app: App) => {
    for (let c in components) {
      //@ts-ignore
      app.use(components[c])
    }
  }
}
