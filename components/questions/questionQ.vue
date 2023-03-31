<template>
  <article :class="['p-4 rounded-xl text-base bg-white dark:bg-gray-800']">
    <footer class="relative flex justify-between items-center mb-2">
      <div class="flex items-center">
        <p class="inline-flex items-center ml-3 text-sm text-gray-900 dark:text-white"><img
            class="ml-2 w-12 h-12 rounded-full"
            :src="`${ApiUrl}/user/avatars/${question.sender.avatar}`"
            :alt="question.sender.fullName">{{ question.sender.fullName }}</p>
        <p class="flex items-center text-sm text-gray-600 dark:text-gray-400 divide-x divide-x-reverse divide-gray-200 dark:divide-gray-700">
          <u-time :time="question.creationDate" />
          <u-date :date="question.creationDate" />
        </p>
        <u-badge color="success" class="mr-2" v-if="question.isResolved">
          <svg class="ml-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M3.57945 8.5801C3.37945 8.5801 3.18945 8.5001 3.04945 8.3601L0.219453 5.5301C-0.0705469 5.2401 -0.0705469 4.7601 0.219453 4.4701C0.509453 4.1801 0.989453 4.1801 1.27945 4.4701L3.57945 6.7701L8.71945 1.6301C9.00945 1.3401 9.48945 1.3401 9.77945 1.6301C10.0695 1.9201 10.0695 2.4001 9.77945 2.6901L4.10945 8.3601C3.96945 8.5001 3.77945 8.5801 3.57945 8.5801Z"
                fill="currentColor"/>
          </svg>
          <span>
            پاسخ داده شده
          </span>
        </u-badge>
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
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200">
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
    <p class="text-gray-500 dark:text-gray-200 mt-2" v-html="question.text">
    </p>
  </article>
</template>

<script setup lang="ts">
import {QuestionDto} from "~/models/question/questionDto";
import {ApiUrl} from "~/utilities/ApiUrls";
import {CourseDto} from "~/models/course/courseDto";

const props = defineProps<{
  question: QuestionDto,
}>();


const options = ref(false);

const toggleOptions = () => {
  options.value = !options.value;
}
</script>
