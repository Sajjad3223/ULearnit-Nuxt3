<template>

<div>
  <u-banner />

  <div class="flex justify-between mb-2 items-end">
    <h4 class="text-xl font-semibold">آخرین دوره ها:</h4>
    <NuxtLink to="/courses/search" class="link">
      مشاهده همه
    </NuxtLink>
  </div>
  <hr class="my-4">

  <div class="m-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <u-card v-for="course in courses"
              :course-card="course" :key="course"/>
    </div>
    <!-- <a href="" class="seeAll btn btn-cta">
        مشاهده همه دوره ها
    </a> -->
  </div>
</div>

</template>

<script setup lang="ts">
useHead({
  title:"صفحه اصلی"
})

import {GetCourseFilter} from "~/services/course.service";
import {CourseFilterParams} from "~/models/course/courseSearchResultDto";

const filterParams:CourseFilterParams = reactive({
  pageId : 1,
  take : 10,
});
const courses = ref();

onMounted(async ()=>{
  const result = await GetCourseFilter(filterParams);
  if(result.isSuccess)
    courses.value = result.data.data;
})
</script>
