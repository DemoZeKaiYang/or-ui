import { createApp } from 'vue'
import App from './app.vue'
import orui from '@or-ui/components'
const app = createApp(App)
app.use(orui)
app.mount('#app')
