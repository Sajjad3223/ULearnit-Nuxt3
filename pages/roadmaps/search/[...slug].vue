<template>
  <div>
    <Head>
      <Title>
        جستجوی مقالات
      </Title>
    </Head>
    <Form @submit="searchPosts" class="flex items-end w-full space-x-4 space-x-reverse">
      <div class="flex flex-col space-y-1">
        <label for="">دسته بندی</label>
        <select v-model="category" name="category" class="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-8 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option selected value="">همه دسته بندی ها</option>
          <option v-for="c in categories" :value="c.slug" >{{c.title}}</option>
        </select>
      </div>
      <base-input name="search" v-model="search" class="flex-1" label="جستجو در مقالات" />
      <base-button type="submit" >جستجو</base-button>
    </Form>
    <div class="grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      <blog-card v-for="p in posts" :post="p" :key="p" v-if="posts != null && posts.length > 0"/>
      <u-alert class="col-span-full" color="warning" v-else>مقاله ای وجود ندارد!ُ</u-alert>
    </div>

    <u-pagination :pagination-data="paginationData" />

  </div>
</template>

<script setup lang="ts">
import {Form} from 'vee-validate';
import {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";
import {GetRoadmapPostsByFilter} from "~/services/roadmap.service";
import {RoadmapFilterParams, RoadmapPostDto} from "~/models/roadmap/roadmapDto";
import {GetRoadmapCategories} from "~/services/admin/roadmapCategory.service";

const search = ref();
const category = ref("");

const posts = ref<RoadmapPostDto[]>();
const paginationData =ref<PaginationData>();

const route = useRoute();
const router = useRouter();

const searchPosts = ()=>{
  const queryParams = route.query;
  router.push({
    path: category.value !== undefined ? `/blog/search/category-${category.value}` : `/blog/search`,
    query: {
      ...queryParams,
      q:search.value
    },
  });
}

watch(
    ()=>route.query,
    async ()=> await loadData()
);

const categories = ref();
onMounted(async ()=>{
  await loadData();
  const result = await GetRoadmapCategories();
  categories.value = result.data;
})

const filterParams:RoadmapFilterParams = reactive({
  take: Number(route.query?.take ?? '10'),
  pageId: Number(route.query?.pageId ?? '1'),
  search: route.query?.q?.toString() ?? null,
  categorySlug:route.params?.slug[0]?.split('category-')[1] ?? null
});

const loadData = async ()=>{
  const result = await GetRoadmapPostsByFilter(filterParams);
  if(result.isSuccess) {
    posts.value = result.data.data;
    paginationData.value = FillPaginationData(result.data);
  }
}
</script>