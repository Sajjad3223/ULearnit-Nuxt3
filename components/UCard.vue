<template>
  <div class="card">
    <div class="w-full relative">
      <NuxtLink :to="`/courses/${slug}`">
        <img :src='`${ApiUrl}/core/course/banner/${imageName}`' :alt="title" class="cardImage">
      </NuxtLink>
      <!-- <a href="" class="absolute bottom-0 left-0" data-master-name="سجاد میرشبی">
          <img src="imgs/master.jpg" class="max-w-[70px] rounded-lg rounded-bl-none ring-4 ring-slate-900" alt="master">
      </a> -->
    </div>
    <div class="cardInfo">
      <NuxtLink :to="`/courses/${slug}`" class="cardTitle link">
        <h4>
          {{ title }}
        </h4>
      </NuxtLink>
      <div class="cardDetails">
        <div class="detail">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>{{time}} دقیقه</span>
        </div>
        <div class="detail">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16055 11.62C9.13055 11.62 9.11055 11.62 9.08055 11.62C9.03055 11.61 8.96055 11.61 8.90055 11.62C6.00055 11.53 3.81055 9.25 3.81055 6.44C3.81055 3.58 6.14055 1.25 9.00055 1.25C11.8605 1.25 14.1905 3.58 14.1905 6.44C14.1805 9.25 11.9805 11.53 9.19055 11.62C9.18055 11.62 9.17055 11.62 9.16055 11.62ZM9.00055 2.75C6.97055 2.75 5.31055 4.41 5.31055 6.44C5.31055 8.44 6.87055 10.05 8.86055 10.12C8.92055 10.11 9.05055 10.11 9.18055 10.12C11.1405 10.03 12.6805 8.42 12.6905 6.44C12.6905 4.41 11.0305 2.75 9.00055 2.75Z" fill="white"/>
            <path d="M16.5404 11.75C16.5104 11.75 16.4804 11.75 16.4504 11.74C16.0404 11.78 15.6204 11.49 15.5804 11.08C15.5404 10.67 15.7904 10.3 16.2004 10.25C16.3204 10.24 16.4504 10.24 16.5604 10.24C18.0204 10.16 19.1604 8.96 19.1604 7.49C19.1604 5.97 17.9304 4.74 16.4104 4.74C16.0004 4.75 15.6604 4.41 15.6604 4C15.6604 3.59 16.0004 3.25 16.4104 3.25C18.7504 3.25 20.6604 5.16 20.6604 7.5C20.6604 9.8 18.8604 11.66 16.5704 11.75C16.5604 11.75 16.5504 11.75 16.5404 11.75Z" fill="white"/>
            <path d="M9.16961 22.55C7.20961 22.55 5.23961 22.05 3.74961 21.05C2.35961 20.13 1.59961 18.87 1.59961 17.5C1.59961 16.13 2.35961 14.86 3.74961 13.93C6.74961 11.94 11.6096 11.94 14.5896 13.93C15.9696 14.85 16.7396 16.11 16.7396 17.48C16.7396 18.85 15.9796 20.12 14.5896 21.05C13.0896 22.05 11.1296 22.55 9.16961 22.55ZM4.57961 15.19C3.61961 15.83 3.09961 16.65 3.09961 17.51C3.09961 18.36 3.62961 19.18 4.57961 19.81C7.06961 21.48 11.2696 21.48 13.7596 19.81C14.7196 19.17 15.2396 18.35 15.2396 17.49C15.2396 16.64 14.7096 15.82 13.7596 15.19C11.2696 13.53 7.06961 13.53 4.57961 15.19Z" fill="white"/>
            <path d="M18.3402 20.75C17.9902 20.75 17.6802 20.51 17.6102 20.15C17.5302 19.74 17.7902 19.35 18.1902 19.26C18.8202 19.13 19.4002 18.88 19.8502 18.53C20.4202 18.1 20.7302 17.56 20.7302 16.99C20.7302 16.42 20.4202 15.88 19.8602 15.46C19.4202 15.12 18.8702 14.88 18.2202 14.73C17.8202 14.64 17.5602 14.24 17.6502 13.83C17.7402 13.43 18.1402 13.17 18.5502 13.26C19.4102 13.45 20.1602 13.79 20.7702 14.26C21.7002 14.96 22.2302 15.95 22.2302 16.99C22.2302 18.03 21.6902 19.02 20.7602 19.73C20.1402 20.21 19.3602 20.56 18.5002 20.73C18.4402 20.75 18.3902 20.75 18.3402 20.75Z" fill="white"/>
          </svg>
          <span>{{ studentsCount }} دانشجو</span>
        </div>
        <div class="priceDetail">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.7498C11.37 22.7498 10.78 22.5099 10.34 22.0599L8.82001 20.5399C8.70001 20.4199 8.38 20.2899 8.22 20.2899H6.06C4.76 20.2899 3.70999 19.2398 3.70999 17.9398V15.7799C3.70999 15.6199 3.57999 15.2999 3.45999 15.1799L1.94 13.6599C1.5 13.2199 1.25 12.6298 1.25 11.9998C1.25 11.3698 1.49 10.7798 1.94 10.3398L3.45999 8.81979C3.57999 8.69979 3.70999 8.37981 3.70999 8.21981V6.0599C3.70999 4.7599 4.76 3.7098 6.06 3.7098H8.22C8.38 3.7098 8.70001 3.5798 8.82001 3.4598L10.34 1.93979C11.22 1.05979 12.78 1.05979 13.66 1.93979L15.18 3.4598C15.3 3.5798 15.62 3.7098 15.78 3.7098H17.94C19.24 3.7098 20.29 4.7599 20.29 6.0599V8.21981C20.29 8.37981 20.42 8.69979 20.54 8.81979L22.06 10.3398C22.5 10.7798 22.75 11.3698 22.75 11.9998C22.75 12.6298 22.51 13.2199 22.06 13.6599L20.54 15.1799C20.42 15.2999 20.29 15.6199 20.29 15.7799V17.9398C20.29 19.2398 19.24 20.2899 17.94 20.2899H15.78C15.62 20.2899 15.3 20.4199 15.18 20.5399L13.66 22.0599C13.22 22.5099 12.63 22.7498 12 22.7498ZM4.51999 14.1198C4.91999 14.5198 5.20999 15.2199 5.20999 15.7799V17.9398C5.20999 18.4098 5.59 18.7899 6.06 18.7899H8.22C8.78 18.7899 9.48001 19.0798 9.88 19.4798L11.4 20.9998C11.72 21.3198 12.28 21.3198 12.6 20.9998L14.12 19.4798C14.52 19.0798 15.22 18.7899 15.78 18.7899H17.94C18.41 18.7899 18.79 18.4098 18.79 17.9398V15.7799C18.79 15.2199 19.08 14.5198 19.48 14.1198L21 12.5998C21.16 12.4398 21.25 12.2298 21.25 11.9998C21.25 11.7698 21.16 11.5599 21 11.3999L19.48 9.87985C19.08 9.47985 18.79 8.77981 18.79 8.21981V6.0599C18.79 5.5899 18.41 5.2098 17.94 5.2098H15.78C15.22 5.2098 14.52 4.91986 14.12 4.51986L12.6 2.99984C12.28 2.67984 11.72 2.67984 11.4 2.99984L9.88 4.51986C9.48001 4.91986 8.78 5.2098 8.22 5.2098H6.06C5.59 5.2098 5.20999 5.5899 5.20999 6.0599V8.21981C5.20999 8.77981 4.91999 9.47985 4.51999 9.87985L3 11.3999C2.84 11.5599 2.75 11.7698 2.75 11.9998C2.75 12.2298 2.84 12.4398 3 12.5998L4.51999 14.1198Z" fill="white"/>
            <path d="M15.0002 16C14.4402 16 13.9902 15.55 13.9902 15C13.9902 14.45 14.4402 14 14.9902 14C15.5402 14 15.9902 14.45 15.9902 15C15.9902 15.55 15.5502 16 15.0002 16Z" fill="white"/>
            <path d="M9.01001 10C8.45001 10 8 9.55 8 9C8 8.45 8.45 8 9 8C9.55 8 10 8.45 10 9C10 9.55 9.56001 10 9.01001 10Z" fill="white"/>
            <path d="M8.99945 15.75C8.80945 15.75 8.61945 15.68 8.46945 15.53C8.17945 15.24 8.17945 14.7599 8.46945 14.4699L14.4695 8.46994C14.7595 8.17994 15.2395 8.17994 15.5295 8.46994C15.8195 8.75994 15.8195 9.24 15.5295 9.53L9.52945 15.53C9.37945 15.68 9.18945 15.75 8.99945 15.75Z" fill="white"/>
          </svg>
          <div class="priceDiscount" v-if="discount > 0">
            <div>
              <span class="discountBadge">{{ discount }}%</span>
              <small>{{ realPrice.toLocaleString() }} تومان</small>
            </div>
            <strong>{{ price.toLocaleString() }} <sub>تومان</sub></strong>
          </div>
          <strong v-else-if="discount === 0 && price > 0"> {{ price.toLocaleString() }} <sub>تومان</sub></strong>
          <strong v-else> رایگان! </strong>
        </div>
      </div>
      <div class="flex w-full items-center mt-2 space-x-2 space-x-reverse">
        <base-button is-link :link="`/courses/${slug}`" color="primary" fill-flex>مشاهده دوره</base-button>
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
import {ApiUrl} from "~/utilities/ApiUrls";
import {AddFavorite} from "~/services/course.service";
import {errorAlert, successAlert} from "~/services/alert.service";

const props = defineProps({
  id: {
    type: Number,
    required:true,
  },
  title: {
    type: String,
    required:true,
  },
  slug: {
    type: String,
    required:true,
  },
  imageName: {
    type: String,
    required:true,
  },
  time: {
    type: String,
    required:true,
  },
  studentsCount: {
    type: Number,
    required:true,
  },
  price: {
    type: Number,
    required:true,
  },
  discount: {
    type: Number,
    required:true,
  },
  realPrice: {
    type: Number,
    required:true,
  },
})

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