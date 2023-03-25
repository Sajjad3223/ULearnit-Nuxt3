<template>
  <div class="w-full flex flex-col gap-4" v-if="episode !== undefined">
    <base-button class="self-start" is-link
                 :link="`http://localhost:3000/masterpanel/courses/${courseId}/sections/${sectionId}/episodes`">بازگشت</base-button>
    <div class="flex items-center">
      <span class="w-1/5">عنوان قسمت:</span>
      <strong class="flex-1">{{episode.title}}</strong>
    </div>
    <div class="flex items-center">
      <span class="w-1/5">عنوان انگلیسی:</span>
      <strong class="flex-1">{{episode.englishTitle}}</strong>
    </div>
    <div class="flex items-center">
      <span class="w-1/5">توضیحات:</span>
      <strong class="flex-1">{{episode.description}}</strong>
    </div>
    <div class="flex items-center">
      <span class="w-1/5">مدت زمان:</span>
      <strong class="flex-1">{{episode.time}}</strong>
    </div>
    <div class="flex items-center">
      <span class="w-1/5">تاریخ ایجاد:</span>
      <strong class="flex-1">{{episode.creationDate}}</strong>
    </div>
    <div class="flex items-center">
      <span class="w-1/5">وضعیت دوره:</span>
      <u-badge color="success" v-if="episode.isActive">منتشر شده</u-badge>
      <u-badge v-else>منتشر نشده</u-badge>
    </div>
    <div class="flex items-center">
      <span class="w-1/5">هزینه:</span>
      <u-badge color="success" v-if="episode.isFree">رایگان</u-badge>
      <u-badge v-else>نقدی</u-badge>
    </div>
    <div class="flex flex-col space-y-2">
      <span class="w-1/5">ویدئو:</span>
      <video controls class="w-full rounded-lg">
        <source :src="`${ApiUrl}/core/course/${courseId}/${sectionId}/${episode.videoName}`" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
    <div class="flex items-center">
      <span class="w-1/5">فایل ضمیمه:</span>
      <a :href="`${ApiUrl}/core/course/${courseId}/${sectionId}/${episode.attachmentName}`" class="link" download v-if="episode.attachmentName">{{episode.attachmentName}}</a>
      <strong v-else>فایل ضمیمه ندارد</strong>
    </div>

    <base-button v-if="!episode.isActive" @click="publishEpisode" color="cta">
      انتشار قسمت
    </base-button>
  </div>
</template>

<script setup lang="ts">
import {GetEpisode, PublishEpisode} from "~/services/course.service";
import {EpisodeDto} from "~/models/course/courseDto";
import {ApiUrl} from "~/utilities/ApiUrls";
definePageMeta({
  layout: "user",
});

const route = useRoute();
const router = useRouter();
const courseId = computed(()=>Number.parseInt(route.params['courseId'].toString()));
const sectionId = computed(()=>Number.parseInt(route.params['sectionId'].toString()));
const episodeId = computed(()=>Number.parseInt(route.params['episodeId'].toString()));
const episode = ref<EpisodeDto>();
onMounted( async ()=>{
  const result = await GetEpisode(episodeId.value);
  if(result.isSuccess)
  {
    episode.value = result.data;
  }
});

const publishEpisode =async ()=>{
  const result = await PublishEpisode(courseId.value,episode.value.id);
  if(result.isSuccess)
  {
    alert("قسمت با موفقیت ویرایش شد")
    router.push(`/masterpanel/courses/${courseId.value}/sections/${sectionId.value}/episodes/`);
  }
}
</script>