<template>
  <li class="video">
    <div class="vid">
      <span class="counter">{{index}}</span>
      <strong class="video-title">
        <a href="javascript:void(0);" @click.prevent="toggleDescription">{{episode.title}}</a>
      </strong>
      <div class="actions">
        <div class="flex flex-row-reverse items-center space-x-2"
             v-if="userHasCourse ||
                   authStore.currentUser?.id === teacherUserId ||
                   coursePrice == 0 ||
                  episode.isFree">
          <base-button title="دانلود ویدئو" class="rounded-full" outline @click="downloadEpisode">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 11.51L12 14.51L15 11.51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M12 14.51V6.51001" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </base-button>
          <base-button @click="playOnline" outline color="info" class="rounded-full" title="پخش آنلاین">
            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 12.6667C1 16.1103 1.47113 17.7378 2.55206 18.6385C3.10728 19.1012 3.91538 19.4519 5.14546 19.6797C6.3781 19.908 7.95994 20 10 20C12.0401 20 13.6219 19.908 14.8545 19.6797C16.0846 19.4519 16.8927 19.1012 17.4479 18.6385C18.5289 17.7378 19 16.1103 19 12.6667C19 9.22303 18.5289 7.59556 17.4479 6.69478C16.8927 6.2321 16.0846 5.88147 14.8545 5.65366C13.6219 5.42537 12.0401 5.33333 10 5.33333C7.95994 5.33333 6.3781 5.42537 5.14546 5.65366C3.91538 5.88147 3.10728 6.2321 2.55206 6.69478C1.47113 7.59556 1 9.22303 1 12.6667Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 1.83325L10 4.33325L15 1.83325" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </base-button>
          <base-button title="فایل ضمیمه" outline color="secondary" class="rounded-full" v-if="episode.hasAttachment" @click="downloadAttachment">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.18009 16.0199C7.42009 15.9499 6.6701 15.5999 6.0901 14.9899C4.7701 13.5999 4.7701 11.3199 6.0901 9.92989L8.2801 7.6299C9.6001 6.2399 11.7701 6.2399 13.1001 7.6299C14.4201 9.0199 14.4201 11.2999 13.1001 12.6899L12.0101 13.8399" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.8202 7.97998C16.5802 8.04998 17.3302 8.39998 17.9102 9.00998C19.2302 10.4 19.2302 12.68 17.9102 14.07L15.7202 16.37C14.4002 17.76 12.2302 17.76 10.9002 16.37C9.58016 14.98 9.58016 12.7 10.9002 11.31L11.9902 10.16" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </base-button>
        </div>
        <base-button title="شما این دوره را خریداری نکرده اید" class="rounded-full" outline color="danger" v-else>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z" fill="currentColor"/>
            <path d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z" fill="currentColor"/>
          </svg>
        </base-button>
        <u-badge class="video-time" dir="ltr">{{episode.time}}</u-badge>
      </div>
    </div>
    <transition enter-active-class="animate__animated animate__fadeInDown animate__faster"
                leave-active-class="animate__animated animate__fadeOutUp animate__faster" >
      <p class="text-sm p-2" v-if="showDesc">
        {{ episode.description }}
      </p>
    </transition>
  </li>
</template>

<script setup lang="ts">
import {EpisodeDto} from "~/models/course/courseDto";
import {useAuthStore} from "~/stores/authStore";
import {GetEpisodeAttachmentFile, GetEpisodeVideo, GetEpisodeVideoFile} from "~/services/course.service";
import {errorAlert} from "~/services/alert.service";
import {ApiUrl} from "~/utilities/ApiUrls";

const props = defineProps<{
  episode:EpisodeDto,
  index:Number,
  sectionIndex:Number,
  userHasCourse:boolean,
  coursePrice:Number,
  teacherUserId:Number
}>()
const showDesc = ref(false);

const route = useRoute();
const router = useRouter();

const authStore = useAuthStore();

const toggleDescription=()=>{
  showDesc.value = !showDesc.value;
}
const playOnline= async ()=>{
  const result = await GetEpisodeVideo(props.episode.token);
  if(result.isSuccess) {
    if (result.data === "")
      errorAlert("لطفا ابتدا در دوره ثبت نام کنید")
    else{
      const videoPlayer = document.getElementById("videoPlayer");
      videoPlayer?.pause();
      let source = document.getElementsByTagName('source')[0];
      if(source === null)
        source = document.createElement('source');
      source?.setAttribute('src',`${ApiUrl}/core/course/${props.episode.courseId}/${props.episode.sectionId}/${result.data}`);
      source?.setAttribute('type','video/mp4');
      videoPlayer?.appendChild(source);
      videoPlayer?.load();

      scrollTo({top:videoPlayer?.offsetTop})
      setTimeout(()=>{
        videoPlayer?.play();
      },1500)
    }
  }
}
const downloadEpisode= async ()=>{
  const result = await GetEpisodeVideoFile(props.episode.token);
  if(result !== undefined || result !== null || result.isSuccess){
    resolveAndDownloadBlob(result,`${props.sectionIndex}_${props.index}_${props.episode.englishTitle}`);
  }
}
const downloadAttachment= async ()=>{
  const result = await GetEpisodeAttachmentFile(props.episode.token);
  console.log(result);
  if(result !== undefined || result !== null || result.isSuccess){
    resolveAndDownloadBlob(result,`${props.sectionIndex}_${props.index}_${props.episode.englishTitle}.rar`);
  }
}

const resolveAndDownloadBlob = (response: any,fileName:string) => {
  const url = window.URL.createObjectURL(response);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName);
  link.setAttribute('target', '_blank');
  document.body.appendChild(link);
  link.click();
  window.URL.revokeObjectURL(url);
  link.remove();
}
</script>