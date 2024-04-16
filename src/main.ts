import { createApp } from 'vue'
import App from '@/App.vue'
import '@/styles/index.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//svg插件需要配置代码
import 'virtual:svg-icons-register'
import gloalComponent from '@/components'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
//暗黑模式需要的样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router'
import pinia from './store'
//获取应用实例对象
const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn, //element-plus国际化配置
})
//安装自定义插件
app.use(gloalComponent)
app.use(pinia)
app.use(router)
//引入路由鉴权文件
import './permisstion'
//引入自定义指令文件
import { isHasButton } from '@/directive/has'
isHasButton(app)
//将应用挂载到挂载点上
app.mount('#app')
