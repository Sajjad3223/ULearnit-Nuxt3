<template>
  <div class="w-full">
    <u-divider title="دوره های پسندیده شده" />
    <div class="liked-courses">
      <ul v-if="favorites !== undefined">
        <user-favorites-favorite v-for="f in favorites" :favorite="f" @favoriteRemoved="loadData"/>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {FavoriteDto} from "~/models/favoriteDto";
import {GetUserFavorites} from "~/services/course.service";

const favorites = ref<FavoriteDto>();
onMounted(async ()=>{
  await loadData();
})

const loadData = async ()=>{
  const result = await GetUserFavorites();
  if(result.isSuccess)
    favorites.value = result.data;
}
</script>
