<template>
  <nav v-if="paginationData != undefined">
    <ul class="inline-flex -space-x-px space-x-reverse">
      <li v-if="paginationData.currentPage > 1">
        <a href="javascript:void(0)" @click="changePageId(paginationData.currentPage - 1)" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">قبلی</a>
      </li>
      <li v-for="p in paginationData.pageCount">
        <a v-if="paginationData.currentPage === p"
           href="javascript:void(0)"
           :class="['px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
           {'rounded-l-lg':paginationData.currentPage === paginationData.pageCount},
           {'rounded-r-lg':paginationData.currentPage === 1}]">{{p}}</a>
        <a v-else
           href="javascript:void(0)" @click="changePageId(p)"
           class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{{p}}</a>
      </li>
      <li v-if="paginationData.currentPage < paginationData.pageCount">
        <a
            href="javascript:void(0)" @click="changePageId(paginationData.currentPage + 1)"
            class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">بعدی</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {PaginationData} from "~/models/baseFilterResult";

const props = defineProps<{
  paginationData:PaginationData
}>();

const route = useRoute();
const router = useRouter();
const changePageId = (pageId:number)=>{
  if(pageId == props.paginationData.currentPage) return;
  const currentPath = route.path;
  const queryParams = route.query;
  router.push({
    path: currentPath,
    query: { ...queryParams, pageId:pageId },
  });
}
</script>