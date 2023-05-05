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
        <u-card v-if="filterResult != null" v-for="course in filterResult?.data.data"
                :course-card="course" />
        <card-skeleton v-for="i in 4" v-else/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSearch} from "~/composables/search";

const courses = ref();

const search = useSearch();

const { data: filterResult, refresh, pending } = await useAsyncData("search", () => search.getCoursesByFilter())

const route = useRoute();
watch(() => route.query, () => {
  refresh();
})

</script>