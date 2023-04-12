<template>
  <div class="grid grid-cols-4 gap-4">
    <Head>
      <Title>
        جستجوی نقشه راه ها
      </Title>
    </Head>

    <blog-roadmap-card v-for="p in posts" :post="p" :key="p"/>
  </div>
</template>

<script setup lang="ts">
import {RoadmapPostDto} from "~/models/roadmap/roadmapDto";
import {GetRoadmapPostsByFilter} from "~/services/roadmap.service";

const posts = ref<RoadmapPostDto>();
const route = useRoute();
onMounted(async ()=>{
  const categorySlug = route.params?.slug[0]?.split('category-')[1];
  const search = route.query?.q;
  const result = await GetRoadmapPostsByFilter(categorySlug,search);
  if(result.isSuccess)
    posts.value = result.data;
})
</script>