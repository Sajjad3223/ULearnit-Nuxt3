<template>
  <div>
    <Head>
      <Title>
        جستجوی دوره ها
      </Title>
    </Head>
    <course-filter :filter-params="filterResult?.data.filterParams"/>

    <div class="m-4">
      <div class="grid grid-cols-4 gap-8">
        <card-skeleton v-for="i in 4" v-if="pending"/>
        <u-alert class="col-span-full" color="warning" v-if="!pending && filterResult.data.entityCount === 0">آموزشی وجود ندارد!ُ</u-alert>
        <u-card v-for="course in filterResult?.data.data"
                :course-card="course" />
      </div>
    </div>

    <u-pagination class="flex justify-center" :pagination-data="paginationData" />
  </div>
</template>

<script setup lang="ts">
import {useSearch} from "~/composables/search";
import {PaginationData} from "~/models/baseFilterResult";
import {FillPaginationData} from "~/utilities/FillPaginationData";

const courses = ref();

const search = useSearch();

const { data: filterResult, refresh, pending } = await useAsyncData("search", () => search.getCoursesByFilter())

const route = useRoute();
watch(() => route.query, () => {
  refresh();
})
const paginationData:PaginationData = FillPaginationData(filterResult?.value?.data);

</script>