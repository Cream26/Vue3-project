<template>
  <div class="flex justify-between">
    <div class="flex items-center">
      <Breadcrumb />
    </div>
    <div class="flex items-center">
      <Setting />
    </div>
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>
<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>
