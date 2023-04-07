<template>
  <div class="card">
    <div class="w-full relative">
      <NuxtLink :to="`/courses/${courseCard.slug}`">
        <base-img :src='`/ulearnit/core/course/banner/${courseCard.imageName}`' :alt="courseCard.title" class="cardImage" />
      </NuxtLink>
      <!-- <a href="" class="absolute bottom-0 left-0" data-master-name="سجاد میرشبی">
          <img src="imgs/master.jpg" class="max-w-[70px] rounded-lg rounded-bl-none ring-4 ring-slate-900" alt="master">
      </a> -->
    </div>
    <div class="cardInfo">
      <NuxtLink :to="`/courses/${courseCard.slug}`" class="cardTitle link">
        <h4>
          {{ courseCard.title }}
        </h4>
      </NuxtLink>
      <div class="cardDetails">
        <div class="detail">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{courseCard.time}}</span>
        </div>
        <div class="detail">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="currentColor"/>
            <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="currentColor"/>
          </svg>
          <span>{{ courseCard.teacherName }}</span>
        </div>
        <div class="priceDetail">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.7498C11.37 22.7498 10.78 22.5099 10.34 22.0599L8.82001 20.5399C8.70001 20.4199 8.38 20.2899 8.22 20.2899H6.06C4.76 20.2899 3.70999 19.2398 3.70999 17.9398V15.7799C3.70999 15.6199 3.57999 15.2999 3.45999 15.1799L1.94 13.6599C1.5 13.2199 1.25 12.6298 1.25 11.9998C1.25 11.3698 1.49 10.7798 1.94 10.3398L3.45999 8.81979C3.57999 8.69979 3.70999 8.37981 3.70999 8.21981V6.0599C3.70999 4.7599 4.76 3.7098 6.06 3.7098H8.22C8.38 3.7098 8.70001 3.5798 8.82001 3.4598L10.34 1.93979C11.22 1.05979 12.78 1.05979 13.66 1.93979L15.18 3.4598C15.3 3.5798 15.62 3.7098 15.78 3.7098H17.94C19.24 3.7098 20.29 4.7599 20.29 6.0599V8.21981C20.29 8.37981 20.42 8.69979 20.54 8.81979L22.06 10.3398C22.5 10.7798 22.75 11.3698 22.75 11.9998C22.75 12.6298 22.51 13.2199 22.06 13.6599L20.54 15.1799C20.42 15.2999 20.29 15.6199 20.29 15.7799V17.9398C20.29 19.2398 19.24 20.2899 17.94 20.2899H15.78C15.62 20.2899 15.3 20.4199 15.18 20.5399L13.66 22.0599C13.22 22.5099 12.63 22.7498 12 22.7498ZM4.51999 14.1198C4.91999 14.5198 5.20999 15.2199 5.20999 15.7799V17.9398C5.20999 18.4098 5.59 18.7899 6.06 18.7899H8.22C8.78 18.7899 9.48001 19.0798 9.88 19.4798L11.4 20.9998C11.72 21.3198 12.28 21.3198 12.6 20.9998L14.12 19.4798C14.52 19.0798 15.22 18.7899 15.78 18.7899H17.94C18.41 18.7899 18.79 18.4098 18.79 17.9398V15.7799C18.79 15.2199 19.08 14.5198 19.48 14.1198L21 12.5998C21.16 12.4398 21.25 12.2298 21.25 11.9998C21.25 11.7698 21.16 11.5599 21 11.3999L19.48 9.87985C19.08 9.47985 18.79 8.77981 18.79 8.21981V6.0599C18.79 5.5899 18.41 5.2098 17.94 5.2098H15.78C15.22 5.2098 14.52 4.91986 14.12 4.51986L12.6 2.99984C12.28 2.67984 11.72 2.67984 11.4 2.99984L9.88 4.51986C9.48001 4.91986 8.78 5.2098 8.22 5.2098H6.06C5.59 5.2098 5.20999 5.5899 5.20999 6.0599V8.21981C5.20999 8.77981 4.91999 9.47985 4.51999 9.87985L3 11.3999C2.84 11.5599 2.75 11.7698 2.75 11.9998C2.75 12.2298 2.84 12.4398 3 12.5998L4.51999 14.1198Z" fill="white"/>
            <path d="M15.0002 16C14.4402 16 13.9902 15.55 13.9902 15C13.9902 14.45 14.4402 14 14.9902 14C15.5402 14 15.9902 14.45 15.9902 15C15.9902 15.55 15.5502 16 15.0002 16Z" fill="white"/>
            <path d="M9.01001 10C8.45001 10 8 9.55 8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9C10 9.55 9.56001 10 9.01001 10Z" fill="white"/>
            <path d="M8.99945 15.75C8.80945 15.75 8.61945 15.68 8.46945 15.53C8.17945 15.24 8.17945 14.7599 8.46945 14.4699L14.4695 8.46994C14.7595 8.17994 15.2395 8.17994 15.5295 8.46994C15.8195 8.75994 15.8195 9.24 15.5295 9.53L9.52945 15.53C9.37945 15.68 9.18945 15.75 8.99945 15.75Z" fill="white"/>
          </svg>
          <div class="priceDiscount" v-if="courseCard.discount > 0">
            <div>
              <span class="discountBadge">{{ courseCard.discount }}%</span>
              <small>{{ courseCard.totalPrice.toLocaleString() }} تومان</small>
            </div>
            <strong>{{ courseCard.price.toLocaleString() }} <sub>تومان</sub></strong>
          </div>
          <strong v-else-if="courseCard.discount === 0 && courseCard.price > 0"> {{ courseCard.price.toLocaleString() }} <sub>تومان</sub></strong>
          <strong v-else> رایگان! </strong>
        </div>
      </div>
      <div class="flex w-full items-center mt-2 space-x-2 space-x-reverse">
        <base-button is-link :link="`/courses/${courseCard.slug}`" color="primary" fill-flex>مشاهده دوره</base-button>
        <base-button color="danger" outline id="like" @click.prevent="addToFavorite" class="p-0 grid place-items-center rounded-lg btn-outline-danger w-9 h-9">
          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.6 1C9.29038 1 10.8323 1.84142 12 2.8C13.1677 1.84142 14.7096 1 16.4 1C20.0451 1 23 3.71049 23 7.05386C23 13.795 15.3274 17.721 12.7981 18.8321C12.2886 19.056 11.7114 19.056 11.2019 18.8321C8.67259 17.721 1 13.7948 1 7.0537C1 3.71033 3.95492 1 7.6 1Z" stroke="white" stroke-width="2"/>
          </svg>
        </base-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {AddFavorite} from "~/services/course.service";
import {errorAlert, successAlert} from "~/services/alert.service";
import {CourseCardDto} from "~/models/course/courseSearchResultDto";

const props = defineProps<{
  courseCard:CourseCardDto
}>()

const addToFavorite = async ()=>{
  const result = await AddFavorite(props.id);
  if(result.isSuccess)
    successAlert();
  else
    errorAlert();
}
</script>

<style scoped>
.card{
  @apply flex flex-col rounded-lg relative overflow-clip bg-gray-800;
}
.cardImage{
  @apply w-full object-cover max-h-[270px];
}
.cardInfo{
  @apply flex flex-col py-4 px-6;
}
.cardTitle{
  @apply font-bold text-lg;
}
.cardDetails{
  @apply grid grid-cols-2 my-4;
}
.detail{
  @apply flex items-center space-x-2 space-x-reverse;
}
.detail > svg,.priceDetail > svg,.priceDetail > .priceDiscount > div > small{
  @apply opacity-70;
}
.detail > span{
  @apply text-sm;
}
.priceDetail{
  @apply flex mt-4 col-span-2 space-x-2 space-x-reverse;
}
.priceDetail > .priceDiscount{
  @apply grid grid-cols-2 items-center w-full;
}
.priceDetail > .priceDiscount > div{
  @apply flex flex-col items-center w-max;
}
.priceDetail strong{
  @apply text-2xl;
}
</style>