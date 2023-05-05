<template>
  <div>
    <Head>
      <Title>
        دانشجویان دوره
      </Title>
    </Head>

    <u-divider title="دانشجویان دوره"/>

    <u-table ref="dataTable">
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
      <template #table-header>
        <th scope="col" class="px-4 py-3">آواتار</th>
        <th scope="col" class="px-4 py-3">نام و نام خانوادگی</th>
        <th scope="col" class="px-4 py-3">ایمیل</th>
        <th scope="col" class="px-4 py-3">شماره تلفن</th>
        <th scope="col" class="px-4 py-3">وبسایت</th>
      </template>
      <template v-slot:table-body="{showOption}">
        <tr  class="border-b dark:border-gray-700" v-for="(u,i) in users">
          <td class="px-4 py-3 text-white">
            <base-img :src="`/ulearnit/user/avatars/${u.avatar}`" class="w-[100px] rounded-full"/>
          </td>
          <td class="px-4 py-3 text-white">
            {{ u.fullName }}
          </td>
          <td class="px-4 py-3 text-white">
            {{ u.email }}
          </td>
          <td class="px-4 py-3 text-white">
            {{ u.phoneNumber }}
          </td>
          <td class="px-4 py-3 text-white">
            {{ u.website }}
          </td>
        </tr>
      </template>
    </u-table>
  </div>
</template>

<script setup lang="ts">
import {CourseStudentsFilterParams, UserFilterData, UserFilterParams} from "~/models/user/userFilterParams";
import {GetUsersByAdmin} from "~/services/admin/users.admin.service";
import {GetStudents} from "~/services/course.service";

definePageMeta({
  layout:'user',
  middleware:'master'
})

const users = ref<UserFilterData[]>();

const route = useRoute();
const filterParams:CourseStudentsFilterParams = reactive({
  pageId:1,
  take:10,
  courseId:Number(route.params.courseId),
})

onMounted( async ()=>{
  const result = await GetStudents(filterParams);
  if(result.isSuccess)
    users.value = result.data.data;
})

</script>