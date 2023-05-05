<template>
  <div class="p-4 border-4 border-gray-300 dark:border-gray-700 w-full rounded-xl h-max">
    <u-divider title="مقالات مرتبط" />

    <article :class="['w-full flex flex-col p-4 border-gray-700',{'border-b':p !== 3}]" v-if="posts != undefined" v-for="p in posts" :key="p">
      <NuxtLink :to="`/blog/${p.slug}`">
        <base-img :src="`/ulearnit/blog/banner/${p.imageName}`" class="w-full mb-5 rounded-lg" :alt="p.title" />
      </NuxtLink>
      <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
        <NuxtLink :to="`/blog/${p.slug}`">{{p.title}}</NuxtLink>
      </h2>
      <base-button is-link :link="`/blog/${p.slug}`" w-full>مطالعه</base-button>
    </article>
  </div>
</template>

<script setup lang="ts">
import {PostFilterData} from "~/models/post/postFilterData";
import {GetRelatedPosts} from "~/services/blog.service";

const props = defineProps<{
  postId:number,
}>();

const posts = ref<PostFilterData[]>();

onMounted(async ()=>{
  const result = await GetRelatedPosts(props.postId);
  if(result.isSuccess){
    posts.value = result.data.data;
  }
})

</script>