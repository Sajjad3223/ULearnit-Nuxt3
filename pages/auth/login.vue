<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <Head>
      <Title>
        ورود به حساب
      </Title>
    </Head>
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      ورود به حساب کاربری
    </h1>
    <Form @submit="login" :validation-schema="loginSchema" class="space-y-4 md:space-y-6" >
      <base-input name="username" type="text" label="ایمیل / تلفن همراه" v-model="loginData.username" placeholder="ایمیل یا شماره تلفن خود را وارد کنید" isRequired />
      <base-input name="password" type="password" label="کلمه عبور" v-model="loginData.password" placeholder="••••••••" isRequired />
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input id="rememberMe" aria-describedby="rememberMe" type="checkbox" v-model="loginData.rememberMe" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800">
        </div>
        <div class="ml-3 text-sm">
          <label for="rememberMe" class="font-light text-gray-500 dark:text-gray-300">مرا به خاطر بسپار</label>
        </div>
      </div>
      <base-button type="submit" w-full>ورود به حساب</base-button>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        حساب ندارید؟ <NuxtLink to="register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">ثبت نام کنید</NuxtLink>
      </p>
    </Form>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import {LoginUser} from "~/services/auth.service";
import {LoginViewModel} from "~/models/auth/loginViewModel";
import * as Yup from "yup";
import {useAuthStore} from "~/stores/authStore";
import {errorAlert, successAlert} from "~/services/alert.service";

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
})

const loginSchema = Yup.object().shape({
  username:Yup.string().required("نام کاربری الزامی است"),
  password:Yup.string().min(6,"کلمه عبور باید بیشتر از 5 کاراکتر باشد").required("کلمه عبور الزامی است"),
});

const loginData : LoginViewModel = reactive({
  username:"",
  password:"",
  rememberMe:false,
});

const router = useRouter();
const authStore = useAuthStore();
const login = async (data,formEvent)=>{
  const result = await LoginUser(loginData);
  console.log(result)
  if(result.isSuccess)
  {
    localStorage.setItem("auth-data",JSON.stringify(result.data));
    authStore.setCurrentUser();
    successAlert();
    const returnTo = router.currentRoute.value.query.returnTo?.toString();
    if(returnTo){
      await router.push(returnTo);
    }
    else {
      await router.push('/userpanel');
    }
  }
  else {
    formEvent.setFieldError(
        "phoneNumber",
        result.metaData.message
    )
    errorAlert(result.metaData.message);
  }
};

</script>