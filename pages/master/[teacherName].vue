<template>
  <div v-if="masterResume !== undefined">
    <div class="p-8 px-16 w-full rounded-lg bg-gray-800 flex items-start">
      <base-img :src="`/ulearnit/user/avatars/${masterResume.user.avatar}`" class="rounded-full max-w-[170px] ring-4 ring-indigo-300"/>
      <div class="flex flex-col mr-12 flex-1">
        <h4 class="text-2xl font-bold">{{masterResume.user.fullName}}</h4>
        <span class="mt-4">درباره من:</span>
        <p>{{masterResume.user.description}}</p>
      </div>
      <div class="mr-auto flex flex-col space-y-2">
        <div class="flex items-center space-x-4 space-x-reverse">
          <span>ایمیل من:</span>
          <a :href="`mail:${masterResume.user.email}`" class="font-sans">{{masterResume.user.email}}</a>
        </div>
        <div class="flex items-center space-x-4 space-x-reverse">
          <span>سایت من:</span>
          <a :href="`${masterResume.user.website}`" class="font-sans">{{masterResume.user.website}}</a>
        </div>
      </div>
    </div>
    <u-divider :title="`دوره های استاد ${masterResume.user.fullName}`" class="my-4"/>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      <u-card v-for="c in masterCourses"
              :course-card="c" :key="c"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {MasterDto} from "~/models/master/MasterDto";
import {CourseCardDto} from "~/models/course/courseSearchResultDto";
import {GetMasterResume} from "~/services/teacher.service";
import {GetCoursesOfMaster} from "~/services/course.service";

const masterResume = ref<MasterDto>();
const masterCourses = ref<CourseCardDto[]>();
const route = useRoute();
onMounted(async ()=>{
  const masterResult = await GetMasterResume(route.params.teacherName.toString());
  if(masterResult.isSuccess){
    masterResume.value = masterResult.data;
    const coursesResult = await GetCoursesOfMaster(masterResume.value.id);
    if(coursesResult.isSuccess){
      masterCourses.value = coursesResult.data.data;
      console.log(masterResume.value)
    }
  }
})

</script>