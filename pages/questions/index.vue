<template>
  <div class="flex-1 flex flex-col lg:ml-6" >
    <Head>
      <Title>
        پرسش و پاسخ
      </Title>
    </Head>

    <h2 class="text-2xl font-bold">پرسش و پاسخ</h2>
    <bread-crumb :links="[
              {link:'',title:'پرسش و پاسخ'},
              ]" />

    <!-- <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"> -->

    <u-table>
      <template v-slot:table-options="{showFilter}">
        <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 md:space-x-reverse flex-shrink-0">
          <div class="flex items-center space-x-3 space-x-reverse w-full md:w-auto">

            <button id="filterButton" @click.prevent="showFilter" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 ml-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
              </svg>
              فیلتر
              <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
              </svg>
            </button>
            <div id="filterMenu" class="z-10 w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700 hidden" >
              <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">انتخاب وضعیت</h6>
              <ul class="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                <li class="flex items-center">
                  <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">در حال برگزاری</label>
                </li>
                <li class="flex items-center">
                  <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">شروع به زودی</label>
                </li>
                <li class="flex items-center">
                  <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">به پایان رسیده</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </template>
      <template #table-body>
        <tr v-for="q in questions">
          <td class="p-2 bg-gray-50 dark:bg-gray-900 py-3 border border-transparent border-b-gray-300 dark:border-b-gray-700">

            <div class="flex items-center space-x-4 space-x-reverse px-4 ">
              <img class="w-10 h-10 rounded-full" :src="`${ApiUrl}/user/avatars/${q.sender.avatar}`" alt="">
              <div class="dark:text-white text-lg w-full">
                <NuxtLink :to="`/questions/${q.postId}/${q.id}`" class="font-medium hover:underline underline-offset-4">{{q.title}}</NuxtLink>
                <div class="flex-1 text-sm text-gray-500 dark:text-gray-400 flex items-center mt-2 divide-x divide-x-reverse divide-gray-200 dark:divide-gray-700">
                  <span class="px-2 border-dotted whitespace-nowrap">{{q.postTitle}}</span>
                  <span class="px-2 border-dotted whitespace-nowrap">{{q.sender.fullName}}</span>
                  <span class="px-2 border-dotted whitespace-nowrap">{{new Date(q.creationDate).toLocaleDateString('fa-IR')}}</span>
                  <span class="px-2 border-dotted whitespace-nowrap">{{q.answersCount}} پاسخ</span>
                </div>
              </div>
              <u-badge color="success" class="mr-2" v-if="q.isResolved">
                <svg class="ml-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.57945 8.5801C3.37945 8.5801 3.18945 8.5001 3.04945 8.3601L0.219453 5.5301C-0.0705469 5.2401 -0.0705469 4.7601 0.219453 4.4701C0.509453 4.1801 0.989453 4.1801 1.27945 4.4701L3.57945 6.7701L8.71945 1.6301C9.00945 1.3401 9.48945 1.3401 9.77945 1.6301C10.0695 1.9201 10.0695 2.4001 9.77945 2.6901L4.10945 8.3601C3.96945 8.5001 3.77945 8.5801 3.57945 8.5801Z" fill="currentColor"/>
                </svg>
                <span>
                      پاسخ داده شده
                    </span>
              </u-badge>
            </div>

          </td>
        </tr>
      </template>
    </u-table>
  </div>
</template>

<script setup lang="ts">
import {QuestionFilterData} from "~/models/question/questionFilterParams";
import {ApiUrl} from "~/utilities/ApiUrls";

definePageMeta({
  layout:'question',
})

const questions = ref<QuestionFilterData>();
const question = useQuestion();
onMounted(async ()=>{
  const result = await question.getQuestionsByFilter();
  if(result.isSuccess) {
    questions.value = result.data.data;
  }
})
</script>