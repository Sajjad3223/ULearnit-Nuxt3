<template>
  <div class="max-w-sm relative bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <NuxtLink :to="url">
      <base-img class="rounded-t-lg w-full object-cover" :src="`/ulearnit/roadmap/images/${post.imageName}`" alt=""/>
    </NuxtLink>
    <div class="p-5 pb-10 flex flex-col">
      <NuxtLink :to="url">
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{{post.title}}</h5>
      </NuxtLink>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400" v-html="post.content?.slice(0,150)+'...'"></p>
      <NuxtLink :to="url" class="absolute inline-flex items-center bottom-4 left-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        مطالعه
        <svg aria-hidden="true" class="w-4 h-4 mr-2 -ml-1 rotate-180" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {RoadmapPostDto} from "~/models/roadmap/roadmapDto";

const props = defineProps<{
  post: RoadmapPostDto,
}>();

const url = `/roadmaps/${props.post.slug}`;
</script>