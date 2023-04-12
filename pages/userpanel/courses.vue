<template>
  <div>
    <Head>
      <Title>
        دوره های من
      </Title>
    </Head>

    <u-divider title="دوره های من"/>
    <div class="w-full mt-4">
      <u-table >
        <template #table-header>
          <th scope="col" class="px-4 py-3">نام دوره</th>
          <th scope="col" class="px-4 py-3">وضعیت دوره</th>
          <th scope="col" class="px-4 py-3">قیمت (تومان)</th>
          <th scope="col" class="px-4 py-3">
            <span class="sr-only">عملیات</span>
          </th>
        </template>
        <template v-slot:table-body="{showOption}">
          <tr class="border-b dark:border-gray-700" v-for="(c,i) in courses">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink :to="`/courses/${c.slug}`" class="link" >{{c.title}}</NuxtLink>
            </th>
            <td class="px-4 py-3">
              <u-badge v-if="c.courseStatus === ECourseStatus.Preparing" color="warning">به زودی...</u-badge>
              <u-badge v-if="c.courseStatus === ECourseStatus.InProgress">در حال برگزاری</u-badge>
              <u-badge v-if="c.courseStatus === ECourseStatus.Completed" color="success">به اتمام رسیده</u-badge>
              <u-badge v-if="c.courseStatus === ECourseStatus.Canceled" color="danger">متوقف شده</u-badge>
            </td>
            <td class="px-4 py-3">{{c.price.toLocaleString()}}</td>
            <td class="px-4 py-3 flex items-center justify-end">
              <button @click.prevent="showOption(i)" id="apple-imac-27-dropdown-button" data-dropdown-toggle="apple-imac-27-dropdown" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              <div ref="options" class="table-option absolute hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
                  <li>
                    <NuxtLink :to="`/courses/${c.slug}`" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">نمایش</NuxtLink>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </template>
      </u-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {CourseFilterResult} from "~/models/course/courseSearchResultDto";
import {GetUserCourses} from "~/services/course.service";
import {ECourseStatus} from "~/models/course/courseEnums";

definePageMeta({
  layout:"user",
  middleware:'auth',
})

const courses = ref<CourseFilterResult>();

onMounted(async ()=>{
  const result= await GetUserCourses();
  if(result.isSuccess) {
    courses.value = result.data.data;
  }
})

</script>