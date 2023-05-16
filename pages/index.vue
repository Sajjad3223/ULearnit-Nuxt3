<template>
<div>
  <Head>
    <Title>یولرنیت - مرجع تخصصی آموزش بازی سازی</Title>

  </Head>

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
      <u-card v-if="courses != undefined" v-for="course in courses"
              :course-card="course" :key="course"/>
      <card-skeleton v-for="i in 4" v-else/>
    </div>
    <!-- <a href="" class="seeAll btn btn-cta">
        مشاهده همه دوره ها
    </a> -->
  </div>

  <div class="flex justify-between mb-2 items-end">
    <h4 class="text-xl font-semibold">آخرین مقالات:</h4>
    <NuxtLink to="/blog/search" class="link">
      مشاهده همه
    </NuxtLink>
  </div>
  <hr class="my-4">

  <div class="m-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      <blog-card v-if="posts != undefined" v-for="post in posts"
              :post="post" :key="post"/>
      <card-skeleton v-for="i in 4" v-else/>
    </div>
  </div>
</div>

</template>

<script setup lang="ts">
import {GetCourseFilter} from "~/services/course.service";
import {CourseCardDto, CourseFilterParams} from "~/models/course/courseSearchResultDto";
import {PostFilterData, PostFilterParams} from "~/models/post/postFilterData";
import {GetPostsByFilter} from "~/services/blog.service";

const filterParams:CourseFilterParams = reactive({
  pageId : 1,
  take : 10,
});
const postFilterParams:PostFilterParams = reactive({
  pageId : 1,
  take : 5,
});
const courses = ref<CourseCardDto[]>();
const posts = ref<PostFilterData[]>();

onMounted(async ()=>{
  const result = await GetCourseFilter(filterParams);
  const postResult = await GetPostsByFilter(postFilterParams);
  if(result.isSuccess)
    courses.value = result.data.data;
  if(postResult.isSuccess)
    posts.value = postResult.data.data;
})
</script>
