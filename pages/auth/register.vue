<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <Head>
      <Title>
        ساخت حساب کاربری
      </Title>
    </Head>
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      ساخت حساب کاربری
    </h1>
    <Form @submit="register" :validation-schema="registerSchema" class="space-y-4 md:space-y-6" >
      <base-input name="phoneNumber" type="tel" max-length="11" label="شماره تلفن" v-model="registerData.phoneNumber" placeholder="09120000000" isRequired />
      <base-input name="email" type="email" label="ایمیل" v-model="registerData.email" placeholder="text@example.com" isRequired />
      <base-input name="password" type="password" label="کلمه عبور" v-model="registerData.password" placeholder="••••••••" isRequired />
      <base-input name="confirmPassword" type="password" label="تکرار کلمه عبور" v-model="registerData.confirmPassword" placeholder="••••••••" isRequired />
      <base-button type="submit" color="success" w-full >ایجاد حساب</base-button>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        حساب دارید؟ <NuxtLink to="login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">وارد شوید</NuxtLink>
      </p>
    </Form>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import {RegisterUser} from "~/services/auth.service";
import {RegisterViewModel} from "~/models/auth/registerViewModel";
import * as Yup from 'yup';
import {useAuthStore} from "~/stores/authStore";

definePageMeta({
  layout:"auth",
  middleware: [
    function (to, from) {
      const authStore = useAuthStore();
      if (authStore.isLogin) {
        return navigateTo('/userpanel')
      }
    }
  ],
});

const registerSchema = Yup.object().shape({
  phoneNumber:Yup.string().length(11,"شماره تلفن نامعتبر است").required("شماره تلفن الزامی است"),
  email:Yup.string().email("ایمیل وارد شده نامعتبر است").required("ایمیل الزامی است"),
  password:Yup.string().required("رمز عبور الزامی است").min(6,"رمز عبور باید بیشتر از 5 کاراکتر باشد"),
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