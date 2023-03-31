<template>
  <div>
    <course-filter />

    <div class="m-4">
      <div class="grid grid-cols-4 gap-8">
        <u-card v-for="course in courses"
                :id="course.id"
                :image-name="course.imageName"
                :title="course.title"
                :time="course.time"
                :slug="course.slug"
                :students-count="course.studentsCount"
                :price="course.price"
                :discount="course.discount"
                :real-price="course.realPrice"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSearch} from "~/composables/search";

const courses = ref();

const search = useSearch();
onMounted(async ()=>{
  const result = await search.getCoursesByFilter();
  if(result.isSuccess)
    courses.value = result.data.data;
})
</script>