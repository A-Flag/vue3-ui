import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Icon from '@weijz/components/icon'
import '@weijz/theme-chalk/src/index.scss'

const plugins=[
    Icon
]

const app=createApp(App)

plugins.forEach(plugins=>app.use(plugins))

app.mount('#app')
