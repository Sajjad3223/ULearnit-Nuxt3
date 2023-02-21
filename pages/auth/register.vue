<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      ساخت حساب کاربری
    </h1>
    <Form @submit.prevent="register" :validation-schema="registerSchema" class="space-y-4 md:space-y-6" >
      <div>
        <label for="tel" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">شماره تلفن</label>
        <input type="tel" name="tel" id="tel" v-model="registerData.phoneNumber" maxlength="11" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0912000000" required="">
      </div>
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
        <input type="email" name="email" id="email" v-model="registerData.email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@example.com" required="">
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رمز عبور</label>
        <input type="password" name="password" id="password" v-model="registerData.password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
      </div>
      <div>
        <label for="confirmPassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">تکرار رمز عبور</label>
        <input type="password" name="confirmPassword" id="confirmPassword" v-model="registerData.confirmPassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
      </div>
      <base-button type="submit" color="success" w-full >ایجاد حساب</base-button>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        حساب دارید؟ <NuxtLink to="login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">وارد شوید</NuxtLink>
      </p>
    </Form>
  </div>
</template>

<script setup lang="ts">

import {RegisterUser} from "~/services/auth.service";
import {RegisterViewModel} from "~/models/auth/registerViewModel";
import * as Yup from 'yup';

definePageMeta({
  layout:"auth",
});

const registerSchema = Yup.object().shape({
  phoneNumber:Yup.string().required().length(11),
  email:Yup.string().email().required(),
  password:Yup.string().required().min(6),
  confirmPassword:Yup.string().oneOf([Yup.ref('password'),null],'کلمه های عبور یکسان نیستند')
});

const registerData:RegisterViewModel = reactive({
  phoneNumber:"",
  email:"",
  password:"",
  confirmPassword:"",
})

const router = useRouter();
const register = async ()=>{
  const result = await RegisterUser(registerData);
  console.log(result)
  if(result.isSuccess)
  {
    router.push('/auth/login');
    // Toast
  }
  else {
    alert(result.metaData.message)
    // Toast
  }
}

</script>