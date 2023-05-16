<template>
  <div v-if="post != undefined">

    <u-seo-data :seo-data="post.seoData"/>

    <main class="flex flex-col lg:flex-row pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div class="flex flex-col px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-screen-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">

          <header class="mb-4 lg:mb-6 not-format">
            <h1 class="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">{{post.title}}</h1>
            <bread-crumb :links="[
            {title:'نقشه راه',link:`/roadmaps/search`},
            {title:post.category.title,link:`/roadmaps/search/category-${post.category.slug}`},
            {title:post.title},
            ]" />
            <video :poster="`${ApiUrl}/roadmap/images/${post.imageName}`" controls class="w-full rounded-lg mt-4" >
              <source :src="`${ApiUrl}/roadmap/videos/${post.videoName}`" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            <address class="flex items-center my-6 not-italic" v-if="post.roadmapWriter != undefined">
              <div class="inline-flex items-center ml-3 text-sm text-gray-900 dark:text-white" >
                <base-img class="ml-4 w-16 h-16 rounded-full object-cover" :src="`/ulearnit/writer/avatar/${post.roadmapWriter?.avatarName}`" :alt="post.roadmapWriter.writerName" />
                <div>
                  <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{{post.roadmapWriter?.writerName}}</a>
                  <p class="text-base font-light text-gray-500 dark:text-gray-400">
                    <u-date :date="post.creationDate" />
                  </p>
                </div>
              </div>
            </address>
          </header>
          <div class="text-justify pl-4">
            <p v-html="post.content"></p>
          </div>
          <u-tags title="برچسب ها" :tags="tags"/>
        </article>
        <hr class="my-6 opacity-50">
        <comments :post-type="EPostType.Roadmap" :post-id="post.id"/>
      </div>
      <hr class="lg:hidden my-10 opacity-30">
      <div class="p-4 border-4 border-gray-700 w-full lg:w-1/3 rounded-xl h-max">
        <u-divider title="مقالات مرتبط" />

        <article :class="['w-full flex flex-col p-4 border-gray-700',{'border-b':i !== 3}]" v-for="i in 3">
          <a href="#">
            <base-img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png" class="w-full mb-5 rounded-lg" alt="Image 1" />
          </a>
          <h2 class="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
            <a href="#">عنوان مقاله مرتبط</a>
          </h2>
          <p class="mb-4 font-light text-gray-500 dark:text-gray-400">زبان برنامه نویسی معروف ++C (سی پلاس پلاس) یک زبان برنامه نویسی عمومی است که بیش از 40 سال است که برای برنامه نویسی بازی، مهندسی نرم افزار، ساختار داده، توسعه مرورگرها، سیستم عامل ها، اپلیکیشن ها، و موارد دیگر استفاده می شود.</p>
          <base-button is-link link="/blog" w-full>مطالعه</base-button>
        </article>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {EPostType} from "~/models/comment/commentDto";
import {RoadmapPostDto} from "~/models/roadmap/roadmapDto";
import {GetRoadmapPostBySlug} from "~/services/roadmap.service";
import {ApiUrl} from "~/utilities/ApiUrls";

const tags = ref<string[]>();

const post = ref<RoadmapPostDto>();
const route = useRoute();
onMounted(async ()=>{
  const result = await GetRoadmapPostBySlug(route.params.slug);
  if(result.isSuccess) {
    post.value = result.data;
    tags.value = post.value.tags?.split(',');
    console.log(post.value)
  }
})
</script>
