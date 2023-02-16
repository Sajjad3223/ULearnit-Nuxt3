<template>
  <div class="flex items-center">
    <div class="w-8 lg:w-16">
      <span v-if="isCorrect" class="bg-gray-100 text-green-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-full dark:bg-gray-800 dark:text-green-300">
        <svg aria-hidden="true" class="w-6 h-6 lg:w-12 lg:h-12" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Icon description</span>
      </span>
    </div>
    <article :class="['mr-2 p-4 rounded-xl flex-1 text-base bg-white dark:bg-gray-800']">
      <footer class="relative flex justify-between items-center mb-2">
        <div class="flex items-center">
          <p class="inline-flex items-center ml-3 text-sm text-gray-900 dark:text-white"><img
              class="ml-2 w-12 h-12 rounded-full"
              src="/imgs/user.png"
              alt="Michael Gough">نام کاربری</p>
          <p class="text-sm text-gray-600 dark:text-gray-400 divide-x divide-gray-200 dark:divide-gray-700">
            <time class="pr-2 border-dotted" pubdate datetime="19-57"
                  title="ساعت 19 و 57 دقیقه">19:57</time>
            <time class="pl-2 border-dotted" pubdate datetime="2022-02-08"
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
        سلام حسام جان
        <br>
        یکی دیگه از دوستان هم همین مشکل رو داشت و دلیلی این بود که Skeleton اشتباهی رو انتخاب میکردند
        مثل اینکه اون پروژه دو تا Skeleton داره که یکیش خالیه
        <br>
        توی فایل ها بگردید اون نسخه درستش رو پیدا میکنید
      </p>
    </article>
  </div>
</template>

<script setup>
  defineProps({
    isCorrect:{
      type:Boolean,
      default:false,
    }
  })

  const options = ref(false);

  const toggleOptions=()=>{
    options.value = !options.value;
  }
</script>
