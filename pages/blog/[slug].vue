<template>
  <div v-if="post != undefined || pending">
    <main class="flex flex-col-reverse lg:flex-row pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col px-4 mx-auto max-w-screen-xl ">
        <article
            class="mx-auto w-full max-w-screen-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">

          <header class="mb-4 lg:mb-6 not-format relative">
            <h1 class="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">
              {{ post.title }}</h1>
            <bread-crumb :links="[
            {title:'وبلاگ',link:`/blog/search`},
            {title:post.category.title,link:`/blog/search/category-${post.category.slug}`},
            {title:post.subCategory.title,link:`/blog/search/category-${post.subCategory.slug}`},
            {title:post.title},
            ]"/>
            <base-img :src="`/ulearnit/blog/banner/${post.imageName}`" class="w-full rounded-lg mt-4 shadow-md"
                      style="border-bottom-right-radius: 34em"/>
            <address class="flex items-center lg:absolute lg:bottom-8 right-0 not-italic"
                     v-if="post.writer != undefined">
              <div class="inline-flex items-center ml-3 text-sm text-gray-900 dark:text-white">
                <base-img class="ml-4 w-16 h-16 rounded-full object-cover"
                          :src="`/ulearnit/user/avatars/${post.writer?.avatarName}`" :alt="post.writer.writerName"/>
                <div class="flex flex-col items-start">
                  <strong rel="author"
                          class="lg:text-xl font-bold text-gray-900 dark:text-white">{{ post.writer.writerName }}</strong>
                  <u-date class="block text-sm lg:text-base font-light text-gray-500 dark:text-gray-400"
                          :date="post.creationDate"/>
                </div>
              </div>
            </address>
          </header>
          <div class="text-justify pl-4">
            <p ref="content" v-html="post.content"></p>
          </div>
          <u-tags title="برچسب ها" :tags="tags"/>
        </article>
        <hr class="my-6 opacity-50">
        <comments :post-type="EPostType.Blog" :post-id="post.id"/>
      </div>
      <hr class="lg:hidden my-10 opacity-30">
      <div class="w-full lg:w-1/3">
        <short-link :link="`${CurrentDomainUrl}/b/${post.shortLink}`" class="w-full mb-4"/>
        <blog-related-posts :post-id="post.id"/>
      </div>
    </main>

    <u-seo-data :seo-data="post.seoData" :image-url="`${FtpUrl}/blog/banner/${post.imageName}`" :image-width="imgWidth"
                :image-height="imgHeight"/>

  </div>
  <div class="relative flex flex-col justify-center space-y-4" v-else>
    <div class="w-full flex gap-6 items-start animate-pulse">
      <div class="flex-1 flex flex-col gap-4">
        <div class="p-3 rounded-full bg-gray-800"></div>
        <div class="p-1 rounded-full bg-gray-800"></div>
        <div class="h-[400px] rounded-lg bg-gray-800"></div>
        <div class="p-1 rounded-full bg-gray-800"></div>
        <div class="p-1 rounded-full bg-gray-800"></div>
        <div class="p-1 rounded-full bg-gray-800"></div>
      </div>
      <div class="w-1/3 flex flex-col gap-4">
        <div class="h-[100px] rounded-lg bg-gray-800"></div>
        <div class="p-1 rounded-full bg-gray-800"></div>
        <div class="h-[500px] rounded-lg bg-gray-800"></div>
      </div>
    </div>
    <div class="absolute left-1/2 scale-[200%] flex items-center space-x-2 space-x-reverse mt-2 mx-auto">
      <svg class="animate-spin -mr-1 mr-3 h-5 w-5 text-indigo-500 dark:text-indigo-300"
           xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import {PostDto} from "~/models/blog/postDto";
import {GetPostBySlug} from "~/services/blog.service";
import {EPostType} from "~/models/comment/commentDto";
import {CurrentDomainUrl, FtpUrl} from "~/utilities/ApiUrls";
import {GetCourseBySlug} from "~/services/course.service";

const tags = ref<string[]>();

const post = ref<PostDto>();
const content = ref();

const route = useRoute();
const {
  data: result,
  pending
} = await useAsyncData("getPost", async () => await GetPostBySlug(route.params?.slug?.toString()))
if (result.value?.isSuccess) {
  post.value = result.value.data;
  tags.value = post.value.tags?.split(',');
}

const imgWidth = ref<number>();
const imgHeight = ref<number>();

imgWidth.value = 1000;
imgHeight.value = 714;

onMounted(async () => {
  const img = new Image();
  img.src = post.value !== undefined ? `${FtpUrl}/blog/banner/${post?.value.imageName}` : '';
  imgWidth.value = img.width;
  imgHeight.value = img.height;
  content.value.innerHTML = post.value?.content;
})

</script>
