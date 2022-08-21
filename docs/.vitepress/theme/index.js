import DefaultTheme from 'vitepress/theme'
import ZIcon from '@weijz/components/icon'
import '@weijz/theme-chalk/src/index.scss'

console.log(ZIcon, '-ZIcon1')
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ZIcon) //在vitepress中全局注册
  }
}
