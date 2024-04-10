<template>
  <div class="Login flex justify-center items-center w-full h-screen">
    <el-form
      class="Form w-1/3 p-5"
      :model="loginForm"
      :rules="rules"
      ref="loginForms"
    >
      <h1 class="text-5xl text-slate-50">Hello</h1>
      <h2 class="text-xl text-slate-50 my-4">欢迎来到Cream甄选</h2>
      <el-form-item prop="username">
        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          :prefix-icon="Lock"
          v-model="loginForm.password"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          :loading="loading"
          class="w-full"
          type="primary"
          size="default"
          @click="login"
        >
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
import useUserStore from '@/store/modules/user'
let useStore = useUserStore()
let loginForms = ref()
let $router = useRouter()
let $route = useRoute()
let loading = ref(false)
let loginForm = reactive({ username: 'admin', password: '111111' })
const login = async () => {
  await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    let redirect: any = $route.query.redirect
    $router.push({ path: redirect || '/' })
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI,${getTime()}好`,
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}
const validatorUserName = (rule: any, value: any, callback: any) => {
  if (value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少五位'))
  }
}

const validatorPassword = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少六位'))
  }
}

const rules = {
  username: [{ trigger: 'change', validator: validatorUserName }],
  password: [{ trigger: 'change', validator: validatorPassword }],
}
</script>
<style scoped>
.Login {
  background: url('../../assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.Login .Form {
  background: url('../../assets/images/login.PNG') no-repeat;
  background-size: cover;
}
</style>
