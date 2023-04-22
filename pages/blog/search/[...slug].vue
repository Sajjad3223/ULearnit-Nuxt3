<template>
  <div class="grid grid-cols-4 gap-4">
    <Head>
      <Title>
        جستجوی مقالات
      </Title>
    </Head>
    <blog-card v-for="p in posts" :post="p" :key="p"/>
  </div>
</template>

<script setup lang="ts">
import {GetPostsByFilter} from "~/services/blog.service";
import {PostFilterData} from "~/models/post/postFilterData";

const posts = ref<PostFilterData[]>();
const route = useRoute();
onMounted(async ()=>{
  const categorySlug = route.params?.slug[0]?.split('category-')[1];
  const search = route.query?.q;
  const result = await GetPostsByFilter(categorySlug,search);
  if(result.isSuccess)
    posts.value = result.data.data;
})
</script>