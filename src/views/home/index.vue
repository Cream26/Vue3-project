<template>
  <el-card>
    <div class="flex items-center">
      <img :src="userStore.avatar" alt="" class="w-12 h-12 rounded-full" />
      <div class="ml-5">
        <h3 class="text-3xl font-extrabold">
          {{ getTime() }}好呀{{ userStore.username }}
        </h3>
      </div>
    </div>
  </el-card>
  <div class="mt-2.5 flex justify-center">
    <svg-icon name="welcome" width="35rem" height="35rem"></svg-icon>
  </div>
</template>

<script setup lang="ts">
import { getTime } from '@/utils/time'
import useUserStore from '@/store/modules/user'
let userStore = useUserStore()
</script>
