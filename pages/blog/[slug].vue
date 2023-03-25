<template>
  <div v-if="post != undefined">
    <main class="flex flex-col lg:flex-row pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div class="flex flex-col px-4 mx-auto max-w-screen-xl ">
        <article class="mx-auto w-full max-w-screen-xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">

          <header class="mb-4 lg:mb-6 not-format">
            <h1 class="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-3xl dark:text-white">{{post.title}}</h1>
            <bread-crumb :links="[
            {title:post.category.title,link:`/blog/search/category-${post.category.slug}`},
            {title:post.subCategory.title,link:`/blog/search/category-${post.subCategory.slug}`},
            {title:post.title},
            ]" />
            <base-img :src="`/ulearnit/blog/banner/${post.imageName}`" class="w-full rounded-lg mt-4"/>
            <address class="flex items-center my-6 not-italic" v-if="post.writer != undefined">
              <div class="inline-flex items-center ml-3 text-sm text-gray-900 dark:text-white" >
                <base-img class="ml-4 w-16 h-16 rounded-full object-cover" :src="`/ulearnit/writer/avatar/${post.writer?.avatarName}`" :alt="post.writer.writerName" />
                <div>
                  <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{{post.writer.writerName}}</a>
                  <p class="text-base font-light text-gray-500 dark:text-gray-400"><time pubdate datetime="2022-02-08" title="February 8th, 2022">
                    {{ new Date(post.creationDate).toLocaleDateString('fa-IR') }}</time></p>
                </div>
              </div>
            </address>
          </header>
          <div class="text-justify pl-4">
            <p v-html="post.content"></p>
          </div>
        </article>
        <hr class="my-6 opacity-50">
        <comments />
      </div>
      <hr class="lg:hidden my-8 opacity-30">
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
import {PostDto} from "~/models/blog/postDto";
import {GetPostBySlug} from "~/services/blog.service";

const post = ref<PostDto>();
const route = useRoute();
onMounted(async ()=>{
  const result = await GetPostBySlug(route.params.slug);
  if(result.isSuccess) {
    post.value = result.data;
  }
})
</script>