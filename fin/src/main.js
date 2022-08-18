import { createApp } from 'vue'
import router from './routes'
import App from './App.vue'
// 한 줄 안 띄우면 번들할 때 에러가 날 수 있다함

createApp(App)
  .use(router)
  .mount('#app')
