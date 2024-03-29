<template>
  <tr class="border-b dark:border-gray-700">
    <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      <NuxtLink :to="`/masterpanel/courses/${id}/sections`" class="link" >{{ title }}</NuxtLink>
    </th>
    <td class="px-4 py-3">{{ episodes }}</td>
    <td class="px-4 py-3">
      <u-badge v-if="status === ECourseStatus.Preparing" color="warning">به زودی...</u-badge>
      <u-badge v-if="status === ECourseStatus.InProgress">در حال برگزاری</u-badge>
      <u-badge v-if="status === ECourseStatus.Completed" color="success">به اتمام رسیده</u-badge>
      <u-badge v-if="status === ECourseStatus.Canceled" color="danger">متوقف شده</u-badge>
    </td>
    <td class="px-4 py-3" v-if="price === 0">رایگان</td>
    <td class="px-4 py-3" v-else>{{price.toLocaleString()}}</td>
    <td class="px-4 py-3 flex items-center justify-end">
      <button @click="emits('showOption',index)" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
        <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
      <div class="hidden table-option z-20 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
        <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="apple-imac-27-dropdown-button">
          <li>
            <NuxtLink :to="`/courses/${slug}`" target="_blank" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">مشاهده دوره</NuxtLink>
          </li>
          <li v-if="price > 0">
            <NuxtLink :to="`/masterpanel/courses/${id}/setDiscount`" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">اعمال تخفیف</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/masterpanel/courses/${id}/students`" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">دانشجویان دوره</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/masterpanel/courses/${id}/sections`" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">مدیریت سرفصل ها</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="`/masterpanel/courses/${id}/edit`" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">ویرایش</NuxtLink>
          </li>
          <li>
            <button @click="toggleDesc" class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">جزئیات</button>
          </li>
        </ul>
      </div>
    </td>
  </tr>
  <transition enter-active-class="animate__animated animate__fadeIn animate__faster"
              leave-active-class="animate__animated animate__fadeOut animate__faster" >
    <tr v-if="showDesc" class="border-b dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
      <td colspan="5" class="text-center py-4">
        <div class="w-full grid grid-cols-1 md:grid-cols-2 place-items-center">
          <div class="flex flex-wrap space-x-2 space-x-reverse">
            <span>تعداد دانشجو ها:</span>
            <strong>{{ studentsCount }} نفر</strong>
          </div>
          <div class="flex flex-wrap space-x-2 space-x-reverse" >
            <span>مبلغ کل فروش :</span>
            <strong>{{ totalSell.toLocaleString() }} تومان</strong>
          </div>
        </div>
      </td>
    </tr>
  </transition>
</template>

<script setup lang="ts">
import {GetStudentsCount, GetTotalSell} from "~/services/course.service";
import {ECourseStatus} from "~/models/course/courseEnums";

const props = defineProps<{
  id:number,
  index:number,
  episodes:number,
  title:string,
  slug:string,
  status:ECourseStatus,
  price:number,
}>();
const emits = defineEmits(['showOption','triggerDesc'])

const showDesc = ref(false);

const studentsCount = ref(0);
const totalSell = ref(0);

onMounted(async ()=>{
  const studentsResult = await GetStudentsCount(props.id);
  if(studentsResult.isSuccess) studentsCount.value = studentsResult.data;

  if(props.price > 0)
  {
    const sellResult = await GetTotalSell(props.id);
    if(sellResult.isSuccess) totalSell.value = sellResult.data;
  }
})

const toggleDesc=()=>{
  showDesc.value = !showDesc.value;
  emits('triggerDesc');
}
</script>
