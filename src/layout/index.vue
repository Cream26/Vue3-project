<template>
  <div class="w-full h-screen overflow-hidden flex overflow-x-auto">
    <!-- 左侧侧边栏 -->
    <div class="w-1/6 h-screen bg-slate-600 text-white">
      <Logo></Logo>
      <el-scrollbar>
        <el-menu
          :default-active="$route.path"
          background-color="#475569"
          text-color="white"
          active-text-color="#3dd68c"
        >
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>

    <!-- 右侧内容区 -->
    <div class="flex flex-col flex-1">
      <!-- 右上固定顶部导航栏 -->
      <div
        class="bg-gradient-to-r from-slate-400 to-slate-600 sticky top-0 z-10 p-2"
      >
        <Tabbar></Tabbar>
      </div>

      <div class="layout_main p-5 overflow-y-auto">
        <Main></Main>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//获取路由对象
import { useRoute } from 'vue-router'
//引入左侧菜单logo子组件
import Logo from './logo/index.vue'
//引入菜单组件
import Menu from './menu/index.vue'
//右侧内容展示区域
import Main from './main/index.vue'
//引入顶部tabbar组件
import Tabbar from './tabbar/index.vue'
//获取用户相关的小仓库
import useUserStore from '@/store/modules/user'
// import useLayOutSettingStore from '@/store/modules/setting'
let userStore = useUserStore()
//获取layout配置仓库

// let LayOutSettingStore = useLayOutSettingStore()

//获取路由对象
let $route = useRoute()
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<style scoped>
.layout_main::-webkit-scrollbar {
  width: 10px;
  border-radius: 5px;
}

.layout_main::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 5px;
}

.layout_main::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

.layout_main::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 5px;
}
</style>
