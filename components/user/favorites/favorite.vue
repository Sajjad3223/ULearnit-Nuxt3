<template>
  <li>
    <NuxtLink :to="`/courses/${favorite.postSlug}`" >
      {{favorite.postTitle}}
    </NuxtLink>
    <button @click.prevent="removeFavorite" >
      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.29118 11.7827C2.33937 11.9994 2.38554 12.2085 2.43013 12.4104C2.68728 13.5747 2.89148 14.4993 3.12328 15.265C3.39351 16.1577 3.66835 16.7128 4.00853 17.0915C4.65024 17.8059 5.80747 18.1997 8.99989 18.1997C12.1923 18.1997 13.3495 17.8059 13.9912 17.0915C14.3314 16.7128 14.6063 16.1577 14.8765 15.265C15.1083 14.4993 15.3125 13.5747 15.5696 12.4104C15.6142 12.2085 15.6604 11.9995 15.7086 11.7827C16.3263 9.00481 15.8978 7.71303 15.054 7.00671C14.5839 6.61325 13.8798 6.30198 12.8532 6.09521C11.8293 5.889 10.5526 5.7999 8.99989 5.7999C7.44714 5.7999 6.17053 5.889 5.14662 6.09521C4.11997 6.30198 3.41589 6.61325 2.94583 7.00671C2.10199 7.71303 1.67347 9.00481 2.29118 11.7827Z" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.99976 9.6001V14.4M5.7998 9.6001V14.4M12.1997 9.6001V14.4" stroke="#FF5555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5998 1.45592C13.559 1.66814 15.5581 2.44662 16.7154 3.14315C17.1886 3.42795 17.3413 4.04241 17.0565 4.51561C16.7717 4.9888 16.1573 5.14153 15.6841 4.85674C14.6759 4.24997 12.5322 3.39997 8.99983 3.39997C5.45272 3.39997 3.25161 4.25633 2.34016 4.84146C1.8754 5.13982 1.25677 5.00493 0.958411 4.54018C0.660049 4.07542 0.794938 3.45679 1.25969 3.15843C2.3734 2.44346 4.43183 1.66697 7.39985 1.45566V1C7.39985 0.447715 7.84757 0 8.39985 0H9.59981C10.1521 0 10.5998 0.447715 10.5998 1V1.45592Z" fill="#FF5555"/>
      </svg>
    </button>
  </li>
</template>

<script setup lang="ts">
import {FavoriteDto} from "~/models/favoriteDto";
import {DeleteFavorite} from "~/services/course.service";
import {successAlert} from "~/services/alert.service";

const props = defineProps<{
  favorite:FavoriteDto
}>()

const emits = defineEmits(['favoriteRemoved'])

const removeFavorite = async ()=>{
  const result = await DeleteFavorite(props.favorite.postId);
  if(result.isSuccess){
    successAlert();
    emits('favoriteRemoved');
  }
}
</script>
