<template>
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
      ورود به حساب کاربری
    </h1>
    <form class="space-y-4 md:space-y-6" action="#">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ایمیل</label>
        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@example.com" required="">
      </div>
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">رمز عبور</label>
        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
      </div>
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="">
        </div>
        <div class="ml-3 text-sm">
          <label for="terms" class="font-light text-gray-500 dark:text-gray-300">مرا به خاطر بسپار</label>
        </div>
      </div>
      <base-button type="submit" w-full>ورود به حساب</base-button>
      <p class="text-sm font-light text-gray-500 dark:text-gray-400">
        حساب ندارید؟ <NuxtLink to="register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">ثبت نام کنید</NuxtLink>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout:"auth",
})

</script>