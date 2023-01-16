import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

// 获取组件
const files = import.meta.globEager('@/components/*/*.vue')
const list = Object.keys(files)
// 组件自动化引入，无需再页面手动引入
list.forEach(item => {
    // 获取最后组件vue的文件名称
    const arr = item.replace(/\.vue$/, '').split('/')
    const component = files[item].default
    // 注册组件
    app.component(arr[arr.length - 1], component)
})


app.use(createPinia())
app.use(router)

app.mount('#app')
