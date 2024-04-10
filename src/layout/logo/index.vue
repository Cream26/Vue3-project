<template>
  <div class="flex items-center px-6" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="" class="my-3" />
    <p class="text-2xl font-semibold mx-3 my-3">{{ setting.title }}</p>
  </div>
</template>

<script setup lang="ts">
import setting from '@/setting'
</script>
<script lang="ts">
export default {
  name: 'Logo',
}
</script>
