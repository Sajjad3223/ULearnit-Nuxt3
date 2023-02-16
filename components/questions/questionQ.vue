<template>
  <article :class="['p-4 rounded-xl text-base bg-white dark:bg-gray-800',{'mr-6 lg:mr-12':isChild}]">
    <footer class="relative flex justify-between items-center mb-2">
      <div class="flex items-center">
        <p class="inline-flex items-center ml-3 text-sm text-gray-900 dark:text-white"><img
            class="ml-2 w-12 h-12 rounded-full"
            src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
            alt="Michael Gough">نام کاربری</p>
        <p class="text-sm text-gray-600 dark:text-gray-400">
          <time pubdate datetime="2022-02-08"
                title="دوشنبه 16 ام بهمن">1401/11/16</time>
        </p>
      </div>
      <button @click.prevent="toggleOptions"
              class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button">
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
          </path>
        </svg>
        <span class="sr-only">Comment settings</span>
      </button>
      <!-- Dropdown menu -->
      <div v-if="options"
           class="absolute left-0 top-12 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" >
          <li>
            <a href="#"
               class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ویرایش</a>
          </li>
          <li>
            <a href="#"
               class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">حذف</a>
          </li>
          <li>
            <a href="#"
               class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">گزارش</a>
          </li>
        </ul>
      </div>
    </footer>
    <p class="text-gray-500 dark:text-gray-200 mt-2">
      سلام استاد من تو پروژه عملی اصلی فایل کاراکتر رو دانلود کردم اون بخش اول که میرید تو skeleton چیزی نیست توش animationblueprnt درستش میکنید من این دو روش رو رفتم ولی تو جفتش هم خالی بود اسکلت نمیاد
    </p>
  </article>
</template>

<script setup>
  defineProps({
    isChild:{
      type:Boolean,
      default:false,
    }
  })

  const options = ref(false);

  const toggleOptions=()=>{
    options.value = !options.value;
  }
</script>
