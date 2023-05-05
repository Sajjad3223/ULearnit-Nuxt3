<template>
  <div>
    <Head>
      <Title>پرسش های من</Title>
    </Head>

    <u-divider title="پرسش های من" />
    <div class="w-full mt-4">
      <u-table v-if="userQuestions !== undefined && userQuestions.length > 0" :pagination-data="paginationData">
        <template #table-header>
          <th scope="col" class="px-4 py-3">عنوان پرسش</th>
          <th scope="col" class="px-4 py-3">دوره مربوطه</th>
          <th scope="col" class="px-4 py-3">وضعیت</th>
          <th scope="col" class="px-4 py-3">تاریخ ثبت</th>
          <th scope="col" class="px-4 py-3">توضیحات</th>
        </template>
        <template #table-body>
          <tr class="border-b dark:border-gray-700" v-for="(q,i) in userQuestions">
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink :to="`/questions/${q.postId}/${q.id}`" class="link">{{q.title}}</NuxtLink>
            </th>
            <th scope="row" class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <NuxtLink :to="`/questions/course?postType=0&postId=${q.postId}`" class="link">{{q.postTitle}}</NuxtLink>
            </th>
            <td class="px-4 py-3">

              <u-badge v-if="q.isResolved" color="success">حل شده</u-badge>
              <u-badge v-if="!q.isResolved && q.answersCount === 0" >بدون پاسخ</u-badge>
              <u-badge v-if="!q.isResolved && q.answersCount > 0" color="warning">پاسخ داده شده</u-badge>
            </td>
            <td class="px-4 py-3">{{new Date(q.creationDate).toLocaleDateString('fa-IR')}}</td>
          </tr>
        </template>
      </u-table>
      <u-alert v-else>
        شما هیچ پرسشی ثبت نکرده اید!
      </u-alert>
    </div>
  </div>
</template>

<script setup lang="ts">
import {QuestionFilterData, QuestionFilterParams} from "~/models/question/questionFilterParams";
import {GetQuestionsOfUser} from "~/services/question.service";
import {FillPaginationData} from "~/utilities/FillPaginationData";
import {PaginationData} from "~/models/baseFilterResult";

definePageMeta({
  layout: "user",
  middleware:'auth',
})

const userQuestions = ref<QuestionFilterData[]>();
const paginationData = ref<PaginationData>();

const route = useRoute();
const filterParams:QuestionFilterParams = reactive({
  take: Number(route.query?.take ?? '10'),
  pageId: Number(route.query?.pageId ?? '1'),
  search: route.query?.q?.toString() ?? null
})

watch(
    ()=>route.query,
    async ()=>{
      await loadData();
    }
)

onMounted(async ()=>{
  await loadData();
})

const setFilters = ()=> {
  filterParams.take = Number(route.query?.take ?? '10');
  filterParams.pageId = Number(route.query?.pageId ?? '1');
  filterParams.search = route.query?.q?.toString() ?? null;
}

const loadData = async ()=>{
  setFilters();
  const result = await GetQuestionsOfUser(filterParams);
  if(result.isSuccess) {
    userQuestions.value = result.data.data;
    paginationData.value = FillPaginationData(result.data);
  }
}
</script>