<template>
  <!--          <img :src="`${ApiUrl}/core/course/banner/${course.imageName}`" alt="unreal engine course" class="w-full rounded-lg" v-if="course.introVideo === ''">-->
  <video id="videoPlayer" :poster="`${FtpUrl}/core/course/banner/${imageName}`" controls class="w-full rounded-lg" >
    <source id="videoSource" :src="`${FtpUrl}/core/course/intro/${videoName}`" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>

<script setup lang="ts">
import {FtpUrl} from "~/utilities/ApiUrls";

defineProps<{
  imageName:string,
  videoName:string,
}>()

</script>