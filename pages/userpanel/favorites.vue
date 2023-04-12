<template>
  <div>
    <Head>
      <Title>علاقه مندی های من</Title>
    </Head>

    <u-divider title="علاقه مندی های من" />
    <div class="w-full mt-4">
      <u-table :has-filter="false">
        <template #table-header>
          <th scope="col" class="px-4 py-3">نام دوره</th>
          <th scope="col" class="px-4 py-3">نوع پست</th>
          <th scope="col" class="px-4 py-3">
            <span class="sr-only">عملیات</span>
          </th>
        </template>
        <template v-slot:table-body="{showOption}">
          <tr class="border-b dark:border-gray-700" v-for="(f,i) in favorites">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink :to="`/courses/${f.postSlug}`" class="link" >{{f.postTitle}}</NuxtLink>
            </th>
            <td class="px-4 py-3">
              <u-badge v-if="f.postType === EPostType.Course">دوره</u-badge>
              <u-badge v-if="f.postType === EPostType.Shop">پروژه</u-badge>
            </td>
            <td class="px-4 py-3 flex items-center justify-end">
              <button @click.prevent="showOption(i)" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100" type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              <div class="hidden table-option z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" >
                  <li>
                    <NuxtLink :to="`/courses/${f.postSlug}`" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">نمایش</NuxtLink>
                  </li>
                  <li>
                    <button @click.prevent="removeFavorite(f.postId)" class="w-full text-right block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">حذف</button>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </template>

      </u-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FavoriteDto} from "~/models/favoriteDto";
import {DeleteFavorite, GetUserFavorites} from "~/services/course.service";
import {EPostType} from "~/models/question/addQuestionViewModel";
import {successAlert} from "~/services/alert.service";

definePageMeta({
  layout: "user",
  middleware:'auth',
})

const favorites = ref<FavoriteDto>();
onMounted(async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetUserFavorites();
  if(result.isSuccess)
    favorites.value = result.data;
}

const removeFavorite = async (postId:Number)=>{
  const result = await DeleteFavorite(postId);
  if(result.isSuccess){
    successAlert();
    await loadData();
  }
}

</script>