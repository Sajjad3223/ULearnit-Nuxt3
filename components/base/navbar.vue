<template>
  <nav class="bg-gray-50 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 mt-4">
    <div class="container flex flex-row-reverse md:flex-row flex-wrap items-center justify-between md:justify-start mx-auto">
      <NuxtLink to="/" class="flex items-center">
        <img src="~/assets/images/light-ULearnit.png" class="md:h-16 mr-3 h-12" alt="ULearn Logo" />
      </NuxtLink>
      <div class="flex flex-row-reverse items-center space-x-2 space-x-reverse md:flex-row md:order-2 md:mr-auto md:w-1/5">
        <button @click="toggleNavbar" type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
          <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          <span class="sr-only">جستجو</span>
        </button>
        <div class="relative hidden md:block md:w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            <span class="sr-only">آیکون جستجو</span>
          </div>
          <input type="text" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-indigo-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="دنبال چه آموزشی هستید؟">
        </div>
        <div>
          <user-notification v-model="showNotifs" v-if="isLogin"/>
        </div>
        <button @click="toggleNavbar" data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
          <span class="sr-only">Open menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
      <div class="items-center hidden justify-between w-full md:flex md:w-auto md:mr-8 md:order-1" id="navbar-search">
        <div class="relative mt-3 md:hidden">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
          </div>
          <input type="text" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="جستجو ...">
        </div>
        <ul id="navbarMenu" class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex md:flex-row md:space-x-8 md:space-x-reverse md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <NuxtLink to="/courses/search" class="nav-link" exact-active-class="active-nav-link" >لیست دوره ها</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/blog/search" class="nav-link" active-class="active-nav-link">وبلاگ</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contactus" class="nav-link" active-class="active-nav-link">تماس با ما</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/aboutus" class="nav-link" active-class="active-nav-link">درباره ما</NuxtLink>
          </li>
          <li v-if="!isLogin">
            <NuxtLink to="/auth/login" class="nav-link">ورود / ثبت نام</NuxtLink>
          </li>
          <li v-else>
            <NuxtLink to="/userpanel" class="nav-link">حساب کاربری</NuxtLink>
          </li>
          <li v-if="isAdmin">
            <NuxtLink to="/admin" class="nav-link">پنل ادمین</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import {useAuthStore} from "~/stores/authStore";

const authStore = useAuthStore();
const isLogin = computed(()=>authStore.isLogin);
const isAdmin = computed(()=>authStore.currentUser?.roles.some( r=>r.roleTitle === "ادمین"));

const toggleNavbar = ()=>{
  const navbarMenu = document.getElementById("navbarMenu");
  const navbarSearch = document.getElementById("navbar-search");
  navbarSearch.classList.toggle('hidden');
}

</script>